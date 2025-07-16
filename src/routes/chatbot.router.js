import { Router } from "express";
import {
    getChatBot,
} from "../controllers/chatbot.controller";

const router = Router();

router.get("/chatbot/:texto", getChatBot);

export default router;
