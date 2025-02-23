import { Router } from "express";
import {
  getBodegas,
  getBodegasById,
  createNewBodega,
  updateBodegaById,
} from "../controllers/bodega.controller";

const router = Router();

router.get("/bodega", getBodegas);
router.post("/bodega/a", createNewBodega);
router.get("/bodega/x/:id", getBodegasById);
router.put("/bodega/z/:id", updateBodegaById);

export default router;
