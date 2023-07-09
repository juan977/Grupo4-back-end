import { Router } from "express";
import * as distrito from "../controllers/distrito.controller";
const router = Router();
router.get("/", distrito.getDistritos);

export default router;
