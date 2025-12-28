import React from "react";
import "./Warranty.css";

function Warranty() {
  return (
    <div className="warranty-container">

      <h1 className="warranty-title">Yamaha Warranty Information</h1>

      <p className="warranty-subtitle">
        Your Yamaha bike is backed by trusted warranty coverage ensuring safety, quality, and long-term performance.
      </p>

      <div className="warranty-grid">

        {/* Standard Warranty */}
        <div className="warranty-card">
          <h2 className="warranty-name">Standard Warranty</h2>
          <p className="warranty-desc">
            All Yamaha motorcycles & scooters come with a standard warranty of
            <span> 2 years or 30,000 km*</span>, whichever comes first.
          </p>
        </div>

        {/* Extended Warranty */}
        <div className="warranty-card">
          <h2 className="warranty-name">Extended Warranty</h2>
          <p className="warranty-desc">
            Extend your coverage up to <span>5 years</span> for maximum peace of mind.
            Covers engine, electricals, and major components.
          </p>
        </div>

        {/* Battery Warranty */}
        <div className="warranty-card">
          <h2 className="warranty-name">Battery Warranty</h2>
          <p className="warranty-desc">
            Yamaha provides <span>12 months</span> warranty on all scooter & bike batteries.
          </p>
        </div>

        {/* Tyre Warranty */}
        <div className="warranty-card">
          <h2 className="warranty-name">Tyre Warranty</h2>
          <p className="warranty-desc">
            Tyre warranty is provided by OEM tyre manufacturers covering
            manufacturing defects only.
          </p>
        </div>

      </div>

      <p className="warranty-note">
        *Warranty may vary by model. Check your service booklet for exact details.
      </p>
    </div>
  );
}

export default Warranty;
