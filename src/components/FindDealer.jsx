import React, { useState } from "react";
import "./FindDealer.css";

const dealers = [
  { id: 1, name: "Yamaha Dealer – Erode", location: "Erode", phone: "9876543210" },
  { id: 2, name: "Yamaha Dealer – Coimbatore", location: "Coimbatore", phone: "9000001111" },
  { id: 3, name: "Yamaha Dealer – Salem", location: "Salem", phone: "9888877777" },
  { id: 4, name: "Yamaha Dealer – Chennai", location: "Chennai", phone: "9555533333" },
];

export default function FindDealer() {
  const [search, setSearch] = useState("");

  const filteredDealers = dealers.filter((dealer) =>
    dealer.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dealer-container">
      <h1 className="dealer-title">Find Your Nearest Yamaha Dealer</h1>

      <input
        className="dealer-search"
        type="text"
        placeholder="Search by city (ex: Erode)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="dealer-list">
        {filteredDealers.length > 0 ? (
          filteredDealers.map((dealer) => (
            <div className="dealer-card" key={dealer.id}>
              <h3>{dealer.name}</h3>
              <p>📍 {dealer.location}</p>
              <p>📞 {dealer.phone}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No dealers found.</p>
        )}
      </div>
    </div>
  );
}
