const jsonServer = require('json-server');
const server = jsonServer.create({
  noCors: true,
});
const router = jsonServer.router('./mockApi/db.json');
const middlewares = jsonServer.defaults();

router.render = (req, res) => {
  switch (req.url) {
    case '/users':
      res.jsonp({
        ...res.locals.data,
        accessToken: 'FakeAccessToken',
      });
      break;
  }
};

server.use(middlewares);
server.use(router);
server.listen(3030, () => {
  console.log('JSON Server is running');
});
