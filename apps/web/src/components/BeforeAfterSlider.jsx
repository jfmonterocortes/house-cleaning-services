import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Avant", afterLabel = "Après" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl shadow-xl select-none group">
      {/* Before Image (Base) */}
      <img
        src={beforeImage}
        alt={beforeLabel}
        loading="lazy"
        width="900"
        height="506"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* After Image (Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          loading="lazy"
          width="900"
          height="506"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {afterLabel}
      </div>
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {beforeLabel}
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center text-primary hover:scale-110 transition-transform duration-200">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>

      {/* Invisible Range Input for Interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(e.target.value)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Comparaison avant et après"
      />
    </div>
  );
};

export default BeforeAfterSlider;