import { Router } from "express";
import {
    getBrandeos,
    getBrandeoById,
    getDetalleEquipoByIdVenta,
} from "../controllers/solobrandeo.controller";

const router = Router();

router.get("/solobrandeo", getBrandeos);
router.get("/solobrandeo/:id", getBrandeoById);
router.get("/solobrandeo/y/:id", getDetalleEquipoByIdVenta);

export default router;
