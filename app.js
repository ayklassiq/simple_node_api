// app.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Another route for demonstration
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API! i love you and you doing well thanks ",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
