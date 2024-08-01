import React, { useState } from "react";
import "./ImageCarousel.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"; // Use react-icons for the icons

import img0 from "./Photos/Lam0.jpg";
import img1 from "./Photos/Lam1.jpg";
import img2 from "./Photos/Lam2.jpg";
import img3 from "./Photos/Lam3.jpg";
import img4 from "./Photos/Lam4.jpg";
import img5 from "./Photos/Lam5.jpg";
import img6 from "./Photos/Lam6.jpg";
import img7 from "./Photos/Lam7.jpg";

const images = [img0, img1, img2, img3, img4, img5, img6, img7];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const showImage = (i) => {
    let newIndex = index + i;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    setIndex(newIndex);
  };

  return (
    <div>
      <div className="container">
        {images.map((src, i) => (
          <div
            key={i}
            className={`foodImage fade ${i === index ? "active" : ""}`}
            style={{ display: i === index ? "flex" : "none" }}
          >
            <img src={src} alt={`Lambo ${i}`} width="100%" />
          </div>
        ))}
        <FaCaretLeft id="prev" onClick={() => showImage(-1)} />
        <FaCaretRight id="next" onClick={() => showImage(1)} />
      </div>
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
