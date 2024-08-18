import React, { useState } from 'react';
import axios from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [website, setWebsite] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwords, setPasswords] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/dashboard', {
                website,
                username,
                password
            });
            setPasswords([...passwords, response.data]);
            setWebsite('');
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error('Error storing password', error);
        }
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Site Web:</label>
                    <input 
                        type="text" 
                        value={website} 
                        onChange={(e) => setWebsite(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Nom d'utilisateur:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Mot de passe:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Ajouter</button>
            </form>

            <h3>Vos mots de passe</h3>
            <ul>
                {passwords.map((item, index) => (
                    <li key={index}>
                        <strong>{item.website}</strong> - {item.username} : {item.password}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
