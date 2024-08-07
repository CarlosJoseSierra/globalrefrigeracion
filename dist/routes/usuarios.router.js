"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _usuarios = require("../controllers/usuarios.controller");
var storage = require('../libs/multer');
var router = (0, _express.Router)();
router.get("/usuarios", _usuarios.getUsuarios);
router.post("/usuarios/login", _usuarios.getByUserPass);
router.post("/usuarios/new", storage.single('image'), _usuarios.createNewUser);
router.put("/usuarios/x/:id", storage.single('image'), _usuarios.updateUserById);
router.get("/usuarios/tec", _usuarios.getUsuarioByCargo);
var _default = router;
exports["default"] = _default;