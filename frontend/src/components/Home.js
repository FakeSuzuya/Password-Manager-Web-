import React from 'react';
import './style.css';

const Home = () => {
    return (
        <div>
          

            {/* Hero Section */}
            <div className="hero">
                <h1>Welcome to Password Manager</h1>
                <p>Secure your passwords with ease.</p>
                <a href="/register" className="hero-button">Get Started</a>
            </div>

            {/* Content Section */}
            <div className="content-section">
                <div className="content-container">
                    <h2>Why Choose Our Password Manager?</h2>
                    <p>Our password manager offers maximum security for all your online accounts. Protect your personal information with our simple and effective solution.</p>
                    <div className="features">
                        <div className="feature-item">
                            <h3>Advanced Protection</h3>
                            <p>Utilize the latest encryption to secure your passwords.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Access Anywhere</h3>
                            <p>Sync your passwords across all your devices.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Ease of Use</h3>
                            <p>Our intuitive interface makes managing your passwords a breeze.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Home;
