"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _roles = require("../controllers/roles.controller");
var router = (0, _express.Router)();
router.get("/roles", _roles.getRoles);
var _default = router;
exports["default"] = _default;