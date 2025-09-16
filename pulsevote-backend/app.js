const express = require('express');
const cors = require('cors'); // this will be discussed later
const helmet = require('helmet'); // this will be discussed later
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

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

module.exports = app;
