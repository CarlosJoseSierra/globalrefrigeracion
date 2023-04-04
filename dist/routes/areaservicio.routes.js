"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _areaservicio = require("../controllers/areaservicio.controller");
var router = (0, _express.Router)();
router.get("/areaservicio/:serie/:idCliente1/:idCliente2", _areaservicio.getAreaBySerie);
router.get("/areaservicio/x/:placa/:idCliente1/:idCliente2", _areaservicio.getAreaByPlaca);
var _default = router;
exports["default"] = _default;