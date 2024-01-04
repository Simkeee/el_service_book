// Register.js
import React from 'react';
import RegistrationForm from '../components/auth/RegistrationForm';
import '../App.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="text-center font-weight-bold mb-4">Registracija</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;


