/* eslint-disable @typescript-eslint/await-thenable */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const popoutBtnFile = 'modules/mg-ready-check/handlebars/popoutBtn.hbs';
const sidebarBtnFile = 'modules/mg-ready-check/handlebars/sidebarBtn.hbs';
const readyIndicatorFile = 'modules/mg-ready-check/handlebars/readyIndicator.hbs';
/**
 * Register all settings
 */
Hooks.once("init", function () {

	game.settings.register("mg-ready-check", "showChatMessagesForUserUpdates", {
		name: game.i18n.localize("READYCHECK.SettingsChatMessagesForUserUpdatesTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsChatMessagesForUserUpdatesHint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "showChatMessagesForChecks", {
		name: game.i18n.localize("READYCHECK.SettingsChatMessagesForChecksTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsChatMessagesForChecksHint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "playAlertForCheck", {
		name: game.i18n.localize("READYCHECK.SettingsPlayAlertForChecksTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsPlayAlertForChecksHint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "checkAlertSoundPath", {
		name: game.i18n.localize("READYCHECK.SettingsCheckAlertSoundPathTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsCheckAlertSoundPathHint"),
		scope: "world",
		config: true,
		default: 'modules/mg-ready-check/sounds/notification.mp3',
		type: String
	});

	game.settings.register("mg-ready-check", "enableDiscordIntegration", {
		name: game.i18n.localize("READYCHECK.SettingsEnableDiscordIntegrationTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsEnableDiscordIntegrationHint"),
		scope: "world",
		config: true,
		default: false,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "statusResetOnLoad", {
		name: game.i18n.localize("READYCHECK.SettingsStatusResetOnLoadTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsStatusResetOnLoadHint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "pauseOnReadyCheck", {
		name: game.i18n.localize("READYCHECK.SettingsPauseOnReadyCheckTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsPauseOnReadyCheckHint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});

	game.settings.register("mg-ready-check", "unpauseOnAllReady", {
		name: game.i18n.localize("READYCHECK.SettingsUnpauseOnAllReadyTitle"),
		hint: game.i18n.localize("READYCHECK.SettingsUnpauseOnAllReadyHint"),
		scope: "world",
		config: true,
		default: true,
		type: Boolean
	});
});

// Render the status symbols and if the setting is enabled, reset all statuses.
Hooks.once("ready", async function () {

	await loadTemplates([
		popoutBtnFile,
		sidebarBtnFile,
		readyIndicatorFile
	])

	if (game.settings.get('mg-ready-check', 'statusResetOnLoad') && game.user.role === 4) {
		setPlayersToNotReady();
	}
	await updatePlayersWindow();
	if (socket) {
		// create the socket handler
		socket.on('module.mg-ready-check', async (data: ReadyCheckUserData) => {
			if (data.action === 'check') {
				displayReadyCheckDialog(data.dialog ?? game.i18n.localize("READYCHECK.DialogContentReadyCheck"));
			}
			else if (data.action === 'update') {
				await processReadyResponse(data);
			}
			else {
				console.error("Unrecognized ready check action")
			}
		});
	}
});


// Set Up Buttons and Socket Stuff
Hooks.on('renderChatLog', async function () {
	await createButtons();

});

// Update the display of the Player UI.
Hooks.on('renderPlayerList', async function () {
	await updatePlayersWindow();
});

/**
 * Initiate a ready check
 * 
 * @param message The prompt to display for the ready check
 * @param users The users to include in the ready check. Defaults to all Users.
 */
Hooks.on('initReadyCheck', async function (message: string = game.i18n.localize("READYCHECK.DialogContentReadyCheck"), users?: User[]) {
	await initReadyCheck(message, users ?? getUsersWithTokenInScene());
});

/**
 * Set the status of certain players to "Not Ready"
 * 
 * @param players The players to set status to "Not Ready"
 */
function setPlayersToNotReady(players: User[] = game.users.contents) {
	players.forEach((user: User) => {
		user.setFlag('mg-ready-check', 'isReady', false).catch(reason => {
			console.error(reason)
		});
	});
}

/**
 * Create the ready check buttons
 */
async function createButtons() {
	//set title based on whether the user is player or GM
	const btnTitle: string = game.user.role === 4 ? game.i18n.localize("READYCHECK.UiGmButton") : game.i18n.localize("READYCHECK.UiChangeButton");

	const sidebarBtn = $(await renderTemplate(sidebarBtnFile, {
		btnTitle: btnTitle
	}));

	const popoutBtn = $(await renderTemplate(popoutBtnFile, {
		btnTitle: btnTitle
	}));
	const sidebarDiv = $("#sidebar").find(".chat-control-icon");
	const popoutDiv = $("#chat-popout").find(".chat-control-icon");
	const btnAlreadyInSidebar = $("#sidebar").find(".crash-ready-check-sidebar").length > 0;
	const btnAlreadyInPopout = $("#chat-popout").find(".crash-ready-check-popout").length > 0;

	// Add the button to the sidebar if it doesn't already exist
	if (!btnAlreadyInSidebar) {
		sidebarDiv.before(sidebarBtn);
		jQuery(".crash-ready-check-sidebar").on("click", readyCheckOnClick);
	}

	// Add the button to the popout if it doesn't already exist
	if (!btnAlreadyInPopout) {
		popoutDiv.before(popoutBtn);
		jQuery(".crash-ready-check-popout").on("click", readyCheckOnClick);
	}

	/**
	 * Ready check button listener
	 * @param event the button click event
	 */
	function readyCheckOnClick(event: JQuery.ClickEvent) {
		event.preventDefault();
		if (game.user.role === 4) { displayGmDialog(); }
		else { displayStatusUpdateDialog(); }
	}
}

/**
 * Display the dialogue prompting the GM to either start ready check or set status.
 */
function displayGmDialog() {
	const buttons = {
		check: {
			icon: "<i class='fas fa-check'></i>",
			label: game.i18n.localize("READYCHECK.GmDialogButtonCheck"),
			callback: initReadyCheckDefault
		},
		status: {
			icon: "<i class='fas fa-hourglass-half'></i>",
			label: game.i18n.localize("READYCHECK.GmDialogButtonStatus"),
			callback: displayStatusUpdateDialog

		}
	};
	new Dialog({
		title: game.i18n.localize("READYCHECK.GmDialogTitle"),
		content: `<p>${game.i18n.localize("READYCHECK.GmDialogContent")}</p>`,
		buttons: buttons,
		default: "check"
	}).render(true);
}

/**
 * callback function for the GM's ready check button
 */
function initReadyCheckDefault() {
	Hooks.callAll("initReadyCheck");
}

/**
 * Initiate the ready check, notifying players over discord (if setting is enabled) and in-game to set their ready status.
 * 
 * @param message The message to display in the ready check dialogue and to forward to Discord
 */
async function initReadyCheck(message: string = game.i18n.localize("READYCHECK.DialogContentReadyCheck"), users: User[]) {
	if (game.settings.get('mg-ready-check', 'pauseOnReadyCheck') && !game.paused) {
		game.togglePause(true, true);
	}
	const data = { action: 'check', dialog: message };
	setPlayersToNotReady(users);
	if (socket) {
		socket.emit('module.mg-ready-check', data);
	}
	displayReadyCheckDialog(message);
	await playReadyCheckAlert();

	if (game.settings.get('mg-ready-check', 'enableDiscordIntegration')) {
		// For every user in the game, if they have a token in the current scene, ping them as part of the ready check message.
		getUsersWithTokenInScene().forEach((user: User) => {
			message = `@${user.name} ${message}`;
		});

		Hooks.callAll("sendDiscordMessage", message)
	}
}

/**
 * Gets an array of users that have a token in the current scene.
 * @returns The array of users
 */
function getUsersWithTokenInScene(): User[] {
	const usersInScene: User[] = [];
	game.users.contents.forEach((user: User) => {
		const scene: Scene = game.scenes.active
		scene.data.tokens.forEach((token: TokenDocument) => {
			// permissions object that maps user ids to permission enums
			const tokenPermissions = game.actors.get(token.data.actorId).data.permission;

			// if the user owns this token, then they are in the scene.
			if (tokenPermissions[user.id] === 3 && !usersInScene.includes(user)) {
				usersInScene.push(user);
			}
		});
	});
	return usersInScene;
}

/**
 * Set up the dialogue to update your ready status.
 */
function displayStatusUpdateDialog() {
	const data: ReadyCheckUserData = { action: 'update', ready: false, userId: game.userId ?? "" };
	const buttons = {
		yes: {
			icon: "<i class='fas fa-check'></i>",
			label: game.i18n.localize("READYCHECK.StatusReady"),
			callback: async () => { data.ready = true; await updateReadyStatus(data); await displayStatusUpdateChatMessage(data); }
		},
		no: {
			icon: "<i class='fas fa-times'></i>",
			label: game.i18n.localize("READYCHECK.StatusNotReady"),
			callback: async () => { data.ready = false; await updateReadyStatus(data); await displayStatusUpdateChatMessage(data); }
		}
	};

	new Dialog({
		title: game.i18n.localize("READYCHECK.DialogTitleStatusUpdate"),
		content: `<p>${game.i18n.localize("READYCHECK.DialogContentStatusUpdate")}</p>`,
		buttons: buttons,
		default: "yes"
	}).render(true);
}

// 
/**
 * Display the dialogue asking each user if they are ready
 * 
 * @param message The message to display on the dialogue.
 */
function displayReadyCheckDialog(message: string) {
	const data: ReadyCheckUserData = { action: 'update', ready: false, userId: game.userId ?? "", dialog: message };
	const buttons = {
		yes: {
			icon: "<i class='fas fa-check'></i>",
			label: game.i18n.localize("READYCHECK.StatusReady"),
			callback: async () => { data.ready = true; await updateReadyStatus(data); await displayReadyCheckChatMessage(data); }
		}
	};

	new Dialog({
		title: game.i18n.localize("READYCHECK.DialogTitleReadyCheck"),
		content: `<p>${data.dialog}</p>`,
		buttons: buttons,
		default: "yes"
	}).render(true);
}

/**
 * button listener that pdates a user's ready status.
 * @param data button click event data
 */
async function updateReadyStatus(data: ReadyCheckUserData) {
	// If the user is a GM, just update it since the socket go to the sender, and none of the recipients (players)
	// will have the permissions require to update user flags. If the user is not a GM, emit that socket.
	if (isProxyGM(game.user)) {
		await processReadyResponse(data);
	} else if (socket) {
		socket.emit('module.mg-ready-check', data);
	}
}

/**
 * Process a (GM)'s ready repsonse.
 * @param data 
 */
async function processReadyResponse(data: ReadyCheckUserData) {
	if (isProxyGM(game.user)) {
		const userToUpdate = game.users.contents.find((user: User) => user.id === data.userId);
		if (userToUpdate) {
			await userToUpdate.setFlag('mg-ready-check', 'isReady', data.ready);
			ui.players.render();
			let message = "";
			if (allUsersInSceneReady()) {
				// Unpause the game if the setting to do so is enabled.
				if (game.settings.get('mg-ready-check', 'unpauseOnAllReady') && game.paused) {
					game.togglePause(false, true);
				}

				const usersInScene = getUsersWithTokenInScene();
				if (game.settings.get('mg-ready-check', 'enableDiscordIntegration')
					&& usersInScene.find(user => user.id === userToUpdate.id)
				) {
					// We want to only ping the GMs that have a setting indicating that they should be pinged for this notification.
					game.users.contents.forEach((user: User) => {
						const shouldPing = user.getFlag('discord-integration', 'sendGMNotifications') as boolean;
						if (shouldPing) {
							message += `@${user.name} `;
						}
					});
					// Send a message to the GM(s) indicating that all users are ready.
					message += game.i18n.localize("READYCHECK.AllPlayersReady");

					Hooks.callAll("sendDiscordMessage", message);
				}
			}
		} else {
			console.error(`The user with the id ${data.userId} was not found.`);
		}
	}
}

/**
 * Checks if all users in a scene are ready.
 * @returns Returns true if all users are ready, false otherwise.
 */
function allUsersInSceneReady(): boolean {
	let usersReady = true;
	const sceneUsers = getUsersWithTokenInScene();
	sceneUsers.forEach((user: User) => {
		if (!user.getFlag('mg-ready-check', 'isReady')) {
			usersReady = false;
		}
	});
	return usersReady;
}


/**
 * Displays a chat message when a user responds to a ready check
 * 
 * @param data event data from clicking either of the buttons to indicate ready/not ready
 */
async function displayReadyCheckChatMessage(data: ReadyCheckUserData) {
	if (game.settings.get("mg-ready-check", "showChatMessagesForChecks")) {
		// Find the current user
		const currentUser = game.users.contents.find((user: User) => user.data._id === data.userId);
		if (currentUser) {
			const username = currentUser.data.name;
			const content = `${username} ${game.i18n.localize("READYCHECK.ChatTextCheck")}`;
			await ChatMessage.create({ speaker: { alias: "Ready Set Go!" }, content: content });
		} else {
			throw new Error(`The user with the id ${data.userId} was not found.`);
		}
	}
}


/**
 * Display a chat message when a user updates their status.
 * @param data event data from clicking either of the buttons to indicate ready/not ready
 */
async function displayStatusUpdateChatMessage(data: ReadyCheckUserData) {
	if (game.settings.get("mg-ready-check", "showChatMessagesForUserUpdates")) {
		const currentUser = game.users.contents.find((user: User) => user.id === data.userId);
		if (currentUser) {
			const username = currentUser.data.name;
			const status = data.ready ? game.i18n.localize("READYCHECK.StatusReady") : game.i18n.localize("READYCHECK.StatusNotReady");
			const content = `${username} ${game.i18n.localize("READYCHECK.ChatTextUserUpdate")} ${status}`;
			await ChatMessage.create({ speaker: { alias: "Ready Set Go!" }, content: content });
		} else {
			throw new Error(`The user with the id ${data.userId} was not found.`);
		}
	}
}

/**
 * Play sound effect associated with ready check start
 */
async function playReadyCheckAlert() {
	const playAlert = game.settings.get("mg-ready-check", "playAlertForCheck");
	const alertSound = game.settings.get("mg-ready-check", "checkAlertSoundPath");
	if (playAlert && !alertSound) {
		await AudioHelper.play({ src: "modules/mg-ready-check/sounds/notification.mp3", volume: 1, autoplay: true, loop: false }, true);
	} else if (playAlert && alertSound) {
		await AudioHelper.play({ src: alertSound as string, volume: 1, autoplay: true, loop: false }, true);
	}
}

/**
 * Updates the ui of each player's ready status.
 */
async function updatePlayersWindow() {
	const gameUsers = game.users.contents
	for (let i = 0; i < gameUsers.length; i++) {
		// Is the user ready
		const ready = await gameUsers[i].getFlag('mg-ready-check', 'isReady');
		// the Id of the current user
		const userId: string = gameUsers[i].data._id;

		// get the ready/not ready indicator
		const indicator = $("#players").find(`[data-user-id=${userId}] .crash-ready-indicator`);
		const indicatorExists = indicator.length > 0;

		let title: string
		let classToAdd, classToRemove, iconClassToAdd, iconClassToRemove;

		if (ready) {
			title = game.i18n.localize("READYCHECK.PlayerReady");
			classToAdd = "ready";
			classToRemove = "not-ready";
			iconClassToAdd = "fa-check";
			iconClassToRemove = "fa-times";
		} else {
			title = game.i18n.localize("READYCHECK.PlayerNotReady");
			classToAdd = "not-ready";
			classToRemove = "ready";
			iconClassToAdd = "fa-times";
			iconClassToRemove = "fa-check";
		}

		if (indicatorExists) {
			$(indicator).removeClass(classToRemove);
			$(indicator).removeClass(iconClassToRemove);
			$(indicator).addClass(classToAdd);
			$(indicator).addClass(iconClassToAdd);
		} else {
			// Create a new indicator
			$("#players").find("[data-user-id=" + userId + "]").append(
				await renderTemplate(readyIndicatorFile, {
					iconClassToAdd: iconClassToAdd,
					classToAdd: classToAdd,
					title: title
				})
			);
		}
	}
}

function isProxyGM(user: User): boolean {
	const proxyGMId = game.settings.get("mg-living-world-core", "GMProxy");
	return user.id === proxyGMId;
}
/**
 * data passed to button listener functions
 */
class ReadyCheckUserData {
	action = "";
	ready = false;
	userId = "";
	dialog?= "";
}
