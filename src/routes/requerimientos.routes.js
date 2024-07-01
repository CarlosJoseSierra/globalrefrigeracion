import { Router } from "express";
const storage = require('../libs/multer');

import {
  getRequerimientosActivos,
  getAllRequerimientos,
  createRequerimientos,
  editRequerimientos,
  editRequerimientosVisitaTecnica,
  editRequerimientosAprobacion,
  getRequerimientosActivosXtecnico,
  getReparacionesActivosXtecnico,
  editRequerimientosReparacion,
  getRquerimientosPadre,
  editRequerimientosCierraCaso,
} from "../controllers/requerimientos.controller";


const router = Router();

router.get("/requerimientos", getAllRequerimientos);
router.get("/requerimientos/act", getRequerimientosActivos);
router.post("/requerimientos/new", createRequerimientos);
router.put("/requerimientos/:id", editRequerimientos);
router.put("/requerimientos/x/:id", editRequerimientosVisitaTecnica);
router.put("/requerimientos/y/:id", editRequerimientosAprobacion);
router.get("/requerimientos/act/:id", getRequerimientosActivosXtecnico);
router.get("/requerimientos/rep/:id", getReparacionesActivosXtecnico);
router.put("/requerimientos/z/:id",storage.array('image',5), editRequerimientosReparacion);
router.get("/requerimientos/hijos/:id", getRquerimientosPadre);
router.put("/requerimientos/xy/:id", editRequerimientosCierraCaso);
//router.post("/requerimientos/new2", storage.array('image',3),createRequerimientos2);
export default router;
