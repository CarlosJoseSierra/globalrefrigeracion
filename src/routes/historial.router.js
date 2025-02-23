import { Router } from "express";
import {
  getTotalEquiposMapa,
  getTopFiveTecnicos,

} from "../controllers/historial.controller";

const router = Router();

router.get("/historialxy", getTotalEquiposMapa);
router.get("/historialT", getTopFiveTecnicos);


export default router;