"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _resumen = require("../controllers/resumen.controller");
var router = (0, _express.Router)();
router.get("/resumen", _resumen.getResumenTaller);
var _default = router;
exports["default"] = _default;