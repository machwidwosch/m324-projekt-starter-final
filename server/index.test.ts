import request from 'supertest';
import { Server } from 'http';
import { startServer } from './index';

describe('Express Server', () => {
  let server: Server;

  beforeAll(() => {
    server = startServer(4000); // wähle Test-Port
  });

  afterAll((done) => {
    server.close(done);
  });

  test('GET / should return 200 OK', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
  });
});


