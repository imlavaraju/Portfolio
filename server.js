const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Use the default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Add a custom route for `/ws`
server.get("/ws", (req, res) => {
  res.status(200).json({ message: "Custom WS endpoint response" });
});

// Use rewriter to support /api/* routes
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

// Use default router
server.use(router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
