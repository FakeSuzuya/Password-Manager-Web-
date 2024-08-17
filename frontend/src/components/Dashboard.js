import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Dashboard = () => {
  const navigate = useNavigate(); 
  const user = authService.getCurrentUser();

  const logout = () => {
    authService.logout();
    navigate('/login'); 
  };

  if (!user) {
    navigate('/login'); 
    return null;
  }

  return (
    <div className="container">
      <h1>Welcome, {user.user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
