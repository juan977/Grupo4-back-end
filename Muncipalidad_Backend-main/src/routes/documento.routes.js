import { Router } from "express";
import * as tipodocumento from "../controllers/documento.contoller";
const router = Router();
router.get("/", tipodocumento.getDocumento);

export default router;
