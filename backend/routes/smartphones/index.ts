import express from "express";
const router = express.Router();
import smartphonesController from "./controller";
import marquesController from "./marques/controller";

router.get("/", smartphonesController.getAll);
router.get("/marques", marquesController.getAll);

export default router;