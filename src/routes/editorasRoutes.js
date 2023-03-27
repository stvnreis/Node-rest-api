import Express from "express";
import editorasController from "../controllers/editorasController.js";

const router = Express.Router();

export default router 
    .get("/editoras", editorasController.list)
    .get("/editoras/:id", editorasController.listById)
    .post("/editoras", editorasController.include)
    .put("/editoras/:id", editorasController.update)
    .delete("/editoras/:id", editorasController.delete)