import express from "express";
const router = express.Router();
import authController from "./controller";

router.post("/login", authController.login);

export default router;
