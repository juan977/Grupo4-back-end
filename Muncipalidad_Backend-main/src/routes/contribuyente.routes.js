import { Router } from "express";
import * as contribuyente from "../controllers/contribuyente.controller";
const router = Router();
router.get("/", contribuyente.getContribuyente);
router.put("/", contribuyente.deleteContribuyente);
router.get("/getContribuyente", contribuyente.buscarContribuyente);
router.post("/", contribuyente.createContribuyente);
router.post("/movil", contribuyente.createContribuyenteMovil);
export default router;
