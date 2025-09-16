# PulseVote Frontend

A modern React frontend for the PulseVote polling application, built with Vite.

## Features

- React 18 with modern hooks
- Vite for fast development and building
- Axios for HTTP requests
- React Router for navigation
- Responsive design
- Real-time API integration

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

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

## Project Structure

```
pulsevote-frontend/
├── public/         # Static assets
├── src/
│   ├── assets/     # Images and other assets
│   ├── App.jsx     # Main application component
│   ├── App.css     # Application styles
│   ├── main.jsx    # Application entry point
│   └── index.css   # Global styles
├── index.html      # HTML template
└── package.json    # Dependencies and scripts
```

## Features

- **Welcome Page**: Displays "Welcome to PulseVote" message
- **API Integration**: Fetches and displays data from the backend API
- **Real-time Updates**: Shows backend status, messages, and timestamps
- **Error Handling**: Graceful error handling for API requests

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Dependencies

- react - UI library
- react-dom - React DOM bindings
- axios - HTTP client
- react-router-dom - Routing library
- vite - Build tool and dev server

## Backend Integration

The frontend connects to the PulseVote backend API running on `http://localhost:5000`. Make sure the backend server is running before starting the frontend.

## Security Considerations

- Environment variables are properly configured
- CORS is handled by the backend
- No sensitive data is exposed in the frontend