import React from 'react';
import './Hero.css';
import { Link } from "react-router-dom";

const HeroServices = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Website Development',
      description: 'Custom, responsive websites that drive engagement and deliver exceptional user experiences across all devices.'
    },
    {
      icon: '💼',
      title: 'CRM Software',
      description: 'Streamline customer relationships with our powerful CRM solutions designed to boost sales and productivity.'
    },
    {
      icon: '📊',
      title: 'ERP Systems',
      description: 'Enterprise resource planning solutions that integrate all your business processes into one unified system.'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and expand your digital presence.'
    },
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Immersive gaming experiences from concept to launch, for mobile, web, and desktop platforms.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and data-driven insights powered by cutting-edge AI technologies.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.'
    }
  ];

  return (
    <section className="hero-services">
      {/* Hero Section */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <span className="badge-text">Leading Tech Innovation</span>
        </div>
        
        <h1 className="hero-title">
          Transforming Ideas Into
          <span className="gradient-text"> Digital Reality</span>
        </h1>
        
        <p className="hero-description">
          We are a premier technology company specializing in cutting-edge software solutions 
          and comprehensive tech education. From enterprise applications to student training programs, 
          we empower businesses and individuals to thrive in the digital age.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Projects Delivered</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">200+</h3>
            <p className="stat-label">Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">1000+</h3>
            <p className="stat-label">Students Trained</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#enquiry" className="service-link">
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Training Section */}
      <div className="training-section">
        <div className="training-content">
          <div className="training-text">
            <span className="training-badge">🎓 Education Programs</span>
            <h2 className="training-title">
              Student Training & Development
            </h2>
            <p className="training-description">
              Empower the next generation of tech professionals with our comprehensive 
              training programs. We offer hands-on courses in web development, mobile app 
              development, software engineering, and emerging technologies. Our industry-expert 
              instructors provide real-world project experience and career guidance.
            </p>
            <ul className="training-features">
              <li>✓ Industry-Standard Curriculum</li>
              <li>✓ Hands-on Project Experience</li>
              <li>✓ Expert Mentorship</li>
              <li>✓ Job Placement Assistance</li>
              <li>✓ Certification Programs</li>
              <li>✓ Flexible Learning Options</li>
            </ul>
            <Link to="/enrol" className="training-cta">
              Enroll Now
            </Link>
          </div>
          <div className="training-visual">
            <div className="visual-card card-1">
              <span className="visual-icon">💻</span>
              <h4>Web Development</h4>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
            <div className="visual-card card-2">
              <span className="visual-icon">📱</span>
              <h4>Mobile Development</h4>
              <p>React Native, Flutter, iOS, Android</p>
            </div>
            <div className="visual-card card-3">
              <span className="visual-icon">🎨</span>
              <h4>UI/UX Design</h4>
              <p>Figma, Adobe XD, User Research</p>
            </div>
            <div className="visual-card card-4">
              <span className="visual-icon">⚙️</span>
              <h4>Backend Development</h4>
              <p>Node.js, Python, Databases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;