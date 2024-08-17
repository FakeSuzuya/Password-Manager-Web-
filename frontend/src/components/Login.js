import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import ClipLoader from 'react-spinners/ClipLoader';
import './style.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await authService.login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="centered">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" size={20} /> : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
