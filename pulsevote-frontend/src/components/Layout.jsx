import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Layout = ({ children, isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="navbar bg-primary text-primary-content shadow-lg">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            PulseVote
          </Link>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            <Link to="/" className="btn btn-ghost">
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="btn btn-ghost">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-error">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="btn btn-ghost">
                  Register
                </Link>
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
              </>
            )}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
