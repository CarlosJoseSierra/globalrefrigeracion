"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ventasdetalle = require("../controllers/ventasdetalle.controller");
var router = (0, _express.Router)();
router.get("/detallesventa/:id", _ventasdetalle.getVentasDetalle);
var _default = router;
exports["default"] = _default;