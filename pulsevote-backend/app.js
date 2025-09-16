const express = require('express');
const cors = require('cors'); // this will be discussed later
const helmet = require('helmet'); // this will be discussed later
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true
}));
app.use(express.json());

// Import routes and middleware
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");

app.get('/', (req, res) => {
  res.send('PulseVote API running!');
});

// Test endpoint for JSON data
app.get('/test', (req, res) => {
  res.json({
    message: 'PulseVote API is working!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Protected endpoint
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.id}! You have accessed protected data.`,
    timestamp: new Date()
  });
});

module.exports = app;
