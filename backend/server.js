require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const SECRET = process.env.JWT_SECRET || "defaultsecret"; // Fix: Ensure JWT secret is set

// Initialize SQLite database
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

// Create tables
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)`
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS dashboard (id INTEGER PRIMARY KEY, title TEXT, description TEXT)`
  );

  // Insert default user (Username: admin, Password: password123)
  db.run(
    `INSERT OR IGNORE INTO users (id, username, password) VALUES (1, 'admin', ?)`,
    [bcrypt.hashSync("password123", 10)]
  );
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Login API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
    if (err || !user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" }); // Fix: Ensure SECRET is set
    res.json({ token });
  });
});

// Dashboard API (Protected)
app.get("/api/dashboard", authenticateToken, (req, res) => {
  db.all(`SELECT * FROM dashboard`, [], (err, rows) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(rows);
  });
});

// Map API (Protected)
app.get("/api/map", authenticateToken, (req, res) => {
  res.json({
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
