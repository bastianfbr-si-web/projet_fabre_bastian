import express from "express";
const router = express.Router();
import smartphonesController from "./controller";
import validateJWT from "../../middlewares/jwt";

router.get("/", validateJWT, smartphonesController.getAll);

export default router;