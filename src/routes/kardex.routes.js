import { Router } from "express";
import {
  getClienteKardex,
} from "../controllers/kardex.controller";

const router = Router();

router.get("/kardex", getClienteKardex);

export default router;
