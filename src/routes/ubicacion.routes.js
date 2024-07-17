import { Router } from "express";
import {
  getUbicacion,
  createNewUbicacion,
  updateUbicacionById,
  getUbicacionById,
} from "../controllers/ubicacion.controller";

const router = Router();

router.get("/ubicacion", getUbicacion);
router.post("/ubicacion/new", createNewUbicacion);
router.put("/ubicacion/x/:id", updateUbicacionById);
router.get("/ubicacion/:id", getUbicacionById);

export default router;
