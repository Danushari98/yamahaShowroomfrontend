import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BikeCard from "./components/BikeCard.jsx";
import Parts from "./components/Parts.jsx";
import Service from "./components/Service.jsx";
import MotoGp from "./components/MotoGp.jsx";
import Events from "./components/Events.jsx";
import Contest from "./components/Contest.jsx";
import BookTestRide from "./components/BookTestRide.jsx";
import Warranty from "./pages/Warranty.jsx";
import FindDealer from "./components/FindDealer.jsx";

import MotorBikes from "./pages/MotorBikes.jsx";
import Scooters from "./pages/Scooters.jsx";
import ElectricBikes from "./pages/ElectricBikes.jsx";

import "./App.css";

// ✅ Add Offers.jsx here
import Offers from "./components/Offers.jsx";

// Images
import y1 from "/assets/yamaR301.avif";
import y2 from "/assets/yamaR302.jpg";
import y3 from "/assets/yamaR303.avif";
import y4 from "/assets/yamaR304.jpg";

function Home() {
  const r3Images = [y1, y2, y3, y4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % r3Images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [r3Images.length]);

  return (
    <div className="home">
      <section className="r3-section">
        <h1 className="r3-title">YAMAHA R3</h1>
        <p className="r3-subtitle">Twin-Cylinder. Pure Performance. Born to Race.</p>

        <div className="r3-image-container">
          <img
            src={r3Images[currentImage]}
            alt={`Yamaha R3 ${currentImage + 1}`}
            className="r3-main-image"
          />
        </div>

        <div className="r3-thumbnails">
          {r3Images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`r3-thumb ${currentImage === index ? "active" : ""}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        <div className="r3-details">
          <BikeCard
            name="Yamaha R3"
            images={r3Images}
            price={380000}
            desc="The Yamaha R3 is powered by a 321cc twin-cylinder engine designed for exceptional performance and agility. With its aerodynamic design and lightweight body, the R3 offers the perfect mix of speed and control for both track and street."
          />
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Product Routes */}
          <Route path="/motorbikes" element={<MotorBikes />} />
          <Route path="/scooters" element={<Scooters />} />
          <Route path="/ebikes" element={<ElectricBikes />} />

          {/* Dealer Routes */}
          <Route path="/finddealer" element={<FindDealer />} />
          <Route path="/booktest" element={<BookTestRide />} />
          <Route path="/warranty" element={<Warranty />} />

          {/* ⭐ NEW — OFFERS ROUTE */}
          <Route path="/offers" element={<Offers />} />

          {/* Other Routes */}
          <Route path="/service" element={<Service />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/motogp" element={<MotoGp />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contest" element={<Contest />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div
                className="main-content"
                style={{ textAlign: "center", color: "white", padding: "100px" }}
              >
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
