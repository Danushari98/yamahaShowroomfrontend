import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/assets/Yamaha.png";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* === LOGO === */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Yamaha Logo" className="logo-img" />
          </Link>
        </div>

        {/* === NAV LINKS === */}
        <ul className="nav-links">
          {/* PRODUCTS DROPDOWN */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="drop-btn">PRODUCTS ▾</button>
            {openDropdown === "products" && (
              <ul className="dropdown-menu">
                <li><Link to="/motorbikes">Motorcycles</Link></li>
                <li><Link to="/scooters">Scooters</Link></li>
                <li><Link to="/ebikes">E-Bikes</Link></li>
              </ul>
            )}
          </li>

          {/* DEALERS DROPDOWN */}
          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("dealers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="drop-btn">DEALERS ▾</button>
            {openDropdown === "dealers" && (
              <ul className="dropdown-menu">
                <li><Link to="/booktest">Book Test Ride</Link></li>
                <li><Link to="/finddealer">Find a Dealer</Link></li>
              </ul>
            )}
          </li>

          {/* SINGLE LINKS */}
          <li><Link to="/service">SERVICE</Link></li>
          <li><Link to="/parts">PARTS</Link></li>
          <li><Link to="/motogp">MOTOGP</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/contest">CONTEST</Link></li>
        </ul>

        {/* === BOOK BUTTON === */}
        <div className="nav-btn">
          <Link to="/booktest">
            <button className="test-btn">BOOK TEST RIDE</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
