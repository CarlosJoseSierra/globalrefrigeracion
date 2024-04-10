import { Router } from "express";
import {
  getFacturaPorCliente,
} from "../controllers/prefactura.controller";

const router = Router();

router.get("/factura", getFacturaPorCliente);

export default router;
