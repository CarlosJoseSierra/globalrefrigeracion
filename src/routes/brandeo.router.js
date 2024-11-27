import { Router } from "express";
import {
    getBrandeos,
    getBrandeoById,
    getBrandeoByIdCliente,
    getDetalleEquipoByIdVenta,
} from "../controllers/brandeo,controller";

const router = Router();

router.get("/brandeo", getBrandeos);
router.get("/brandeo/:id", getBrandeoById);
router.get("/brandeo/x/:id", getBrandeoByIdCliente);
router.get("/brandeo/y/:id", getDetalleEquipoByIdVenta);

export default router;
