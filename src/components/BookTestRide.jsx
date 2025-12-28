import React, { useState } from "react";
import axios from "axios";
import "./BookTestRide.css";

const BookTestRide = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bikeModel: "",
    preferredDate: "",
    location: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Adjust this URL to match your Django backend
      const response = await axios.post("http://127.0.0.1:8000/api/book-test-ride/", formData);
      setStatus("Test Ride Booked Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        bikeModel: "",
        preferredDate: "",
        location: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to submit. Try again.");
    }
  };

  return (
    <div className="test-ride-container">
      <h1 className="ride-title">Book Your Yamaha Test Ride</h1>
      <p className="ride-subtitle">
        Experience the thrill of Yamaha. Fill out the form and our team will reach out soon.
      </p>

      <form className="ride-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="bikeModel"
          value={formData.bikeModel}
          onChange={handleChange}
          required
        >
          <option value="">Select Bike Model</option>
          <option value="R15 V4">R15 V4</option>
          <option value="MT-15">MT-15</option>
          <option value="FZ-X">FZ-X</option>
          <option value="Aerox 155">Aerox 155</option>
          <option value="Fascino 125">Fascino 125</option>
        </select>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <button type="submit" className="ride-btn">
          Book Test Ride
        </button>
      </form>

      {status && <p className="ride-status">{status}</p>}
    </div>
  );
};

export default BookTestRide;
