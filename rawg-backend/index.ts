import dotenv from "dotenv";
import express from "express";
import init from "./startup/init";

const app = express();
dotenv.config();
init(app);

// A simple test-route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Listen on `0.0.0.0` og use `process.env.PORT` (nødvendigt for Render)
const PORT = process.env.PORT || 5001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

// use if you want to run locally on localhost only
// app.listen(5001, () => {
//   console.log("Server is running on http://localhost:5001");
// });