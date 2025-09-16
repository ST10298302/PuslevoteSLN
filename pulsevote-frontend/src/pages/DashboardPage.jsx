import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No authentication token found');
          setLoading(false);
          return;
        }

        const response = await axios.get('https://localhost:5000/api/protected', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setUserInfo(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user information');
        // If token is invalid, remove it from localStorage
        if (err.response?.status === 403 || err.response?.status === 401) {
          localStorage.removeItem('token');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <span className="ml-4 text-lg">Loading dashboard...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Dashboard Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-base-content mb-4">Dashboard</h1>
        <p className="text-lg text-base-content/70">Welcome to your PulseVote dashboard</p>
      </div>

      {/* Welcome Card */}
      <div className="hero bg-primary text-primary-content rounded-lg mb-8">
        <div className="hero-content text-center py-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
            {userInfo && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-left space-y-2">
                  <p><strong>Message:</strong> {userInfo.message}</p>
                  <p><strong>Last Access:</strong> {new Date(userInfo.timestamp).toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="card-title justify-center text-xl mb-4">My Polls</h3>
            <p className="text-base-content/70 mb-4">Create and manage your polls</p>
            <button className="btn btn-primary">Create New Poll</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="card-title justify-center text-xl mb-4">Recent Activity</h3>
            <p className="text-base-content/70 mb-4">View your recent voting activity</p>
            <button className="btn btn-secondary">View Activity</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="card-title justify-center text-xl mb-4">Statistics</h3>
            <p className="text-base-content/70 mb-4">View your voting statistics</p>
            <button className="btn btn-accent">View Stats</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body text-center">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="card-title justify-center text-xl mb-4">Settings</h3>
            <p className="text-base-content/70 mb-4">Manage your account settings</p>
            <button className="btn btn-outline">Account Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
