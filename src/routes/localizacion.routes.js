import { Router } from "express";
import {
    getCiudad,
    getProvincia,
} from "../controllers/lozalizacion.controller";

const router = Router();

router.get("/localizacion/x/", getCiudad);
router.get("/localizacion/y/", getProvincia);

export default router;