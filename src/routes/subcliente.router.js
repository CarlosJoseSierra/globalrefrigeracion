import { Router } from "express";
import {
    getSubClientes,
    getSubClientesById,
    createNewSubCliente,
    updateSubClienteById,
} from "../controllers/subcliente.controller";

const router = Router();

router.get("/subcliente", getSubClientes);
router.get("/subcliente/:id", getSubClientesById);
router.post("/subclienteC", createNewSubCliente);
router.put("/subclienteI/:id", updateSubClienteById);


export default router;
