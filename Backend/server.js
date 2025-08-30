const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let contents = []; // In-memory storage

// POST API → Add content
app.post("/api/content", (req, res) => {
  const { type, text } = req.body;
  const newContent = { id: Date.now(), type, text, createdAt: new Date() };
  contents.push(newContent);
  res.json(newContent);
});

// GET API → Retrieve all content
app.get("/api/content", (req, res) => {
  res.json(contents);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
