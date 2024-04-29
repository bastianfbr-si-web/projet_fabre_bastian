import express from "express";
const router = express.Router();
import authController from "./controller";

router.post("/", authController.login);

export default router;
