import { Router } from "express";
import {
  getInventory,
  createNewInventory,
  getInventoryById,
  getInventoryCorte,
} from "../controllers/corteinventario.controller";

const router = Router();

router.get("/inventario", getInventory);

router.post("/inventario/new", createNewInventory);

router.get("/inventario/:id", getInventoryById);

router.get("/inventario/corte", getInventoryCorte);

export default router;
