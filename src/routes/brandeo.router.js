import { Router } from "express";
import {
    getBrandeos,
    getBrandeosVinil,
    getBrandeoById,
    getBrandeoByIdCliente,
    getDetalleEquipoByIdVenta,
    getBrandeosNoVinil,
} from "../controllers/brandeo,controller";

const router = Router();

router.get("/brandeo", getBrandeos);
router.get("/brandeo/z", getBrandeosVinil);
router.get("/brandeo/a", getBrandeosNoVinil);
router.get("/brandeo/:id", getBrandeoById);
router.get("/brandeo/x/:id", getBrandeoByIdCliente);
router.get("/brandeo/y/:id", getDetalleEquipoByIdVenta);

export default router;
