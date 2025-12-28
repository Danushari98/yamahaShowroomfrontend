import React from "react";
import "./Offers.css";

const offersList = [
  {
    title: "Yamaha New Year Offer",
    img: "/assets/B6.jpg",
    desc: "Get up to ₹10,000* cashback on selected Yamaha Motorcycles.",
    valid: "Valid till: 31 Dec 2025",
  },
  {
    title: "Free Accessories Package",
    img: "/assets/B3.jpg",
    desc: "Get free tank pad, seat cover, and visor on selected R-Series bikes.",
    valid: "Valid till: 15 Jan 2026",
  },
  {
    title: "Festival Exchange Bonus",
    img: "/assets/B4.jpg",
    desc: "Exchange your old bike and get up to ₹15,000 exchange bonus!",
    valid: "Valid till: 30 Nov 2025",
  },
  {
    title: "Scooters Special Offer",
    img: "/assets/Yamaha Fascino 125_04.avif",
    desc: "Flat ₹5,000 off on Yamaha Scooters and 1-year free servicing.",
    valid: "Valid till: 31 Jan 2026",
  },
];

const Offers = () => {
  return (
    <div className="offers-page">
      <h1 className="offers-title">Exclusive Yamaha Offers</h1>
      <p className="offers-subtitle">
        Grab the latest deals and make your Yamaha dream come true.
      </p>

      <div className="offers-grid">
        {offersList.map((o, i) => (
          <div className="offer-card" key={i}>
            <img src={o.img} alt={o.title} />
            <div className="offer-content">
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              <span className="offer-valid">{o.valid}</span>
            </div>
          </div>
        ))}
      </div>

      <footer className="offer-footer">
        © 2025 Yamaha Showroom – Offers & Promotions
      </footer>
    </div>
  );
};

export default Offers;
