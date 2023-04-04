"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _lozalizacion = require("../controllers/lozalizacion.controller");
var router = (0, _express.Router)();
router.get("/localizacion/x/", _lozalizacion.getCiudad);
router.get("/localizacion/y/", _lozalizacion.getProvincia);
var _default = router;
exports["default"] = _default;