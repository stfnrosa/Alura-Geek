const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.post("/produtos", (req, res) => {
  const novoProduto = req.body;
  router.db.get("produtos").push(novoProduto).write();
  res.send(novoProduto);
});

server.get("/produtos", (req, res) => {
  const produtos = router.db.get("produtos").value();
  res.send(produtos);
});

server.put("/produtos/:id", (req, res) => {
  const idProducto = req.params.id;
  const newData = req.body;
  router.db.get("produtos").find({ id: idProducto }).assign(newData).write();
  res.sendStatus(200);
});

server.delete("/produtos/:id", (req, res) => {
  const idProducto = req.params.id;
  router.db.get("produtos").remove({ id: idProducto }).write();
  res.sendStatus(200);
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});