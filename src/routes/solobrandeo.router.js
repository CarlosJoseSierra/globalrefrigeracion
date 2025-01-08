import { Router } from "express";
import {
    getBrandeos,
    getVentaBrandeoById,
    getDetalleBrandeoByIdVenta,
} from "../controllers/solobrandeo.controller";

const router = Router();

router.get("/solobrandeo", getBrandeos);
router.get("/solobrandeo/:id", getVentaBrandeoById);
router.get("/solobrandeo/y/:id", getDetalleBrandeoByIdVenta);

export default router;
