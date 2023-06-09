import { Router } from "express";
import {
    getTipoServicioPers,
} from "../controllers/tiposerviciopers.controller";

const router = Router();

router.get("/tservicioPers", getTipoServicioPers);

export default router;
