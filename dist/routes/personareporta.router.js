"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _personareporta = require("../controllers/personareporta.controller");
var router = (0, _express.Router)();
router.get("/preporta", _personareporta.getPersonaReporta);
router.get("/preporta/:id", _personareporta.getPersonaReportaByIdCliente);
var _default = router;
exports["default"] = _default;