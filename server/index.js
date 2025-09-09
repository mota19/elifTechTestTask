import express from "express";

import pool from "./db.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node + TS + PostgreSQL!");
});

app.get("/shops", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM shop");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
