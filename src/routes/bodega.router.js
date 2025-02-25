import { Router } from "express";
import {
  getBodegas,
  getBodegasById,
  createNewBodega,
  updateBodegaById,
  createNewInventory,
  getInventarioActivo,
} from "../controllers/bodega.controller";

const router = Router();

router.get("/bodega", getBodegas);
router.post("/bodega/a", createNewBodega);
router.get("/bodega/x/:id", getBodegasById);
router.put("/bodega/z/:id", updateBodegaById);
router.post("/bodega/newI", createNewInventory);
router.get("/bodega/act", getInventarioActivo);

export default router;
