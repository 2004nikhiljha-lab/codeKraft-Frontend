import React, { useState } from "react";
import "./Enquiry.css";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Enquiry submitted successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        alert("Failed to submit enquiry ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server not reachable ❌");
    }
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">

        <div className="enquiry-info">
          <h2>Let’s Discuss Your Project</h2>
          <p>
            Looking for a custom solution or special discount?  
            Share your requirements and our team will reach out to you.
          </p>

          <ul>
            <li>✔ Website, App, Software & Game Development</li>
            <li>✔ AI, Automation & Cloud Solutions</li>
            <li>✔ Flexible Pricing & Special Discounts</li>
            <li>✔ Free Consultation</li>
          </ul>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <h3>Send an Enquiry</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select Service</option>
            <option>Website Development</option>
            <option>Software Development</option>
            <option>Mobile App Development</option>
            <option>Game Development</option>
            <option>AI / Automation</option>
            <option>Other</option>
          </select>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Estimated Budget</option>
            <option>₹10,000 – ₹25,000</option>
            <option>₹25,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option>
            <option>₹1,00,000+</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="enquiry-btn">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Enquiry;
