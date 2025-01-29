import React, { useState } from "react";
import "./SchoolForms.css";

const SchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    address: "",
    contactNumber: "",
    email: "",
    name: "",
    designation: "",
    mobileNumber: "",
    userEmail: "",
    termsAccepted: false,
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
    console.log("Form Submitted", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <form className="school-form" onSubmit={handleSubmit}>
      <h2>Add Your School For Free!</h2>
      <div className="section">
        <h3>School Information</h3>
        <label>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            placeholder="Type your School Name here"
            required
          />
        </label>
        <label>
          Address of the School:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Type School Address here"
            required
          />
        </label>
        <label>
          Official Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Official contact number"
            required
          />
        </label>
        <label>
          Official Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Official Email ID"
            required
          />
        </label>
      </div>

      <div className="section">
        <h3>Contact Information</h3>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </label>
        <label>
          Designation:
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Your Designation"
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Your Number"
            required
          />
        </label>
        <label>
          Email ID:
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </label>
      </div>

      <label className="checkbox">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          required
        />
        By clicking the checkbox, I accept the Terms & Conditions and Privacy Policy of School Dekho.
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SchoolForm;
