const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;
server.use(jsonServer.rewriter({
    '/api/*': '/$1'
}))

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

// Ruta para crear un nuevo producto
server.post("/produtos", (req, res) => {
  const novoProduto = req.body;
  router.db.get("produtos").push(novoProduto).write();
  res.send(novoProduto);
});

// Ruta para obtener todos los produtos
server.get("/produtos", (req, res) => {
  const produtos = router.db.get("produtos").value();
  res.send(produtos);
});

// Ruta para actualizar un producto por su ID
server.put("/produtos/:id", (req, res) => {
  const idProducto = req.params.id;
  const newData = req.body;
  router.db.get("produtos").find({ id: idProducto }).assign(newData).write();
  res.sendStatus(200);
});

// Ruta para eliminar un producto por su ID
server.delete("/produtos/:id", (req, res) => {
  const idProducto = req.params.id;
  router.db.get("produtos").remove({ id: idProducto }).write();
  res.sendStatus(200);
});

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});