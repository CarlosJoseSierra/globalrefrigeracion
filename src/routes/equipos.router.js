import { Router } from "express";
import {
  getEquipos,
  getEquipoById,
  createNewModelo,
  updateModeloById,
  getAllModeloEquipos,
} from "../controllers/equipos.controller";

const router = Router();

router.get("/equipos", getEquipos);
router.get("/equipos/x", getAllModeloEquipos);
router.get("/equipos/:id", getEquipoById);

router.post("/equipos/new", createNewModelo);
router.put("/equipos/y/:id", updateModeloById);

export default router;
