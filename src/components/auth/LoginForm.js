// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde možete dodati logiku za slanje podataka na server ili druge potrebne akcije
    console.log('Podaci za prijavljivanje:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Korisničko ime:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Šifra:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Prijavi se</button>
    </form>
  );
};

export default LoginForm;
