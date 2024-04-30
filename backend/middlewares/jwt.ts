import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretToken = process.env.TOKEN;

function validateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(" ")[1];
    let jwtPayload;

    if (!token) {
        return res.status(401).send("Accès refusé. Aucun token fourni.");
    }

    try {
        jwtPayload = jwt.verify(token, secretToken!,
        {
          complete: true,
          algorithms: ['HS256'],
          clockTolerance: 0,
          ignoreExpiration: false,
          ignoreNotBefore: false
        });
        next();
        req.body.jwtPayload = jwtPayload;
    } catch (error) {
        return res.status(401).send("Accès refusé. Token invalide.");
    }
}

export default validateJWT;
