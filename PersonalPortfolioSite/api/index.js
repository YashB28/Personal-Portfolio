// Vercel serverless function entry point
const path = require('path');

// Import the built server
const serverPath = path.join(__dirname, '..', 'dist', 'index.js');
const server = require(serverPath);

module.exports = server;