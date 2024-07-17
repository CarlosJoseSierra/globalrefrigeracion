"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cargos = require("../controllers/cargos.controller");
var router = (0, _express.Router)();
router.get("/cargos", _cargos.getCargos);
var _default = router;
exports["default"] = _default;