import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
const router = Router();

router.post("/", authCtrl.login);
router.get("/:user/:pass", authCtrl.loginmovil);

export default router;
