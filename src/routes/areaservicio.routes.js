import { Router } from "express";
import {
    getAreaBySerie,
    getAreaByPlaca,
    getAreaSinTecnico,
} from "../controllers/areaservicio.controller";

const router = Router();

router.get("/areaservicio/:serie/:idCliente1/:idCliente2", getAreaBySerie);

router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", getAreaByPlaca);

router.get("/areaservicio/x", getAreaSinTecnico); //Obtengo el listado de cts que no se haya asignado tecnico

export default router;
