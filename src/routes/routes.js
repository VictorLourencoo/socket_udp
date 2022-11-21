const express = require("express");

const routes = express.Router();

const disciplinaController = require("../controller/discuplinas.controller");

routes.post("/criar", disciplinaController.create);
routes.get("/disciplinas", disciplinaController.all);
routes.get("/disciplinas/:id", disciplinaController.retrive);
routes.put("/disciplinas/atualizar/:id", disciplinaController.update);
routes.delete("/disciplinas/delete/:id", disciplinaController.delete);

module.exports = routes;
