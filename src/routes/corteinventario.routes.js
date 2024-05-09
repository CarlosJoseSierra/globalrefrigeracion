import { Router } from "express";
import {
  createNewInventory,
  getInventoryById,
  getInventoryCorte,
} from "../controllers/corteinventario.controller";

const router = Router();

router.post("/inventario/new", createNewInventory);

router.get("/inventario/:id", getInventoryById);

router.get("/inventario", getInventoryCorte);

export default router;
