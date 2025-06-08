const WebSocket = class {
    static OPEN = 1;
    readyState = WebSocket.OPEN;
    send = jest.fn();
    close = jest.fn();
    on = jest.fn();
};

const Server = class {
    constructor(_) {
        this.clients = new Set();
        this.on = jest.fn();
    }
};

module.exports = {
    default: WebSocket,
    Server
};



