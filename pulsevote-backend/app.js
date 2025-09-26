const express = require('express');
const cors = require('cors'); // this will be discussed later
const helmet = require('helmet'); // this will be discussed later
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Trust proxy for accurate IP detection behind reverse proxies/load balancers
app.set('trust proxy', 1);

app.use(helmet());

// Content Security Policy (CSP) configuration
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://apis.google.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'", "https://localhost:5000"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    },
  })
);
app.use(cors({
  origin: "https://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Import routes and middleware
const authRoutes = require("./routes/authRoutes");
const organisationRoutes = require("./routes/organisationRoutes");
const pollRoutes = require("./routes/pollRoutes");
const { protect } = require("./middleware/authMiddleware");

app.get('/', (req, res) => {
  res.send('PulseVote API running!');
});

// Health check endpoint
app.get('/health', (req, res) => 
  res.status(200).json({
    ok: true,
    ts: Date.now()
  })
);

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

// Organisation routes
app.use("/api/organisations", organisationRoutes);

// Poll routes
app.use("/api/polls", pollRoutes);

// Protected endpoint
app.get("/api/protected", protect, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.id}! You have accessed protected data.`,
    timestamp: new Date()
  });
});

module.exports = app;
