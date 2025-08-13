import React from "react";
import '../styles/Header.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Header = () => {
  return (
    <header className="header">
        <div className="logo">
      <h1 className="header-title">Sartak's Portfolio</h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-link">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#clubs">College Societies/Clubs</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
          <div className="header-right">
            <a href="https://www.linkedin.com/iin/sartak-dhankar-3a56b4270" target="_blank">
            <FaLinkedin className="header-icon" />
            </a>
            <a href="https://github.com/sartakdhankar" target="_blank">
            <FaGithub className="header-icon" />
            </a>
            <a href="https://leetcode.com/u/sartakdhankar" target="_blank">
            <SiLeetcode className="header-icon" />
            </a>
            </div>

      </nav>
    </header>
  );
}
export default Header;