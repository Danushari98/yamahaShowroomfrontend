import React, { useState } from "react";
import "./BikeCard.css";


const BikeCard = ({ name, images, price, desc }) => {
  const [current, setCurrent] = useState(0);
  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  
  // State to handle image loading errors
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bike-card">
      <div className="image-slider">
        {/* Added onError handler to hide the image if it fails to load */}
        <img 
          src={images[current]} 
          alt={name} 
          className="bike-img" 
          onError={(e) => {
            e.target.style.display = 'none'; // Hide the broken image icon
            setImageError(true); // Set state for fallback content
          }}
          style={{ display: imageError ? 'none' : 'block' }} // Hide image if error occurred
        />
        
        {/* Fallback text if the image fails */}
        {imageError && (
          <div className="image-fallback">
            [Image Not Found]
          </div>
        )}

        <div className="slider-controls">
          <button onClick={prevImage}>‹</button>
          <button onClick={nextImage}>›</button>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">₹{price.toLocaleString()}</span>
    </div>
  );
};

export default BikeCard;