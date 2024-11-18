import { Router } from "express";
import {
  getActivos,
  createNewActivo,
  getActivoById,
  deleteActivoById,
  getTotalActivos,
  updateActivoById,
  getActivoByCodTag,
  getActivosXCliente,
  getActivoByModeloId,
} from "../controllers/activos.controller";

const router = Router();

router.get("/activos", getActivos);

router.get("/activos/x/:idCliente/:idCliente2", getActivosXCliente);

router.get("/activos/x/:id", getActivoByModeloId);

router.post("/activosI", createNewActivo);

router.get("/activos/count", getTotalActivos);

router.get("/activos1/:EQC_codTag", getActivoByCodTag);

router.delete("/activos/:id", deleteActivoById);

router.put("/activos/:id", updateActivoById);

export default router;
