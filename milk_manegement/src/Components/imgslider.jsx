import React, { useState, useEffect } from "react";
import { slides } from "../data/sliderData"; // ✅ import slides from data file
import "../StyleSection/ImageSlider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === current ? "active" : ""}`}
            key={slide.id}
          >
            {index === current && (
              <>
                <img src={slide.img} alt={slide.caption} className="image" />
                <div className="caption">{slide.caption}</div>
              </>
            )}
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
