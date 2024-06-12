import { Router } from "express";
import {
  getRequerimientosActivos,
  getAllRequerimientos,
  createRequerimientos,
  editRequerimientos,
  editRequerimientosVisitaTecnica,
  editRequerimientosAprobacion,
  getRequerimientosActivosXtecnico,
} from "../controllers/requerimientos.controller";

const router = Router();

router.get("/requerimientos", getAllRequerimientos);
router.get("/requerimientos/act", getRequerimientosActivos);
router.post("/requerimientos/new", createRequerimientos);
router.put("/requerimientos/:id",editRequerimientos);
router.put("/requerimientos/x/:id",editRequerimientosVisitaTecnica);
router.put("/requerimientos/y/:id",editRequerimientosAprobacion);
router.get("/requerimientos/act/:id", getRequerimientosActivosXtecnico);

export default router;
