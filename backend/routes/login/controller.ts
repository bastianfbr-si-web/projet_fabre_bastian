import jwt, { Secret } from "jsonwebtoken";
import userService from "./services";
import { Request, Response } from "express";

function generateToken(payload: object) {
    const secret: Secret = process.env.JWT_SECRET ?? "secret";
    return jwt.sign(payload, secret, { expiresIn: "14d" });
}

function login(req: Request, res: Response) {
    const { email, password } = req.body.user || {};

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const user = userService.getUserByEmail(email);

    if (!user) {
        return res.status(401).json({ error: "User not found" });
    }
    if (!userService.login(email, password)) {
        return res.status(401).json({ error: "Invalid password" });
    }

    const token = generateToken({ id: user.id, email: user.email });
    const userData = userService.getUserByEmail(email);

    res.setHeader("Authorization", `Bearer ${token}`);

    res.send({ user: userData});
}

export default { generateToken, login };