"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _bodega = require("../controllers/bodega.controller");
var router = (0, _express.Router)();
router.get("/bodega", _bodega.getBodegas);
router.post("/bodega/a", _bodega.createNewBodega);
router.get("/bodega/x/:id", _bodega.getBodegasById);
router.put("/bodega/z/:id", _bodega.updateBodegaById);
router.post("/bodega/newI", _bodega.createNewInventory);
router.get("/bodega/act", _bodega.getInventarioActivo);
var _default = router;
exports["default"] = _default;