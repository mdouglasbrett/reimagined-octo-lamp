'use strict';

const HAPI = require('hapi');

let server = new HAPI.Server();
server.connection({ port: 3000 });

server.register(require('inert'), function(err) {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler:  {
      file: 'index.html'
    }
  });

  server.route({
    method: 'GET',
    path: '/products.json',
    handler: {
      file: 'products.json'
    }
  });

  server.route({
    method: 'GET',
    path: '/img/{param*}',
    handler: {
      directory: {
        path: './img/'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/styles/{param*}',
    handler: {
      directory: {
        path: './styles/'
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/js/{param*}',
    handler: {
      directory: {
        path: './js/'
      }
    }
  });
});

server.start(function() {
  console.log('Server running at: ', server.info.uri);
});
