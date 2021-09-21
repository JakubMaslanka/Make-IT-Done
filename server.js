/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('./API/db.json');

server.db = router.db;

const rules = auth.rewriter({
  users: 400,
  tasks: 600,
  projects: 600,
});

const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 5000;

server.use(rules);
server.use(auth);
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
