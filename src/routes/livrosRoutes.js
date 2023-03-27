import express from "express";
import LivrosController from '../controllers/livrosController.js';

const router = express.Router();

export default router
    .get("/livros", LivrosController.list)
    .get("/livros/busca", LivrosController.listBookByEditor)
    .get("/livros/:id", LivrosController.listById)
    .post("/livros", LivrosController.include)
    .put("/livros/:id", LivrosController.update)
    .delete("/livros/:id", LivrosController.delete)