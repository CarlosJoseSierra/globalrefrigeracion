import { Router } from "express";
import {
  getClientes,
  getClienteById,
  createNewCliente,
  updateClienteById,
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", getClientes);
router.get("/clientes/:id", getClienteById);
router.post("/clientes/new", createNewCliente);
router.put("/clientes/x/:id", updateClienteById);

export default router;
