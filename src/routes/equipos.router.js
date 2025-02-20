import { Router } from "express";
import {
  getEquipos,
  getEquipoById,
  getMarcas,
  getMarcasById,
  createNewModelo,
  createNewMarca,
  updateModeloById,
  updateMarcaById,
} from "../controllers/equipos.controller";

const router = Router();

router.get("/equipos", getEquipos);
router.get("/equipos/:id", getEquipoById);
router.get("/equipos/marca", getMarcas);
router.get("/equipos/x/:id", getMarcasById);
router.post("/equipos/new", createNewModelo);
router.post("/equipos/a", createNewMarca);
router.put("/equipos/y/:id", updateModeloById);
router.put("/equipos/z/:id", updateMarcaById);

export default router;
