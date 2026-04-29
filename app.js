const express = require("express");
const cors = require("cors");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Root route (FIX for "Cannot GET /")
app.get("/", (req, res) => {
  res.send("School Management API is running 🚀");
});

// API routes
app.use("/", schoolRoutes);

module.exports = app;
