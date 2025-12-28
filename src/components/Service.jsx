import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>YAMAHA SERVICE & MAINTENANCE</h1>
        <p>Keep your Yamaha performing at its best — always race-ready.</p>
      </header>

      <section className="service-content">
        <div className="service-card">
          <h2>Regular Checkups</h2>
          <p>
            Ensure top performance with authorized Yamaha service centers 
            offering routine inspections and maintenance.
          </p>
        </div>

        <div className="service-card">
          <h2>Warranty Support</h2>
          <p>
            Yamaha genuine parts come with warranty coverage — built to last 
            for peak performance and reliability.
          </p>
        </div>

        <div className="service-card">
          <h2>Emergency Assistance</h2>
          <p>
            Get 24/7 roadside help to keep your journey smooth and safe — 
            Yamaha has you covered wherever you ride.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Service;
