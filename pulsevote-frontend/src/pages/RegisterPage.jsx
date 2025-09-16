import React from 'react';
import Register from '../components/Register';

const RegisterPage = ({ onLogin }) => {
  return (
    <div className="register-page">
      <Register onLogin={onLogin} />
    </div>
  );
};

export default RegisterPage;
