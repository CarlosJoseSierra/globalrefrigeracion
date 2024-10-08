"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _requerimientos_det = require("../controllers/requerimientos_det.controller");
var router = (0, _express.Router)();
router.get("/detallesventa/:id", _requerimientos_det.getVentasDetalle);
var _default = router;
exports["default"] = _default;