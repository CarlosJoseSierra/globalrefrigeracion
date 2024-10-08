import { Router } from "express";
import {
  getVentasDetalle,

} from "../controllers/ventasdetalle.controller";

const router = Router();

router.get("/detallesventa/:id", getVentasDetalle);

export default router;
