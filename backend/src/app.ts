import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";
import { Server } from "socket.io";
import { AppDataSource } from "./config/database";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/product.routes";
import orderRoutes from "./routes/order.routes";
import supplierRoutes from "./routes/supplier.routes";

config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: process.env.ALLOWED_ORIGINS?.split(","),
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(","),
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/suppliers", supplierRoutes);

// WebSocket connection
io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

// Database Connection and Server Start
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        const PORT = process.env.PORT || 5000;
        httpServer.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });