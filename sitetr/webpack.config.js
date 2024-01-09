const path = require('path');

module.exports = {
  // ... outras configurações do webpack ...

  resolve: {
    fallback: {
      os: require.resolve('os-browserify/browser'),
    },
  },

  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },

  // ... outras configurações do webpack ...
};