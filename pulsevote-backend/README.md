# PulseVote Backend

A secure, real-time polling web application backend built with Node.js and Express.

## Features

- Express.js server with security middleware (Helmet, CORS)
- Environment variable configuration
- Rate limiting protection
- MongoDB integration ready
- RESTful API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The server will be running on `http://localhost:5000`

## API Endpoints

- `GET /` - Welcome message
- `GET /test` - Test endpoint returning JSON data

## Project Structure

```
pulsevote-backend/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── app.js          # Express app configuration
├── server.js       # Server entry point
└── package.json    # Dependencies and scripts
```

## Security Features

- Helmet.js for security headers
- CORS configuration
- Express rate limiting
- Environment variable protection

## Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm audit` - Check for security vulnerabilities

## Dependencies

- express - Web framework
- cors - Cross-origin resource sharing
- helmet - Security middleware
- dotenv - Environment variable management
- mongoose - MongoDB object modeling
- express-rate-limit - Rate limiting middleware
- nodemon - Development server (dev dependency)
