import React from "react";
import BikeCard from "../components/BikeCard";
import "./Scooters.css";

const scooters = [
  {
    name: "Yamaha Fascino 125",
    images: ["/assets/Yamaha Fascino 125_01.avif","/assets/Yamaha Fascino 125_02.avif","/assets/Yamaha Fascino 125_03.avif","/assets/Yamaha Fascino 125_04.avif","/assets/Yamaha Fascino 125_02.avif"],
    price: 89000,
    desc: "Smart and stylish scooter with FI engine."
  },
  {
    name: "Yamaha RayZR 125",
    images: ["/assets/Yamaha RayZR 125_01.avif","/assets/Yamaha RayZR 125_02.avif","/assets/Yamaha RayZR 125_03.avif","/assets/Yamaha RayZR 125_04.jpg","/assets/Yamaha RayZR 125_02.avif"],
    price: 85000,
    desc: "Lightweight, sporty, and powerful."
  },
  {
    name: "Yamaha Aerox 155",
    images: ["/assets/Yamaha Aerox 155_01.avif","/assets/Yamaha Aerox 155_02.jpg","/assets/Yamaha Aerox 155_03.jpg","/assets/Yamaha Aerox 155_04.jpg","/assets/Yamaha Aerox 155_02.jpg"],
    price: 140000,
    desc: "High-performance maxi-scooter."
  },
  {
    name: "Yamaha Alpha",
    images: ["/assets/Yamaha Alpha_01.avif","/assets/Yamaha Alpha_02.avif","/assets/Yamaha Alpha_03.jpg","/assets/Yamaha Alpha_04.jpg","/assets/Yamaha Alpha_02.avif"],
    price: 78000,
    desc: "Elegant and comfortable ride."
  },
  {
    name: "Yamaha Cygnus Ray Z",
    images: ["/assets/Yamaha Cygnus Ray Z_01.avif","/assets/Yamaha Cygnus Ray Z_02.avif","/assets/Yamaha Cygnus Ray Z_03.avif","/assets/Yamaha Cygnus Ray Z_04.jpg","/assets/Yamaha Cygnus Ray Z_02.avif"],
    price: 75000,
    desc: "Compact design for urban rides."
  }
];

const Scooters = () => (
  <div className="bike-grid">
    {scooters.map((s, i) => <BikeCard key={i} {...s} />)}
  </div>
);

export default Scooters;
