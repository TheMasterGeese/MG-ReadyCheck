# MG Living World - Ready Check
## Version 2.1.0
- initReadyCheck hook now allows a list of users to be passed who will be included in the ready check. If not provided, the check defaults to all users with a token in the current scene.
- Players without a token in the current scene that change their ready status will no longer trigger the "All Players Are Ready" message in Discord.
- "All Players Are Ready" message is no longer sent to discord while the discord integration setting is disabled.
- Removed unnecessary dependency on the Discord integration module (all interfacing is done through event hooks).
## Version 2.0.0
- Initial Release of MG Living World overhaul
- Added setting to configure whether the game pauses when a Ready Check is initiated
- Added setting to configure whether the game unpauses when all users with a token in the current scene have indicated they are ready.
- Added setting to configure whether the game resets all players' ready status upon the GM reloading the page.
- Added setting to turn on/off integration with the [Discord Integration](https://github.com/TheMasterGeese/Discord-Integration) mod.
    - When a ready check is initiated, all users with a token in the current scene will be pinged.
    - When all all users with a token in the current scene have indicated they are ready, the GM is notified.
- Added initReadyCheck hook for other modules to trigger ready checks.
    - initReadyCheck hook allows for custom dialog messages to be set.
## Version 1.2.3
- Fixed an issue where some readiness indicators would display twice

## Version 1.2.2
- Fixed an issue where the UI button would duplicate when popping out the chat tab
- Style tweaks
- Temporarily removed Bug Reporter and Manifest+ support until Manifest+ has been re-specced to live in flags.

## Version 1.2.1 (Foundry 0.8.x)
- Compatibility update for Foundry 0.8.2. This version will not work with Foundry 0.7.x. Previous versions remain compatible with Foundry 0.7.x.
- Option to start a ready check is no longer displayed for users with the Assistant GM role, as this role does not have the ability to update Users.
- Fixed a typo
- Compatibility with Bug Reporter
- Manifest+ support

## Version 1.2.0 (Foundry 0.7.x)
- Added an optional setting to play a sound when the ready check is initiated. This is off by default.
- Added a setting to customize the sound that gets played when a ready check is initiated.

## Version 1.1.0
- Added a pair of settings to allow the display of chat messages when a user toggles their ready status or when they respond to a ready check
- Allowed GMs to toggle their own ready status

## Version 1.0.2
- Fixed a bug causing the ready check icon to display strangely in wfrp and probably other systems too.
- Fixed a bug where button would disappear when re-rendering the chat log.

## Version 1.0.1
Fixed a bug where ready indicator was displaying in the actor's tab when Permission Viewer was also being used.

## Version 1.0.0
Initial release
