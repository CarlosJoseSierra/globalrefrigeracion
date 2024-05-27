import { Router } from "express";
import {
  getRequerimientosActivos,
  getAllRequerimientos,
  createRequerimientos,
} from "../controllers/requerimientos.controller";

const router = Router();

router.get("/requerimientos", getAllRequerimientos);
router.get("/requerimientos/act", getRequerimientosActivos);
router.post("/requerimientos/new", createRequerimientos);

export default router;
