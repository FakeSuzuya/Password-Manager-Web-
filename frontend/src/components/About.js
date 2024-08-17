import React from 'react';
import './style.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Password Manager</h1>
      <div className="about-content">
        <img src="https://w0.peakpx.com/wallpaper/508/744/HD-wallpaper-cyber-network-internet-background-computer-internet-cyber.jpg" alt="Illustration" className="about-image" />
        <div className="about-text">
          <p>
            Password Manager is the ultimate solution to securely manage all your passwords and sensitive information.
            We use the latest encryption technologies to ensure your data is safe and accessible only to you.
          </p>
          <p>
            Our mission is to provide a reliable and easy-to-use service that helps you manage your digital life securely.
            Join millions of users who trust us to keep their information safe.
          </p>
          <p>
            Whether you're at home, at work, or on the go, Password Manager makes it easy to access your accounts and
            manage your passwords from any device.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
