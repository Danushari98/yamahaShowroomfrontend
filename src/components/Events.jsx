import React from "react";
import "./Events.css";

const events = [
  {
    name: "MotoGP 2025 - Sepang Circuit",
    date: "March 15, 2025",
    desc: "Yamaha’s top riders hit the Sepang International Circuit with unmatched speed and precision.",
    image: "/assets/A1.jpg",
  },
  {
    name: "Yamaha Track Day - Chennai",
    date: "April 28, 2025",
    desc: "Exclusive Yamaha community event where fans and riders test the R-Series on the MMRT track.",
    image: "/assets/A3.jpg",
  },
  {
    name: "MotoGP 2025 - Mugello Italy",
    date: "June 2, 2025",
    desc: "Yamaha Racing Team takes on the legendary Mugello Circuit — raw power meets Italian curves.",
    image: "/assets/A4.png",
  },
  {
    name: "Yamaha Fan Fest - Tokyo",
    date: "August 18, 2025",
    desc: "A global celebration of Yamaha speed and style — featuring riders, live demos, and new model reveals.",
    image: "/assets/A5.jpg",
  },
  {
    name: "MotoGP 2025 - Valencia Finale",
    date: "November 10, 2025",
    desc: "The grand finale of the season! Yamaha riders battle for the MotoGP crown under the Valencia night lights.",
    image: "/assets/A6.jpg",
  },
];

const Events = () => {
  return (
    <div className="events-page">
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p><strong>{event.date}</strong></p>
            <p>{event.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
