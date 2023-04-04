"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _localizacion = require("../controllers/localizacion.controller");
var router = (0, _express.Router)();
router.get("/localizacion/x/", _localizacion.getCiudad);
router.get("/localizacion/y/", _localizacion.getProvincia);
var _default = router;
exports["default"] = _default;