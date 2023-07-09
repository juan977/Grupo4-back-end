import { Router } from "express";
import * as trabajador from "../controllers/trabajador.controller";
const router = Router();
router.post("/", trabajador.registrarTrabajador);

export default router;
