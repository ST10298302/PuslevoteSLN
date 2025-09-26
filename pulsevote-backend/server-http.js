const mongoose = require('mongoose');
const app = require('./app');
const http = require('http');
require('dotenv').config();

const PORT = 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  http.createServer(app).listen(PORT, () => {
    console.log('Server running at http://localhost:' + PORT);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
