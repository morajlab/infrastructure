import { Server } from './server/server.ts';

const server = new Server();

server.server.get('/', async (c) => {
  await c.render('./index.html');
});

server.start();
