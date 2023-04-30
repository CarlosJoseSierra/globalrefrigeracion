import { Router } from "express";
import {
  getPersonaReporta,
  getPersonaReportaByIdCliente,
} from "../controllers/personareporta.controller";

const router = Router();

router.get("/preporta", getPersonaReporta);
router.get("/preporta/:id", getPersonaReportaByIdCliente);


export default router;
