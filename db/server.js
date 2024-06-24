// Import necessary modules
const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('./db.json'); // Import your data from db.json
const router = jsonServer.router(data); // Use data directly

// Middlewares
const middlewares = jsonServer.defaults();
server.use(middlewares);

// Custom routes using json-server rewriter
server.use(jsonServer.rewriter({
  '/api/*': '/$1', // Rewrites /api/:resource to /:resource
}));

// Use the router
server.use(router);

// Define the port and start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// Export the server instance
module.exports = server;
