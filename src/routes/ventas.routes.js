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
  editVentaPorRevisionBodega,
  editVentaPorAprobacion,
  editVentaPorNoAprobacion,
  getRevisionesActivas,
  editVentaEquipoRevisado,
  getCountRevisionEquipo,
  getInventarioIndividual,
  getInventarioAgrupado,
  
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
router.put("/ventas/l/:id", editVentaPorRevisionBodega);
router.put("/ventas/m/:id", editVentaPorAprobacion);
router.put("/ventas/n/:id", editVentaPorNoAprobacion);
router.put("/ventas/o/:id", editVentaEquipoRevisado);
router.get("/ventas/rev", getRevisionesActivas);
router.get("/ventas/count", getCountRevisionEquipo);
//Control de Inventario
router.get("/ventas/inv", getInventarioIndividual);
router.get("/ventas/abc", getInventarioAgrupado);
router.put("/ventas/abc/:id", updateEquipoInventory);

export default router;
