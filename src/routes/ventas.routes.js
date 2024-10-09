import { Router } from "express";
const storage = require('../libs/multer');

import {
  getVentasActivos,
  getAllVentas,
  createventas,
  editVentas,
  editVentaPorSerie,
  editVentaPorNumEnsamble,
  editVentaPorTerminacionBrandeo,
  editVentaPorPegadoBrandeo,
  getVentaById,
  editVentaPorCierreCaso,
  
} from "../controllers/ventas.controller";


const router = Router();

router.get("/ventas", getAllVentas);
router.get("/ventas/act", getVentasActivos);
router.post("/ventas/new", createventas);
router.put("/ventas/:id", editVentas);
router.put("/ventas/x/:id", editVentaPorSerie);
router.put("/ventas/y/:id", editVentaPorNumEnsamble);
router.put("/ventas/z/:id", editVentaPorTerminacionBrandeo);
router.put("/ventas/w/:id", editVentaPorPegadoBrandeo);
router.put("/ventas/v/:id", editVentaPorCierreCaso);
router.get("/ventas/x/:id", getVentaById);

export default router;
