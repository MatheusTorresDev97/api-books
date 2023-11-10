import express from "express";
import AutoresController from "../controllers/autoresController.js";
import paginar from "../middleware/paginar.js";

const routes = express.Router();

routes.get("/autores", AutoresController.listarAutores, paginar);
routes.get("/autores/:id", AutoresController.listarAutorPorId);
routes.post("/autores", AutoresController.cadastrarAutor);
routes.put("/autores/:id", AutoresController.atualizarAutor);
routes.delete("/autores/:id", AutoresController.excluirAutor);

export default routes;
