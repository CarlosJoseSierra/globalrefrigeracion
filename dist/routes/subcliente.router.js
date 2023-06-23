"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _subcliente = require("../controllers/subcliente.controller");
var router = (0, _express.Router)();
router.get("/subcliente", _subcliente.getSubClientes);
router.get("/subcliente/:id", _subcliente.getSubClientesById);
router.post("/subclienteC", _subcliente.createNewSubCliente);
router.put("/subclienteI/:id", _subcliente.updateSubClienteById);
var _default = router;
exports["default"] = _default;