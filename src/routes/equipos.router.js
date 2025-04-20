import { Router } from "express";
import {
  getEquipos,
  getEquipoById,
  createNewModelo,
  updateModeloById,
  getAllModeloEquipos,
  getAllModeloEquiposVinil,
  getAllModeloEquiposNoVinil,
} from "../controllers/equipos.controller";

const router = Router();

router.get("/equipos", getEquipos);
router.get("/equipos/x", getAllModeloEquipos);
router.get("/equipos/z", getAllModeloEquiposVinil);
router.get("/equipos/a", getAllModeloEquiposNoVinil);
router.get("/equipos/:id", getEquipoById);

router.post("/equipos/new", createNewModelo);
router.put("/equipos/y/:id", updateModeloById);

export default router;
