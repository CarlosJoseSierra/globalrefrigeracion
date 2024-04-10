"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _prefactura = require("../controllers/prefactura.controller");
var router = (0, _express.Router)();
router.get("/factura", _prefactura.getFacturaPorCliente);
var _default = router;
exports["default"] = _default;