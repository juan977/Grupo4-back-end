import { Router } from "express";
import * as predio from "../controllers/predio.controller";
const router = Router();
router.post("/descripcion", predio.createDescripcionofPredio);
router.post("/obras", predio.createObraofPredio);
router.get("/obras/:id", predio.getObraPredio);
router.get("/descripcion/:id", predio.getDescripcionPredio);
export default router;
