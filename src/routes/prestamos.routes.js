import { Router } from "express";
import { creandoPrestamo } from "../controllers/prestamos.controller.js";

const router = Router();

// Realizar un préstamo a un lector, dado el identificador del libro y del lector.
router.post("/prestamos", creandoPrestamo);

export default router;
