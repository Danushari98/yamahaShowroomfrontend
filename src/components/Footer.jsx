import React from "react";
import "./Footer.css";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* === PRODUCTS SECTION === */}
        <div className="footer-section">
          <h3>PRODUCTS</h3>
          <ul>
            {/* 2. Replace li with Link components */}
            <li><Link to="/Motorbikes">Motorcycles</Link></li>
            <li><Link to="/Scooters">Scooters</Link></li>
            <li><Link to="/ElectricBikes">Electric Bikes</Link></li>
          </ul>
        </div>

        {/* === SERVICE SECTION === */}
        <div className="footer-section">
          <h3>SERVICE</h3>
          <ul>
            {/* Links added for consistency, assuming you have routes for these */}
            <li><Link to="/service">Service Centers</Link></li>
            <li><Link to="/warranty">Warranty</Link></li>
            <li><Link to="/parts">Parts</Link></li>
          </ul>
        </div>

        {/* === DEALERS SECTION === */}
        <div className="footer-section">
          <h3>DEALERS</h3>
          <ul>
            <li><Link to="/finddealer">Find a Dealer</Link></li>
            <li><Link to="/booktest">Book Test Ride</Link></li>
            <li><Link to="/offers">Offers</Link></li>
          </ul>
        </div>

        {/* === FOLLOW US SECTION === */}
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            {/* Note: Social icons often use regular <a> tags for external links */}
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Yamaha Racing | Rev Your Heart ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;