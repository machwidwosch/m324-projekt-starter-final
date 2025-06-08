import express, { Request, Response } from 'express';
import http, { Server } from 'http';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';
import { initializeWebsocketServer } from './websocketserver';
import { WebSocket } from 'ws';

const app = express();
const server = http.createServer(app);
const env = process.env.NODE_ENV || 'development';

app.get('/healthcheck', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

if (env !== 'production' && env !== 'test') {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
      liveReloadServer.refresh('/');
    }, 100);
  });

  app.use(connectLiveReload());
}

app.use(express.static('client'));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(__dirname + '/client/index.html');
});

initializeWebsocketServer(server);

// Startet den Server (z. B. in production oder lokal)
const startServer = (port: number): Server => {
  server.listen(port, () => {
    console.log(`Express Server started on port ${port} as '${env}' Environment`);
  });
  return server;
};

if (env !== 'test') {
  const port = parseInt(process.env.PORT || '3000');
  startServer(port);
}

// Test-Helper
const waitForSocketState = (socket: WebSocket, state: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (socket.readyState === state) {
        resolve();
      } else {
        waitForSocketState(socket, state).then(resolve);
      }
    }, 5);
  });
};

export { startServer, waitForSocketState };
