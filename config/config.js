var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expresswww'
    },
    port: 3000,
    db: 'mongodb://localhost/expresswww-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expresswww'
    },
    port: 3000,
    db: 'mongodb://localhost/expresswww-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expresswww'
    },
    port: 3000,
    db: 'mongodb://localhost/expresswww-production',
    clean: true
  }
};

module.exports = config[env];
