"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _requerimientos = require("../controllers/requerimientos.controller");
var storage = require('../libs/multer');
var router = (0, _express.Router)();
router.get("/requerimientos", _requerimientos.getAllRequerimientos);
router.get("/requerimientos/act", _requerimientos.getRequerimientosActivos);
router.post("/requerimientos/new", storage.array('image', 7), _requerimientos.createRequerimientos);
router.put("/requerimientos/:id", _requerimientos.editRequerimientos);
router.put("/requerimientos/x/:id", _requerimientos.editRequerimientosVisitaTecnica);
router.put("/requerimientos/y/:id", _requerimientos.editRequerimientosAprobacion);
router.get("/requerimientos/act/:id", _requerimientos.getRequerimientosActivosXtecnico);
router.get("/requerimientos/rep/:id", _requerimientos.getReparacionesActivosXtecnico);
router.put("/requerimientos/z/:id", storage.array('image', 7), _requerimientos.editRequerimientosReparacion);
//router.put("/requerimientos/z/:id",storage.single('image'), editRequerimientosReparacion);
router.get("/requerimientos/hijos/:id", _requerimientos.getRquerimientosPadre);
router.put("/requerimientos/xy/:id", _requerimientos.editRequerimientosCierraCaso);
router.post("/requerimientos/new2", storage.array('image', 3), _requerimientos.createRequerimientos2);
router.get("/requerimientos/mapa", _requerimientos.getRequerimientosMapa);
router.put("/requerimientos/xz/:id", _requerimientos.editRequerimientosHabilitar);
router.get("/requerimientos/not", _requerimientos.getRequerimientosNotificados);
router.get("/requerimientos/count", _requerimientos.RequerimientosNotificados);
router.put("/requerimientos/ab/:id", _requerimientos.editRequerimientosCierraNot);
router.put("/requerimientos/ac/:id", _requerimientos.editFacturaRequerimiento);
router.get("/requerimientos/mov/:id", _requerimientos.getMovimientoRequerimiento);
router.put("/requerimientos/req/:id", _requerimientos.editCostoRequerimiento);
var _default = router;
exports["default"] = _default;