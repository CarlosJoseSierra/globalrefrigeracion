import { Router } from "express";
import {
  getMarcas,
  getMarcasById,
  createNewMarca,
  updateMarcaById,
} from "../controllers/marca.controller";

const router = Router();

router.get("/marca", getMarcas);
router.post("/marca/a", createNewMarca);
router.get("/marca/x/:id", getMarcasById);
router.put("/marca/z/:id", updateMarcaById);

export default router;
