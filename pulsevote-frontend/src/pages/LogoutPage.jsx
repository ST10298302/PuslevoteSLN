import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout
    onLogout();
    
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLogout, navigate]);

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="card bg-base-100 shadow-xl max-w-md">
        <div className="card-body text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <h2 className="card-title justify-center text-2xl mb-4">Logging out...</h2>
          <div className="space-y-2">
            <p className="text-base-content/70">You have been successfully logged out.</p>
            <p className="text-base-content/70">Redirecting to home page...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
