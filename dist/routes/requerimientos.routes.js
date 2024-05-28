"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _requerimientos = require("../controllers/requerimientos.controller");
var router = (0, _express.Router)();
router.get("/requerimientos", _requerimientos.getAllRequerimientos);
router.get("/requerimientos/act", _requerimientos.getRequerimientosActivos);
router.post("/requerimientos/new", _requerimientos.createRequerimientos);
router.put("/requerimientos/:id", _requerimientos.editRequerimientos);
var _default = router;
exports["default"] = _default;