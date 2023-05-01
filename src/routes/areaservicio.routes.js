import { Router } from "express";
import {
    getAreaBySerie,
    getAreaByPlaca,
    getAreaSinTecnico,
    updateActivoByTecnico,
} from "../controllers/areaservicio.controller";

const router = Router();

router.get("/areaservicio/:serie/:idCliente1/:idCliente2", getAreaBySerie);

router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", getAreaByPlaca);

router.get("/areaservicio/x", getAreaSinTecnico); //Obtengo el listado de cts que no se haya asignado tecnico

router.put("/areaservicio/x/:id", updateActivoByTecnico); //Actualizo ct pot tecnico

export default router;
