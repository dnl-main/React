import React, { useState } from "react";
import './csLogin.css';
import axios from "axios";  // Import axios
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = new FormData();
    loginData.append('login', true);
    loginData.append('username', username);
    loginData.append('password', password);

    // Use axios to make the POST request
    axios
      .post("http://localhost/Concorde/backend/index.php", loginData)
      .then((response) => {
        // Handle the response here
        const data = response.data;
        if (data.status === 1) {
          setMessage("Login successful!");
          // Redirect to /caseStudy if login is successful
          navigate("/caseStudy");  // This will navigate to the /caseStudy route
        } else {
          setMessage(data.message);
        }
      })
      .catch((error) => {
        // Handle errors here
        setMessage("Error occurred: " + error.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="login-button-cs" type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
