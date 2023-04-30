import { Router } from "express";
import {
  getPersonaReporta,
  getPersonaReportaById,
} from "../controllers/personareporta.controller";

const router = Router();

router.get("/preporta", getPersonaReporta);

router.get("/preporta/:id", getPersonaReportaById);
router.get("/preporta/:idCliente", getPersonaReportaByIdCliente);


export default router;
