import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";

const pricingData = [
  {
    title: "Website Development",
    price: "₹20,000",
    note: "Starting from",
    features: [
      "Responsive Design",
      "Modern UI/UX",
      "SEO Friendly",
      "Contact / Enquiry Form",
      "1 Month Support",
    ],
  },
  {
    title: "Software Development",
    price: "₹40,000",
    note: "Starting from",
    popular: true,
    features: [
      "Custom Business Software",
      "Secure Authentication",
      "Scalable Architecture",
      "Database Integration",
      "3 Months Support",
    ],
  },
  {
    title: "Mobile App Development",
    price: "₹60,000",
    note: "Starting from",
    features: [
      "Android / Cross Platform",
      "Clean UI",
      "Backend Integration",
      "Play Store Ready",
      "3 Months Support",
    ],
  },
  {
    title: "Game Development",
    price: "₹80,000",
    note: "Starting from",
    features: [
      "2D / 3D Games",
      "Custom Gameplay",
      "Animations & Assets",
      "Multi-Level Design",
      "Performance Optimization",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h2>Pricing</h2>
        <p>
          Transparent pricing tailored for startups, businesses, and enterprises
        </p>
      </div>

      <div className="pricing-grid">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? "popular" : ""}`}
          >
            {plan.popular && <span className="badge">Most Popular</span>}

            <h3>{plan.title}</h3>
            <p className="price">
              {plan.price}
              <span>{plan.note}</span>
            </p>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <Link to="/enquiry" className="pricing-btn">
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* ENQUIRY SECTION */}
      <div className="pricing-enquiry">
        <h3>Need a Special Discount or Custom Requirement?</h3>
        <p>
          Pricing may vary based on features, timeline, and complexity.
          Contact us for exclusive discounts and detailed discussion.
        </p>

        <Link to="/enquiry" className="enquiry-btn">
          Enquire Now
        </Link>
      </div>
    </section>
  );
};

export default Pricing;