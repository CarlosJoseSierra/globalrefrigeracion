import { Router } from "express";
import {
  getRequerimientosActivos,
  getAllRequerimientos,
} from "../controllers/requerimientos.controller";

const router = Router();

router.get("/requerimientos", getAllRequerimientos);
router.get("/requerimientos/act", getRequerimientosActivos);

export default router;
