import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">about.</h2>
      <p className="about-intro">
        I am a hardworking, tech enthusiast trying my best to learn and
        understand my way through technology. My hobbies include sports,
        gaming, music, and exercise. I am full of zeal and ambition, always
        looking for opportunities to grow and challenge myself.
      </p>

      <div className="about-timeline">
        <div className="timeline-item">
          <span className="bullet"></span>
          <div className="timeline-content">
            <h3 className="timeline-date">2018–2022</h3>
            <p className="timeline-text">
              Completed high school at Indraprastha International School, where
              I built a strong academic foundation and actively participated in
              extracurricular activities.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="bullet"></span>
          <div className="timeline-content">
            <h3 className="timeline-date">2022–2026</h3>
            <p className="timeline-text">
              Currently pursuing a degree at Maharaja Surajmal Institute of
              Technology (MSIT), honing my skills in technology, problem-solving,
              and teamwork.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="bullet"></span>
          <div className="timeline-content">
            <h3 className="timeline-date">Future Goals</h3>
            <p className="timeline-text">
              Striving to excel in the tech industry by continuously learning,
              building impactful projects, and contributing to innovative
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
