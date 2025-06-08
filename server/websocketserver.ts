import WebSocket, { Server as WebSocketServer } from 'ws';
import { Server } from 'http';

let websocketServer: WebSocketServer;
let activeUsers: { id: string; name: string }[] = [];

export const initializeWebsocketServer = (server: Server): void => {
  websocketServer = new WebSocketServer({ server });

  websocketServer.on('connection', onConnection);
};

function broadcastMessage(message: any): void {
  const data = JSON.stringify(message);
  websocketServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

function onConnection(ws: WebSocket): void {
  console.log('New websocket connection');

  ws.on('message', (message) => {
    const data = JSON.parse(message.toString());
    console.log('Message received', data);

    switch (data.type) {
      case 'newUser':
        console.log('New user connected:', data.user.name);
        (ws as any).user = data.user; // Speichern am Socket
        activeUsers.push(data.user);
        broadcastMessage({ type: 'activeUsers', users: activeUsers });
        break;

      case 'message':
        broadcastMessage({ type: 'message', user: data.user, message: data.message });
        break;

      case 'typing':
        console.log('typing', data.user.name);
        broadcastMessage({ type: 'typing', users: [data.user] });
        break;
    }
  });

  ws.on('close', () => {
    console.log('Websocket connection closed');
    const disconnectedUser = (ws as any).user;
    if (disconnectedUser) {
      activeUsers = activeUsers.filter((u) => u.id !== disconnectedUser.id);
      broadcastMessage({ type: 'activeUsers', users: activeUsers });
    }
  });
}
