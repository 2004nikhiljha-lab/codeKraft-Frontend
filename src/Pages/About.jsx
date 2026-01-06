import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>About Us</h2>
          <p className="about-tagline">
            Building powerful digital solutions for businesses worldwide
          </p>

          <p>
            We are a technology-driven company delivering complete digital
            solutions across web, software, mobile, games, AI, and cloud
            platforms. Our mission is to transform ideas into scalable,
            secure, and high-performing products.
          </p>

          <p>
            From startups to enterprises, we partner with our clients to
            understand their vision and deliver solutions that drive real
            business growth. We believe in quality, transparency, and
            long-term collaboration.
          </p>

          <div className="about-highlights">
            <div>
              <h3>50+</h3>
              <span>Projects Delivered</span>
            </div>
            <div>
              <h3>100%</h3>
              <span>Client Satisfaction</span>
            </div>
            <div>
              <h3>24/7</h3>
              <span>Support</span>
            </div>
          </div>

          <button className="about-btn">Work With Us</button>
        </div>

        {/* RIGHT VISUAL */}
        <div className="about-visual">
          <div className="about-card">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✔ End-to-end tech solutions</li>
              <li>✔ Experienced development team</li>
              <li>✔ Secure & scalable architecture</li>
              <li>✔ On-time project delivery</li>
              <li>✔ Long-term support & maintenance</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
