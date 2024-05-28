import { Router } from "express";
import {
  getRequerimientosActivos,
  getAllRequerimientos,
  createRequerimientos,
  editRequerimientos,
} from "../controllers/requerimientos.controller";

const router = Router();

router.get("/requerimientos", getAllRequerimientos);
router.get("/requerimientos/act", getRequerimientosActivos);
router.post("/requerimientos/new", createRequerimientos);
router.put("/requerimientos/:id",editRequerimientos);

export default router;
