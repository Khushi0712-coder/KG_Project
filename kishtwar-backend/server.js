// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // MongoDB connection
import userRoutes from "./routes/user.js";
import paymentRoutes from "./routes/payment.js";
import reviewRoutes from "./routes/review.js";
import messageRoutes from "./routes/message.js"

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/messages", messageRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend running 🚀"));

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
