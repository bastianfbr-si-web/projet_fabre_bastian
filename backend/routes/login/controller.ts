import jwt, { Secret } from "jsonwebtoken";
import userService from "./services";
import { Request, Response } from "express";

function generateToken(payload: object) {
    const secretToken: Secret = process.env.TOKEN ?? "secret";
    return jwt.sign(payload, secretToken, { expiresIn: "14d" });
}

function login(req: Request, res: Response) {
    const { email, password } = req.body.user || {};

    if (!email || !password) {
        return res.status(400).json({ error: "Email et mot de passe sont requis" });
    }

    const user = userService.getUserByEmail(email);

    if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé" });
    }
    if (!userService.login(email, password)) {
        return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = generateToken({ id: user.id, email: user.email });

    res.setHeader("Authorization", `Bearer ${token}`);

    res.send({ user: user});
}

export default { generateToken, login };