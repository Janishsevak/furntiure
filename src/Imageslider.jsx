import { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import React from "react";

export default function ImageSlider({ images, height = "h-screen" }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      {/* IMAGE */}
      <img
        src={images[current]}
        className="w-full h-[98%] md:object-contain transition-all duration-500"
        alt="Slider"
      />

      {/* LEFT ARROW */}
      {current > 0 && (
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2  
                              text-black p-3 
                             hover:bg-black/20 rounded-lg"
        >
          <FaRegArrowAltCircleLeft size={35} />
        </button>
      )}

      {/* RIGHT ARROW */}
      {current < images.length - 1 && (
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                              text-black p-3 
                             hover:bg-black/20 rounded-lg"
        >
          <FaRegArrowAltCircleRight size={35} />
        </button>
      )}
    </div>
  );
}
