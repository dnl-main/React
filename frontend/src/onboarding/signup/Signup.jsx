import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';  // Import Link for navigation
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Handle form input change
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Send the form data to the PHP API using axios
      const response = await axios.post(
        'http://localhost/Concorde/backend/signup.php', 
        formData // Send all form data
      );

      // Handle success or error response
      if (response.data.status === 1) {
        setMessage(response.data.message); // Set the success message
      } else {
        setMessage(response.data.message); // Set the failure message
      }
    } catch (error) {
      // Handle error response
      setMessage('An error occurred while saving the data.');
      console.error(error);
    }
  };



  // Check if the email ends with @friendmar.com.ph
  const isFriendmarEmail = formData.email.endsWith('@friendmar.com.ph');

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Mobile:
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
      <p>{message}</p>
    </form>

      {/* Conditionally render the Link based on email check 
      {formData.email && (
        <div>
          {isFriendmarEmail ? (
            <Link to="/login">Go to Login</Link>
          ) : (
            <Link to="/registration">Go to Registration</Link>
          )}
        </div>
      )}*/}
    </div>
  );
};

export default Signup;