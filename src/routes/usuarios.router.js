import { Router } from "express";
import {
  getUsuarios,
  getUsuarioByCargo,
  getByUserPass,
  createNewUser,
  updateUserById,
} from "../controllers/usuarios.controller";

const router = Router();

router.get("/usuarios", getUsuarios);
router.post("/usuarios/login", getByUserPass);
router.post("/usuarios/new", createNewUser);
router.put("/usuarios/x/:id", updateUserById);
router.get("/usuarios/tec", getUsuarioByCargo);

export default router;
