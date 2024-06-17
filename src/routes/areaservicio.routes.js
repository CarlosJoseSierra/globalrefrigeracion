import { Router } from "express";
import {
    getAreaBySerie,
    getAreaByPlaca,
    createNewAreaServicio,
    getAreaGeneral,
    updateActivoByTecnico,
    getAreaByTecnico,
    getAreaServicioMovimiento,
    getAreaServicioMantenimiento,
    getReporteGeneral,
    createNewAreaServicioByRequerimiento,
    getCotizaciones,
    getCTByTecnico,
} from "../controllers/areaservicio.controller";

const router = Router();

router.get("/areaservicio/:serie/:idCliente1/:idCliente2", getAreaBySerie);
router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", getAreaByPlaca);
router.post("/areaservicio", createNewAreaServicio);
router.get("/areaservicio", getAreaGeneral); //Obtengo el listado de cts que no se haya asignado tecnico
router.put("/areaservicio/x/:id", updateActivoByTecnico); //Actualizo ct pot tecnico
router.get("/areaservicio/y/:id", getAreaByTecnico); //Obtengo las tareas pendientes de los tecnicos
router.get("/areaservicio/mov", getAreaServicioMovimiento); //Obtengo las cts con area de servicio movimiento
router.get("/areaservicio/mant", getAreaServicioMantenimiento); //Obtengo las cts con area de servicio mantenimiento
router.get("/areaservicio/z", getReporteGeneral);
router.post("/areaservicio/new", createNewAreaServicioByRequerimiento);
router.get("/areaservicio/xy", getCotizaciones);
router.get("/areaservicio/xy/:id", getCTByTecnico); //Obtengo las tareas pendientes de los tecnicos

export default router;
