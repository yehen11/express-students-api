import express from "express";
import connectDB from "./src/config/db.js";
import studentRoutes from "./src/routes/studentRoutes.js";
import "dotenv/config";

await connectDB();

const app = express();
app.use(express.json());
app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));