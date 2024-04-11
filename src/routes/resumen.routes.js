import { Router } from "express";
import {
    getResumenTaller,
} from "../controllers/resumen.controller";

const router = Router();

router.get("/resumen", getResumenTaller);

export default router;
