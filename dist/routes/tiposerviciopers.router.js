"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tiposerviciopers = require("../controllers/tiposerviciopers.controller");
var router = (0, _express.Router)();
router.get("/tservicioPers", _tiposerviciopers.getTipoServicioPers);
var _default = router;
exports["default"] = _default;