import { Router } from "express";
import * as tipovia from "../controllers/tipovia.controller";
const router = Router();
router.get("/", tipovia.getTiposVia);

export default router;
