"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ventas = require("../controllers/ventas.controller");
var storage = require('../libs/multer');
var router = (0, _express.Router)();
router.get("/ventas", _ventas.getAllVentas);
router.get("/ventas/act", _ventas.getVentasActivos);
router.post("/ventas/new", _ventas.createventas);
router.put("/ventas/:id", _ventas.editVentas);
router.put("/ventas/x/:id", _ventas.editVentaPorSerie);
router.put("/ventas/y/:id", _ventas.editVentaPorNumEnsamble);
router.put("/ventas/z/:id", _ventas.editVentaPorTerminacionBrandeo);
router.put("/ventas/w/:id", _ventas.editVentaPorPegadoBrandeo);
router.get("/ventas/x/:id", _ventas.getVentaById);
var _default = router;
exports["default"] = _default;