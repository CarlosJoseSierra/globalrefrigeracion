import { Router } from "express";
import {
  addNewInventory,
  getInventoryById,
  getInventoryCorte,
} from "../controllers/corteinventario.controller";

const router = Router();

router.post("/inventario/new", addNewInventory);

router.get("/inventario/:id", getInventoryById);

router.get("/inventario", getInventoryCorte);

export default router;
