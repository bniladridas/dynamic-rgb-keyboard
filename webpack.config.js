const path = require('path');

module.exports = {
  // ...existing code...
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // ...existing code...
};
