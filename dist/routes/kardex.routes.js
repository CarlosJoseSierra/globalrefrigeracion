"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _kardex = require("../controllers/kardex.controller");
var router = (0, _express.Router)();
router.get("/kardex", _kardex.getClienteKardex);
var _default = router;
exports["default"] = _default;