import dotenv from "dotenv";
import express from "express";
import init from "./startup/init";

const app = express();
dotenv.config();
init(app);

// En simpel test-route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Lyt på `0.0.0.0` og brug `process.env.PORT` (nødvendigt for Render)
const PORT = process.env.PORT || 5001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
