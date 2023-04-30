import { Router } from "express";
import {
    getTipoServicio,
} from "../controllers/tiposervicio.controller";

const router = Router();

router.get("/tservicio", getTipoServicio);

export default router;
