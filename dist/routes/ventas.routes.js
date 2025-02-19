"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ventas = require("../controllers/ventas.controller");
var storage = require('../libs/multer');
var router = (0, _express.Router)();
router.get("/ventas", _ventas.getAllVentas);
router.get("/ventas/act", _ventas.getVentasActivos);
router.get("/ventas/br", _ventas.getVentasActivosPorBrandeo);
router.get("/ventas/pe", _ventas.getBrandeosPorPegar);
router.get("/ventas/xx/:id", _ventas.getDetalleVentasEquipos);
router.get("/ventas/yy/:id", _ventas.getDetalleVentasBrandeos);
router.post("/ventas/new", _ventas.createventas);
router.put("/ventas/:id", _ventas.editVentas);
router.put("/ventas/x/:id", _ventas.editVentaPorDiseno);
router.put("/ventas/y/:id", _ventas.editVentaPorNumEnsamble);
router.get("/ventas/z/:id", _ventas.getVentaById);
router.put("/ventas/a/:id", _ventas.editVentaPorCierreCaso);
router.put("/ventas/b/:id", _ventas.editVentaPorConfirmadoBrandeo);
router.put("/ventas/c/:id", _ventas.editVentaPorImpresionBrandeo);
router.put("/ventas/d/:id", _ventas.editVentaPorLaminadoBrandeo);
router.put("/ventas/e/:id", _ventas.editVentaPorCorteBrandeo);
router.put("/ventas/f/:id", _ventas.editVentaPorEntregadoBrandeo);
router.put("/ventas/g/:id", _ventas.editVentaPorPegadoBrandeo);
router.put("/ventas/h/:id", _ventas.editVentaPorCerrarBrandeo);
router.get("/ventas/all", _ventas.getAllBrandeosVenta);
router.get("/ventas/j/:id", _ventas.getImagenEquipoByVenta);
router.put("/ventas/k/:id", storage.array('image', 10), _ventas.createImageEquipoPegado);
router.put("/ventas/l/:id", _ventas.editVentaPorRevisionBodega);
router.put("/ventas/m/:id", _ventas.editVentaPorAprobacion);
router.put("/ventas/n/:id", _ventas.editVentaPorNoAprobacion);
router.put("/ventas/o/:id", _ventas.editVentaEquipoRevisado);
router.get("/ventas/rev", _ventas.getRevisionesActivas);
router.get("/ventas/count", _ventas.getCountRevisionEquipo);
//Control de Inventario
router.get("/ventas/inv", _ventas.getInventarioTotal);
router.get("/ventas/inv/:id", _ventas.getInventarioByIdEquipo);
router.put("/ventas/abc/:id", _ventas.updateEquipoInventory);
var _default = router;
exports["default"] = _default;