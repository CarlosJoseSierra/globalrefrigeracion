"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _solobrandeoController = require("../controllers/solobrandeo,controller");
var router = (0, _express.Router)();
router.get("/solobrandeo", _solobrandeoController.getBrandeos);
router.get("/solobrandeo/:id", _solobrandeoController.getBrandeoById);
router.get("/solobrandeo/y/:id", _solobrandeoController.getDetalleEquipoByIdVenta);
var _default = router;
exports["default"] = _default;