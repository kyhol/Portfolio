import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import LinkedInLogo from "../../Assets/Footer/Group 1000005950.svg";
import GitHubLogo from "../../Assets/Footer/Group 1000005949.svg";
import "./LandingAbout.css";
import { FaSmileBeam } from "react-icons/fa";

const LandingAbout = () => {
  return (
    <div>
      <div>
        <h1 className="landing-about-heading">
          Hi, I'm Kyle. <FaSmileBeam className="smiley-icon" />
        </h1>
      </div>
      <p>This is where I put something about coding and myself.</p>
      <div className="aboutLogoContainer">
        <img src={GitHubLogo} alt="GitHub Logo" />{" "}
        <img src={LinkedInLogo} alt="LinkedIn Logo" />
        <MdOutlineEmail />
      </div>
    </div>
  );
};

export default LandingAbout;
