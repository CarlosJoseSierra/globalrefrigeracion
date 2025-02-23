"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _historial = require("../controllers/historial.controller");
var router = (0, _express.Router)();
router.get("/historialxy", _historial.getTotalEquiposMapa);
router.get("/historialT", _historial.getTopFiveTecnicos);
var _default = router;
exports["default"] = _default;