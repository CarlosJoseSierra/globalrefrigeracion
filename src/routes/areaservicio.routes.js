import { Router } from "express";
import {
    getAreaBySerie,
    getAreaByPlaca,
    getAreaSinTecnico,
    updateActivoByTecnico,
    getAreaByTecnico,
    createNewAreaServicio,
    getAreaServicioMovimiento,
    getAreaServicioMantenimiento,
} from "../controllers/areaservicio.controller";

const router = Router();

router.get("/areaservicio/:serie/:idCliente1/:idCliente2", getAreaBySerie);

router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", getAreaByPlaca);

router.post("/areaservicio", createNewAreaServicio);

router.get("/areaservicio/x", getAreaSinTecnico); //Obtengo el listado de cts que no se haya asignado tecnico

router.put("/areaservicio/x/:id", updateActivoByTecnico); //Actualizo ct pot tecnico

router.get("/areaservicio/y/:id", getAreaByTecnico); //Obtengo las tareas pendientes de los tecnicos

router.get("/areaservicio/mov", getAreaServicioMovimiento); //Obtengo las cts con area de servicio movimiento

router.get("/areaservicio/mant", getAreaServicioMantenimiento); //Obtengo las cts con area de servicio mantenimiento


export default router;
