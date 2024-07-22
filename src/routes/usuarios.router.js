import { Router } from "express";
const storage = require('../libs/multer');
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
router.post("/usuarios/new", storage.single('image'),createNewUser);
router.put("/usuarios/x/:id",storage.single('image'),updateUserById);
router.get("/usuarios/tec", getUsuarioByCargo);

export default router;
