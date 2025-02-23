import { Router } from "express";
import {
  getHistPorSerie,
  getHistPorCodTag,
  getTotalEquiposMapa,
  getTopFiveTecnicos,

} from "../controllers/historial.controller";

const router = Router();

router.get("/historial", getHistPorSerie);
router.get("/historial/x", getHistPorCodTag);
router.get("/historialxy", getTotalEquiposMapa);
router.get("/historialT", getTopFiveTecnicos);


export default router;