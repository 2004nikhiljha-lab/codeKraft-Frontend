import React from "react";
import "./Services.css";

const servicesData = [
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "High-performance websites, landing pages, portfolios, blogs, and enterprise web applications.",
  },
  {
    icon: "⚙️",
    title: "Software Development",
    description:
      "Custom software solutions tailored to business needs including CRM, ERP, and automation systems.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Android, iOS, and cross-platform apps with smooth UI and secure backend integration.",
  },
  {
    icon: "🎮",
    title: "Game Development",
    description:
      "2D & 3D game development with engaging gameplay, animations, and scalable architecture.",
  },
  {
    icon: "🧠",
    title: "AI & Machine Learning",
    description:
      "AI-driven applications including chatbots, predictive analytics, recommendation systems, and automation.",
  },
  {
    icon: "🗄️",
    title: "Database Design & Management",
    description:
      "Secure, scalable, and optimized databases using SQL, NoSQL, cloud databases, and data pipelines.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Cloud deployment, CI/CD pipelines, server management, and scalable infrastructure solutions.",
  },
  {
    icon: "🔐",
    title: "Cyber Security Solutions",
    description:
      "Application security, authentication systems, data protection, and vulnerability management.",
  },
  {
    icon: "🎨",
    title: "UI / UX & Branding",
    description:
      "User-centered UI/UX designs that improve engagement, conversion, and brand identity.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We deliver complete technology solutions — from idea to deployment —
          across every digital platform.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
