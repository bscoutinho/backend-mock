const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares); // TIP: Add custom middleware before JSON Server router
server.use(router);
server.listen(port, () => {
  console.log("SERVER-MOCK running on port 3000");
});
