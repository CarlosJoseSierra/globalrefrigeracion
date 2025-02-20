"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _marca = require("../controllers/marca.controller");
var router = (0, _express.Router)();
router.get("/marca", _marca.getMarcas);
router.post("/marca/a", _marca.createNewMarca);
router.get("/marca/x/:id", _marca.getMarcasById);
router.put("/marca/z/:id", _marca.updateMarcaById);
var _default = router;
exports["default"] = _default;