import React, { useState, useEffect } from "react";
import "../assets/styles/Carousel.css";

// Ensure the images are placed correctly in the `public/images` folder
const images = [
  `${process.env.PUBLIC_URL}/images/daily1.jpg`,
  `${process.env.PUBLIC_URL}/images/daily2.jpg`,
  `${process.env.PUBLIC_URL}/images/daily3.jpg`,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Handlers for manual control
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={index === currentIndex ? "active" : ""}
          />
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
