export class Server {
    clients = new Set<any>();
    on = jest.fn();
    constructor(_: any) {}
}

export default class WebSocket {
    static OPEN = 1;
    static CLOSED = 3;

    readyState = WebSocket.OPEN;
    send = jest.fn();
    close = jest.fn();
    on = jest.fn();
    constructor(_: string) {}
}




