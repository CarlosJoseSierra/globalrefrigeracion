"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ubicacion = require("../controllers/ubicacion.controller");
var router = (0, _express.Router)();
router.get("/ubicacion", _ubicacion.getUbicacion);
router.post("/ubicacion/new", _ubicacion.createNewUbicacion);
router.put("/ubicacion/x/:id", _ubicacion.updateUbicacionById);
router.get("/ubicacion/:id", _ubicacion.getUbicacionById);
var _default = router;
exports["default"] = _default;