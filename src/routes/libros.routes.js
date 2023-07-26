import { Router } from "express";
import {
  creandoLibro,
  obteniendoLibros,
  eliminandoLibro,
} from "../controllers/libros.controller.js";

const router = Router();

router.get("/libros", obteniendoLibros); // Listar todos los libros existentes.

router.post("/libros", creandoLibro); // Añadir un nuevo libro.

router.delete("/libros/:id", eliminandoLibro); // Eliminar un libro existente.

export default router;
