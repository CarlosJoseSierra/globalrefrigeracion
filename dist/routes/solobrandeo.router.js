"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _solobrandeo = require("../controllers/solobrandeo.controller");
var router = (0, _express.Router)();
router.get("/solobrandeo", _solobrandeo.getBrandeos);
router.get("/solobrandeo/:id", _solobrandeo.getBrandeoById);
router.get("/solobrandeo/y/:id", _solobrandeo.getDetalleEquipoByIdVenta);
var _default = router;
exports["default"] = _default;