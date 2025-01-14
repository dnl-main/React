import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission
  };

  // Check if the email ends with @friendmar.com.ph
  const isFriendmarEmail = formData.email.endsWith('@friendmar.com.ph');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render the Link based on email check */}
      {formData.email && (
        <div>
          {isFriendmarEmail ? (
            <Link to="/login">Go to Login</Link>
          ) : (
            <Link to="/registration">Go to Registration</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Signup;
