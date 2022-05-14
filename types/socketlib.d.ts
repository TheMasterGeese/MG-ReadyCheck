const RECIPIENT_TYPES = {
	ONE_GM: 0,
	ALL_GMS: 1,
	EVERYONE: 2,
}

const MESSAGE_TYPES = {
	COMMAND: 0,
	REQUEST: 1,
	RESPONSE: 2,
	RESULT: 3,
	EXCEPTION: 4,
	UNREGISTERED: 5,
}

class Socketlib {
    public SocketLib() {}
    public registerModule(moduleName : string) : SocketlibSocket {}
    public registerSystem(systemId : string) : SocketlibSocket {}
}

class SocketlibSocket {
    public SocketLibSocket(moduleName : string, moduleType : string) {}
    public register(name: string, func : Function) {}

    public async executeAsGM(handler : Function, ...args) {}
    public async executeAsUser(handler : Function, userId : string, ...args) {}
    public async executeForAllGMs(handler : Function, ...args) {}
    public async executeForOtherGMs(handler : Function, ...args) {}
    public async executeForEveryone(handler : Function, ...args) {}
    public async executeForOthers(handler : Function, ...args) {}
    public async executeForUsers(handler : Function, ...args) {}
}




