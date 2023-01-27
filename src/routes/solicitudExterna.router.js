import { Router } from "express";
import {
  getSolicitud,
} from "../controllers/solicitudExterna.controller";

const router = Router();

router.post("/envio", getSolicitud);

export default router;
