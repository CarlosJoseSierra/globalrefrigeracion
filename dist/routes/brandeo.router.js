"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _brandeoController = require("../controllers/brandeo,controller");
var router = (0, _express.Router)();
router.get("/brandeo", _brandeoController.getBrandeos);
router.get("/brandeo/:id", _brandeoController.getBrandeoById);
router.get("/brandeo/x/:id", _brandeoController.getBrandeoByIdCliente);
router.get("/brandeo/y/:id", _brandeoController.getDetalleEquipoByIdVenta);
var _default = router;
exports["default"] = _default;