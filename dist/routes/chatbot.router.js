"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _chatbot = require("../controllers/chatbot.controller");
var router = (0, _express.Router)();
router.get("/chatbot/:texto", _chatbot.getChatBot);
var _default = router;
exports["default"] = _default;