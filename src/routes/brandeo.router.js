import { Router } from "express";
import {
    getBrandeos,
    getBrandeoById,
} from "../controllers/brandeo,controller";

const router = Router();

router.get("/brandeo", getBrandeos);
router.get("/brandeo/:id", getBrandeoById);

export default router;
