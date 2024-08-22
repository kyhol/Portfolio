import React from "react";
import "./Footer.css";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Kyle Hollett</h3>
          <p>A Software Developer</p>
        </div>
        <div className="footer-center">
          <div className="footer-contact">
            <p>Email: kyle.hollett@keyin.com</p>
          </div>
          <div className="footer-social-links">
            <a
              href="https://github.com/kyhol"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={GitHubLogo} alt="GitHub Logo" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kyle-hollett-8558842a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img src={LinkedInLogo} alt="LinkedIn Logo" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-signature cedarville-cursive-regular">
            <span className="default-font">&lt;</span>Kyle Hollett
            <span className="default-font">/&gt;</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright ">
          © 2023 Kyle Hollett. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
