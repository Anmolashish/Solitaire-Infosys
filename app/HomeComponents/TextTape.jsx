"use client";
import React from "react";

export default function TextTape() {
  return (
    <div className="w-full h-[20vh] max-sm:h-[30vh] bg-[#f7fdff] flex flex-col justify-center items-center overflow-hidden relative">
      {/* Title */}
      <p className="text-sm font-semibold text-gray-500 tracking-wider mb-4 z-10">
        TRUSTED BY 7M+ TOP BRANDS IN THE WORLD
      </p>

      {/* Infinite Scrolling Logo Tape */}
      <div className="w-full flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {Array(2)
            .fill([
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo1",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo2",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo3",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo4",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo5",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo6",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo7",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo8",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo9",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo10",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo11",
              "https://dummyimage.com/120x60/ccc/fff.png&text=Logo12",
            ])
            .flat()
            .map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-12 w-auto mx-8 opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
        </div>
      </div>

      {/* Fading Effect */}
      <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-[#f7fdff] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-[#f7fdff] to-transparent pointer-events-none"></div>
    </div>
  );
}
