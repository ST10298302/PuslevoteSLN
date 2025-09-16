import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ isAuthenticated }) => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="hero bg-primary text-primary-content py-20 rounded-lg mb-12">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-6">Welcome to PulseVote</h1>
            <p className="text-xl mb-8 opacity-90">
              Your platform for creating and participating in polls and surveys
            </p>
            
            {isAuthenticated ? (
              <div className="flex justify-center">
                <Link to="/dashboard" className="btn btn-accent btn-lg">
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/register" className="btn btn-accent btn-lg">
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-outline btn-lg">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-12 text-base-content">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="card-title justify-center text-2xl mb-4">Create Polls</h3>
              <p className="text-base-content/70">
                Easily create polls and surveys with multiple question types
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="card-title justify-center text-2xl mb-4">Real-time Results</h3>
              <p className="text-base-content/70">
                View live results as people vote on your polls
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="card-title justify-center text-2xl mb-4">Secure Voting</h3>
              <p className="text-base-content/70">
                Secure authentication ensures only authorized users can vote
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
