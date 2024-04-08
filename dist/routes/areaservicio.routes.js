"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _areaservicio = require("../controllers/areaservicio.controller");
var router = (0, _express.Router)();
router.get("/areaservicio/:serie/:idCliente1/:idCliente2", _areaservicio.getAreaBySerie);
router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", _areaservicio.getAreaByPlaca);
router.post("/areaservicio", _areaservicio.createNewAreaServicio);
router.get("/areaservicio/x", _areaservicio.getAreaSinTecnico); //Obtengo el listado de cts que no se haya asignado tecnico

router.put("/areaservicio/x/:id", _areaservicio.updateActivoByTecnico); //Actualizo ct pot tecnico

router.get("/areaservicio/y/:id", _areaservicio.getAreaByTecnico); //Obtengo las tareas pendientes de los tecnicos

router.get("/areaservicio/mov", _areaservicio.getAreaServicioMovimiento); //Obtengo las cts con area de servicio movimiento

router.get("/areaservicio/mant", _areaservicio.getAreaServicioMantenimiento); //Obtengo las cts con area de servicio mantenimiento

router.get("/areaservicio/z/:date1/:date2", _areaservicio.getReporteGeneral);
//router.get("/areaservicio/z/", getReporteGeneral);
var _default = router;
exports["default"] = _default;