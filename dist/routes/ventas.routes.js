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
router.put("/ventas/x/:id", _ventas.editVentaPorDiseno);
router.put("/ventas/y/:id", _ventas.editVentaPorNumEnsamble);
router.get("/ventas/z/:id", _ventas.getVentaById);
router.put("/ventas/a/:id", _ventas.editVentaPorCierreCaso);
router.put("/ventas/b/:id", _ventas.editVentaPorConfirmadoBrandeo);
router.put("/ventas/c/:id", _ventas.editVentaPorImpresionBrandeo);
router.put("/ventas/d/:id", _ventas.editVentaPorLaminadoBrandeo);
router.put("/ventas/e/:id", _ventas.editVentaPorCorteBrandeo);
router.put("/ventas/f/:id", _ventas.editVentaPorEntregadoBrandeo);
router.put("/ventas/g/:id", _ventas.editVentaPorPegadoBrandeo);
router.put("/ventas/h/:id", _ventas.editVentaPorCerrarBrandeo);
var _default = router;
exports["default"] = _default;