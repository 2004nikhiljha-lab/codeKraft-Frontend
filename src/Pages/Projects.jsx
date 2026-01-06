import React from "react";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A scalable MERN e-commerce platform with secure payments, admin dashboard, and order management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis tool that improves ATS score and gives smart suggestions.",
    tech: ["React", "Python", "AI", "NLP"],
  },
  {
    id: 3,
    title: "Business Portfolio Website",
    description:
      "A high-converting business website with modern UI, SEO optimization, and lead generation.",
    tech: ["React", "CSS", "Express"],
  },
  {
    id: 4,
    title: "Admin Analytics Dashboard",
    description:
      "A real-time analytics dashboard with charts, reports, and role-based access control.",
    tech: ["React", "Charts", "REST API"],
  },
  {
    id: 5,
    title: "CRM System",
    description:
      "A real-time analytics dashboard with charts, reports, and role-based access control.",
    tech: ["React", "Charts", "REST API"],
  },
  {
    id: 6,
    title: "ERP Student Management",
    description:
      "A real-time analytics dashboard with charts, reports, and role-based access control.",
    tech: ["React", "Charts", "REST API"],
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Our Projects</h2>
        <p>Delivering high-quality digital solutions for modern businesses</p>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>

            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>

            <button className="project-btn">View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
