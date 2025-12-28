import React from "react";
import BikeCard from "../components/BikeCard";
import "./MotorBikes.css";

const bikes = [
  {
    name: "Yamaha R15 V4",
    images: ["/assets/R15-1.avif","/assets/R15-2.jpg","/assets/R15-3.jpg","/assets/R15-4.jpg","/assets/R15-6.jpg"],
    price: 185000,
    desc: "155cc liquid-cooled engine, race-inspired design."
  },
  {
    name: "Yamaha MT-15 V2",
    images: ["/assets/MT15-1.avif","/assets/MT152.avif","/assets/MT15-3.avif","/assets/Mt154.avif","/assets/MT155.avif"],
    price: 168000,
    desc: "Streetfighter styling with agile handling."
  },
  {
    name: "Yamaha FZ-X",
    images: ["/assets/yamafzx01.avif","/assets/yamafzx02.webp","/assets/yamafzx03.avif","/assets/yamafzx04.avif","/assets/yamafzx05.jpg"],
    price: 135000,
    desc: "Retro look meets modern tech."
  },
  {
    name: "Yamaha FZ-S FI",
    images: ["/assets/yamahafZ01.avif","/assets/yamahafZ02.avif","/assets/yamahafZ03.avif","/assets/yamahafZ04.avif","/assets/yamahafZ02.avif"],
    price: 132000,
    desc: "Blue Core engine with fuel injection."
  },
  {
    name: "Yamaha R3",
    images: ["/assets/yamaR301.avif","/assets/yamaR302.jpg","/assets/yamaR303.avif","/assets/yamaR304.jpg","/assets/yamaR302.jpg"],
    price: 365000,
    desc: "Twin-cylinder performance and control."
  },
  {
    name: "Yamaha MT-03",
    images: ["/assets/Yamaha MT-0301.avif","/assets/Yamaha MT-0302.jpeg","/assets/Yamaha MT-0303.jpg","/assets/Yamaha MT-0304.jpg","/assets/Yamaha MT-0305.jpg"],
    price: 425000,
    desc: "Powerful naked twin-cylinder bike."
  },
  {
    name: "Yamaha FZ 25",
    images: ["/assets/Yamaha FZ 2501.jpg","/assets/Yamaha FZ 2502.png","/assets/Yamaha FZ 2503.jpg","/assets/Yamaha FZ 2503.jpg","/assets/Yamaha FZ 2504.jpg"],
    price: 155000,
    desc: "Strong mid-range performance bike."
  },
  {
    name: "Yamaha R7",
    images: ["/assets/yamaha R7_01.jpg","/assets/yamaha R7_02.jpg","/assets/yamaha R7_03.jpg","/assets/yamaha R7_04.jpg","/assets/yamaha R7_02.webp"],
    price: 900000,
    desc: "Superb handling and speed machine."
  },
  {
    name: "Yamaha FZ V3",
    images: ["/assets/Yamaha FZ V301.avif","/assets/Yamaha FZ V302.jpg","/assets/Yamaha FZ V303.avif","/assets/Yamaha FZ V304.jpg","/assets/Yamaha FZ V302.jpg"],
    price: 120000,
    desc: "Muscular street presence with efficiency."
  },
  {
    name: "Yamaha MT-10",
    images: ["/assets/Yamaha_MT-10_01.jpg","/assets/Yamaha_MT-10_02.png","/assets/Yamaha_MT-10_03.jpeg","/assets/Yamaha_MT-10_04.jpg","/assets/Yamaha_MT-10_02.png"],
    price: 1600000,
    desc: "Hyper naked flagship performance."
  }
];

const MotorBikes = () => (
  <div className="bike-grid">
    {bikes.map((b, i) => <BikeCard key={i} {...b} />)}
  </div>
);

export default MotorBikes;
