import React from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,  // State to track the "Remember Me" checkbox
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new URLSearchParams();
    form.append('email', formData.email);
    form.append('password', formData.password);

    axios
      .post('http://localhost/Concorde/backend/login.php', form)
      .then((response) => {
        const { message, status } = response.data;
        alert(message);
        if (status === 'success') {
          if (formData.rememberMe) {
            localStorage.setItem('userEmail', formData.email);  
          }

          navigate('/dashboard');
        } else {
          navigate('/register');
        }
      })
      .catch((error) => {
        console.error('There was an error!', error);
        alert('Error logging in.');
      });
  };







  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
