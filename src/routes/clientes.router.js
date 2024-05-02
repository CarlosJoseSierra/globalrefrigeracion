import { Router } from "express";
import {
  getClientes,
  getClienteById,
  getClienteKardex,
} from "../controllers/clientes.controller";

const router = Router();

router.get("/clientes", getClientes);

router.get("/clientes/:id", getClienteById);

router.get("/clientes/x", getClienteKardex);


export default router;
