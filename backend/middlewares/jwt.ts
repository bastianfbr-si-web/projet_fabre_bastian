import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const TOKEN = process.env.TOKEN;

function validateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).send("Accès refusé. Aucun token fourni.");
    }

    try {
        jwt.verify(token, TOKEN!);
        next();
    } catch (error) {
        return res.status(401).send("Accès refusé. Token invalide.");
    }
}

export default validateJWT;
