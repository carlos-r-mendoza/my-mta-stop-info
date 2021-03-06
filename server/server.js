const Hapi = require('hapi');
const server = new Hapi.Server();

require('dotenv').config();

server.connection({
  host: 'localhost',
  port: 8000
});

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running at: ${server.info.uri}`);
});
