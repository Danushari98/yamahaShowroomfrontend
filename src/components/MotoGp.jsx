import React from "react";
import "./MotoGp.css";

const riders = [
  {
    name: "Fabio Quartararo",
    image: "./assets/fabi.jpg",
    team: "Monster Energy Yamaha MotoGP",
    desc: "MotoGP World Champion 2021 – Known for his precision and fearless racing.",
  },
  {
    name: "Alex Rins",
    image: "./assets/alexxx.jpg",
    team: "Monster Energy Yamaha MotoGP",
    desc: "Aggressive yet smooth — a rising contender on the Yamaha YZR-M1.",
  },
  {
    name: "YZR-M1 2025",
    image: "./assets/YZR-M1 2025.jpg",
    team: "Factory Yamaha Racing Bike",
    desc: "Cutting-edge MotoGP machine with 1000cc inline-four engine and seamless gearbox.",
  },
  {
    name: "Yamaha Racing Crew",
    image: "./assets/Yamaha Racing Crew.jpg",
    team: "Team Yamaha Pit Crew",
    desc: "World-class engineers and mechanics behind every Yamaha victory.",
  },
  {
    name: "MotoGP Highlights",
    image: "./assets/MotoGP Highlights.jpg",
    team: "Grand Prix Circuits",
    desc: "Catch the adrenaline rush from circuits like Mugello, Assen, and Sepang.",
  },
];

const MotoGp = () => {
  return (
    <div className="motogp-page">
      {/* HEADER */}
      <header className="motogp-header">
        <div className="overlay"></div>
        <div className="motogp-header-content">
          <h1>YAMAHA MOTOGP RACING</h1>
          <p>Speed • Passion • Precision</p>
        </div>
      </header>

      {/* RIDERS SECTION */}
      <section className="motogp-section">
        <h2 className="section-title">TEAM & MACHINES</h2>
        <div className="rider-grid">
          {riders.map((rider, index) => (
            <div key={index} className="rider-card">
              <img src={rider.image} alt={rider.name} />
              <h3>{rider.name}</h3>
              <h4>{rider.team}</h4>
              <p>{rider.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="animated-footer">
        <p>© 2025 Yamaha MotoGP | Powered by Passion & Precision</p>
      </footer>
    </div>
  );
};

export default MotoGp;
