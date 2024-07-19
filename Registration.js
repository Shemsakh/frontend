import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; 

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [zanid, setZanID] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate ZanID and age
    if (!zanid) {
      setErrorMessage('Please enter your ZanID.');
      return;
    }

    if (parseInt(age) < 18) {
      setErrorMessage('You must be 18 years or older to register.');
      return;
    }

    // Prepare data for registration
    const userData = {
      username,
      email,
      zanid,
      age,
      password
    };

    try {
      // Send registration data to server
      const response = await axios.post('http://localhost:8089/Registration/add', userData);

      // Handle success scenario (for example, show a success message)
      console.log('Registration successful:', response.data);
      // Reset form fields and error message
      setUsername('');
      setEmail('');
      setZanID('');
      setAge('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      // Handle error scenario (for example, show an error message)
      console.error('Error registering:', error);
      setErrorMessage('Error registering. Please try again later.');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form id="registrationForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="zanID">ZanID</label>
            <input type="text" id="zanID" name="zanID" value={zanid} onChange={(e) => setZanID(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
