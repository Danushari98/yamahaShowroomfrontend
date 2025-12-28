import React from "react";
import "./Contest.css";

const contests = [
  {
    title: "Yamaha Racing Challenge 2025",
    img: "/assets/B6.jpg",
    desc: "Show your riding skills and win exciting prizes! Compete with top riders across India.",
    date: "March 2025",
  },
  {
    title: "Design Your Dream Yamaha",
    img: "/assets/B3.jpg",
    desc: "Submit your Yamaha bike design and stand a chance to win exclusive Yamaha merchandise.",
    date: "April 2025",
  },
  {
    title: "Ride to Glory – Online Challenge",
    img: "/assets/B4.jpg",
    desc: "Join the virtual challenge and test your knowledge about Yamaha’s racing heritage.",
    date: "May 2025",
  },
  {
    title: "Yamaha Photo Contest",
    img: "/assets/B7.jpg",
    desc: "Capture your best Yamaha moment and get featured on our official page!",
    date: "June 2025",
  },
];

const Contest = () => {
  return (
    <div className="contest-page">
      <h1 className="contest-title">Yamaha Racing Contests</h1>
      <p className="contest-subtitle">
        Participate in thrilling challenges and win exciting Yamaha rewards.
      </p>

      <div className="contest-grid">
        {contests.map((c, i) => (
          <div className="contest-card" key={i}>
            <img src={c.img} alt={c.title} />
            <div className="contest-content">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="contest-date">{c.date}</span>
            </div>
          </div>
        ))}
      </div>

      <footer>© 2025 Yamaha Racing Contest Zone</footer>
    </div>
  );
};

export default Contest;
