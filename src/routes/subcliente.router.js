import { Router } from "express";
import {
    getSubClientes,
    getSubClientesById,
} from "../controllers/subcliente.controller";

const router = Router();

router.get("/subcliente", getSubClientes);
router.get("/subcliente/:id", getSubClientesById);


export default router;
