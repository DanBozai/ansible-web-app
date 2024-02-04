const path = require('path');

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'prod_build'),
    filename: 'prod_main.js',
    clean: true
  },
};
