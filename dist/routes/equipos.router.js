"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _equipos = require("../controllers/equipos.controller");
var router = (0, _express.Router)();
router.get("/equipos", _equipos.getEquipos);
router.get("/equipos/x", _equipos.getAllModeloEquipos);
router.get("/equipos/z", _equipos.getAllModeloEquiposVinil);
router.get("/equipos/:id", _equipos.getEquipoById);
router.post("/equipos/new", _equipos.createNewModelo);
router.put("/equipos/y/:id", _equipos.updateModeloById);
var _default = router;
exports["default"] = _default;