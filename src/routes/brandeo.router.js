import { Router } from "express";
import {
    getBrandeos,
    getBrandeoById,
    getBrandeoByIdCliente,
} from "../controllers/brandeo,controller";

const router = Router();

router.get("/brandeo", getBrandeos);
router.get("/brandeo/:id", getBrandeoById);
router.get("/brandeo/x/:id", getBrandeoByIdCliente);

export default router;
