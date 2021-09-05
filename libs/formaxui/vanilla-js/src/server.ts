import { Server } from '../libs/index.ts';

const server = new Server();

server.server.static('/', '../');

server.server.get('/', async (c) => {
  await c.render('../public/index.html');
});

server.start();
