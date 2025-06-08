import request from 'supertest';
import { Server } from 'http';
import { startServer } from './index';

describe('Healthcheck Endpoint', () => {
    let server: Server;

    beforeAll(() => {
        server = startServer(4001); // Test-Port
    });

    afterAll((done) => {
        server.close(done);
    });

    test('GET /healthcheck should return 200 and status ok', async () => {
        const res = await request(server).get('/healthcheck');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: 'ok' });
    });
});
