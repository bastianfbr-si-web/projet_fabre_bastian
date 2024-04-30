import express from "express";
const router = express.Router();
import smartphonesController from "./controller";

router.get("/", smartphonesController.getAll);

export default router;