"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _corteinventario = require("../controllers/corteinventario.controller");
var router = (0, _express.Router)();
router.post("/inventario/new", _corteinventario.createNewInventory);
router.get("/inventario/:id", _corteinventario.getInventoryById);
router.get("/inventario", _corteinventario.getInventoryCorte);
var _default = router;
exports["default"] = _default;