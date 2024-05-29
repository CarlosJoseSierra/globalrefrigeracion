import { Router } from "express";
import {
  getRequerimientosDetalle,

} from "../controllers/requerimientos_det.controller";

const router = Router();

router.get("/detallesreq/:id", getRequerimientosDetalle);

export default router;
