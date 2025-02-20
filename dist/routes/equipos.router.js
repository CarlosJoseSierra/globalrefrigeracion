"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _equipos = require("../controllers/equipos.controller");
var router = (0, _express.Router)();
router.get("/equipos", _equipos.getEquipos);
router.get("/equipos/:id", _equipos.getEquipoById);
router.get("/equipos/marca", _equipos.getMarcas);
router.get("/equipos/x/:id", _equipos.getMarcasById);
router.post("/equipos/new", _equipos.createNewModelo);
router.post("/equipos/a", _equipos.createNewMarca);
router.put("/equipos/y/:id", _equipos.updateModeloById);
router.put("/equipos/z/:id", _equipos.updateMarcaById);
var _default = router;
exports["default"] = _default;