import { Router } from "express";
import {
  getVentasDetalle,

} from "../controllers/requerimientos_det.controller";

const router = Router();

router.get("/detallesventa/:id", getVentasDetalle);

export default router;
