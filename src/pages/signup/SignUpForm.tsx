import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.acceptedTerms) {
      console.log("Form Data Submitted:", formData);
    } else {
      alert("Please accept the Terms and Privacy Policy.");
    }
  };

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p style={{color:"red"}}>
          Already have an account? <a href="/login">Log in</a>
        </p>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="terms">
          <input
            type="checkbox"
            id="acceptedTerms"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <label htmlFor="acceptedTerms">Accept the Terms and Privacy Policy</label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUpForm;
