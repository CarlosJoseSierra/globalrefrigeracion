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
router.get("/areaservicio/x", _areaservicio.getAreaSinTecnico); //Obtengo el listado de cts que no se haya asignado tecnico

router.put("/areaservicio/x/:id", _areaservicio.updateActivoByTecnico); //Actualizo ct pot tecnico

router.get("/areaservicio/y/:id", _areaservicio.getAreaByTecnico); //Obtengo las tareas pendientes de los tecnicos
var _default = router;
exports["default"] = _default;