"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _activosRouter = _interopRequireDefault(require("./routes/activos.router.js"));
var _clientesRouter = _interopRequireDefault(require("./routes/clientes.router.js"));
var _equiposRouter = _interopRequireDefault(require("./routes/equipos.router.js"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
var _usuariosRouter = _interopRequireDefault(require("./routes/usuarios.router.js"));
var _historialRouter = _interopRequireDefault(require("./routes/historial.router.js"));
var _modelosRouter = _interopRequireDefault(require("./routes/modelos.router.js"));
var _logosRouter = _interopRequireDefault(require("./routes/logos.router.js"));
var _solicitudExternaRouter = _interopRequireDefault(require("./routes/solicitudExterna.router.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//import cors from "cors";

//import morgan from "morgan";
//import config from "./config.js";

var app = (0, _express["default"])();

// Middlewares
//app.use(cors());
//app.use(morgan("dev"));
//app.use(express.urlencoded({ extended: false }));
app.use(_express["default"].json());

// Routes

app.use("/api", _productsRoutes["default"]);
app.use("/api", _activosRouter["default"]);
app.use("/api", _clientesRouter["default"]);
app.use("/api", _equiposRouter["default"]);
app.use("/api", _usuariosRouter["default"]);
app.use("/api", _historialRouter["default"]);
app.use("/api", _modelosRouter["default"]);
app.use("/api", _logosRouter["default"]);
app.use("/api", _solicitudExternaRouter["default"]);
app.use(function (req, res, next) {
  res.status(404).json({
    message: 'endpoint not found'
  });
});
var _default = app;
exports["default"] = _default;