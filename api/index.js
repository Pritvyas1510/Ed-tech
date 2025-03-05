import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import "./config/passport.js"; // Import Passport Strategy

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// Connect to Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
