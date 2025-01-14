import { Router } from "express";
const storage = require('../libs/multer');

import {
  getVentasActivos,
  getAllVentas,
  createventas,
  editVentas,
  editVentaPorDiseno,
  editVentaPorNumEnsamble,
  getVentaById,
  editVentaPorCierreCaso,
  editVentaPorConfirmadoBrandeo,
  editVentaPorImpresionBrandeo,
  editVentaPorLaminadoBrandeo,
  editVentaPorCorteBrandeo,
  editVentaPorEntregadoBrandeo,
  editVentaPorPegadoBrandeo,
  editVentaPorCerrarBrandeo,
  getDetalleVentasEquipos,
  getInventarioTotal,
  getInventarioByIdEquipo,
  getVentasActivosPorBrandeo,
  getBrandeosPorPegar,
  getAllBrandeosVenta,
  getImagenEquipoByVenta,
  createImageEquipoPegado,
  getDetalleVentasBrandeos,
  updateEquipoInventory,
} from "../controllers/ventas.controller";


const router = Router();

router.get("/ventas", getAllVentas);
router.get("/ventas/act", getVentasActivos);
router.get("/ventas/br", getVentasActivosPorBrandeo);
router.get("/ventas/pe", getBrandeosPorPegar);
router.get("/ventas/xx/:id", getDetalleVentasEquipos);
router.get("/ventas/yy/:id", getDetalleVentasBrandeos);
router.post("/ventas/new", createventas);
router.put("/ventas/:id", editVentas);
router.put("/ventas/x/:id", editVentaPorDiseno);
router.put("/ventas/y/:id", editVentaPorNumEnsamble);
router.get("/ventas/z/:id", getVentaById);
router.put("/ventas/a/:id", editVentaPorCierreCaso);
router.put("/ventas/b/:id", editVentaPorConfirmadoBrandeo);
router.put("/ventas/c/:id", editVentaPorImpresionBrandeo);
router.put("/ventas/d/:id", editVentaPorLaminadoBrandeo);
router.put("/ventas/e/:id", editVentaPorCorteBrandeo);
router.put("/ventas/f/:id", editVentaPorEntregadoBrandeo);
router.put("/ventas/g/:id", editVentaPorPegadoBrandeo);
router.put("/ventas/h/:id", editVentaPorCerrarBrandeo);
router.get("/ventas/all", getAllBrandeosVenta);
router.get("/ventas/j/:id", getImagenEquipoByVenta);
router.put("/ventas/k/:id",storage.array('image',10),createImageEquipoPegado);
//Control de Inventario
router.get("/ventas/inv", getInventarioTotal);
router.get("/ventas/inv/:id", getInventarioByIdEquipo);
router.put("/ventas/abc/:id", updateEquipoInventory);

export default router;
