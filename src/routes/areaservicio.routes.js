import { Router } from "express";
import {
    getAreaBySerie,
    getAreaByPlaca,
} from "../controllers/areaservicio.controller";

const router = Router();

router.get("/areaservicio/:serie/:idCliente1/:idCliente2", getAreaBySerie);

router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", getAreaByPlaca);

export default router;
