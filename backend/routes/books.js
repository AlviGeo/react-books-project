const express = require("express");
const routes = express.Router();
const Books = require("../controllers/Books");

routes.post("/post", Books.create);
routes.get("/get", Books.getAllData);
routes.get("/get/:booksId", Books.getDatabyId);
routes.put("/put/:booksId", Books.updateDatabyId);
routes.delete("/delete/:booksId", Books.deleteDataById);

module.exports = routes;
