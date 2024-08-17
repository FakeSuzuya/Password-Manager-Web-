import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import ClipLoader from 'react-spinners/ClipLoader';
import './style.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { email, password, confirmPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await authService.register({ email, password });
      navigate('/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="centered">
      <div className="form-container">
        <h1>Register</h1>
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
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" size={20} /> : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
