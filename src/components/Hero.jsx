import React from "react";
import "../styles/hero.css"
import profileImg from "../assets/profile.jpg"; // adjust path if needed

export default function Hero() {
  return (
    <section className="hero">
      {/* Left Section */}
      <div className="hero-left">
        <p className="intro-text">Hello, I'm Sartak,</p>
        <h1 className="hero-title">
          Front-End <br /> Developer
        </h1>
        <p className="location-text">Based in New Delhi, India.</p>
        <button className="resume-button">Resume</button>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        <div className="img-wrapper">
          <img src={profileImg} alt="Sartak Dhankar" />
          <div className="decor decor1"></div>
          <div className="decor decor2"></div>
        </div>
      </div>
    </section>
  );
}