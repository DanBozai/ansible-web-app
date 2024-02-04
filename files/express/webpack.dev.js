const path = require('path');

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'dev_build'),
    filename: 'dev_main.js',
    clean: true

  },
};
