import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../config/database";
import { User } from "../models/User";

interface JwtPayload {
    userId: string;
    role: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as JwtPayload;

        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: { id: payload.userId }
        });

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        if (user.status !== "active") {
            return res.status(403).json({ message: "Account is not active" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export const checkRole = (roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden" });
        }

        next();
    };
};