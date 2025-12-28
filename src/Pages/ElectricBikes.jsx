import React from "react";
import BikeCard from "../components/BikeCard";
import "./ElectricBikes.css";

const ebikes = [
  {
    name: "Yamaha Neo's",
    images: ["/assets/Yamaha Neo's_01.avif","/assets/Yamaha Neo's_02.jpg","/assets/Yamaha Neo's_03.jpg","/assets/Yamaha Neo's_04.avif","/assets/Yamaha Neo's_03.jpg"],
    price: 220000,
    desc: "Compact electric scooter for city rides."
  },
  {
    name: "Yamaha E01",
    images: ["/assets/Yamaha E01_01.avif","/assets/Yamaha E01_02.avif","/assets/Yamaha E01_03.avif","/assets/Yamaha E01_04.jpg","/assets/Yamaha E01_02.avif"],
    price: 350000,
    desc: "Premium electric scooter concept."
  },
  {
    name: "Yamaha Booster Easy",
    images: ["/assets/Yamaha Booster Easy_01.jpg","/assets/Yamaha Booster Easy_02.jpg","/assets/Yamaha Booster Easy_03.jpg","/assets/Yamaha Booster Easy_04.jpg","/assets/Yamaha Booster Easy_02.jpg"],
    price: 240000,
    desc: "Electric moped for fun commutes."
  },
  {
    name: "Yamaha E-Vino",
    images: ["/assets/Yamaha E-Vino_01.avif","/assets/Yamaha E-Vino_02.avif","/assets/Yamaha E-Vino_03.png","/assets/Yamaha E-Vino_04.jpg","/assets/Yamaha E-Vino_02.avif"],
    price: 160000,
    desc: "Retro-styled eco-friendly electric scooter."
  },
  {
    name: "Yamaha TY-E 2.0",
    images: ["/assets/Yamaha TY-E 2.0_01.jpg","Yamaha TY-E 2.0_02.jpg","Yamaha TY-E 2.0_03.jpg","Yamaha TY-E 2.0_04.jpg","Yamaha TY-E 2.0_02.jpg"],
    price: 850000,
    desc: "Electric trial bike with instant torque."
  }
];

const ElectricBikes = () => (
  <div className="bike-grid">
    {ebikes.map((e, i) => <BikeCard key={i} {...e} />)}
  </div>
);

export default ElectricBikes;
