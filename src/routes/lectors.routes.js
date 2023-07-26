import { Router } from "express";
import { creandoLector } from "../controllers/lectors.controller.js";

const router = Router();

router.post("/lectors", creandoLector);

export default router;
