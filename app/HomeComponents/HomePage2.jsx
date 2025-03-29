"use client";
import React, { useRef, useState } from "react";

export default function HomePage2() {
  const data = [
    {
      id: 1,
      image:
        "https://demos.codezeel.com/wordpress/WP02/WP032/default/wp-content/uploads/2024/09/02.jpg",
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      image:
        "https://demos.codezeel.com/wordpress/WP02/WP032/default/wp-content/uploads/2024/09/03.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    {
      id: 3,
      image:
        "https://demos.codezeel.com/wordpress/WP02/WP032/default/wp-content/uploads/2024/09/04.jpg",
      title: "Title 3",
      description: "Description 3",
    },
    {
      id: 4,
      image:
        "https://demos.codezeel.com/wordpress/WP02/WP032/default/wp-content/uploads/2024/09/05.jpg",
      title: "Title 4",
      description: "Description 4",
    },
  ];

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);

    // Prevent text selection
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll sensitivity

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Restore text selection
    document.body.style.userSelect = "auto";
  };

  const handleClick = (value) => {
    alert(value);
  };

  return (
    <div className="min-h-screen h-fit py-5 w-full bg-amber-50 flex flex-col items-center justify-center gap-10">
      <div className="flex max-md:flex-col justify-between items-center w-[90%] max-w-[1200px] gap-3">
        <div className="font-bold font-sans text-5xl w-[40%] min-w-[200px] max-md:w-full max-md:text-4xl max-md:text-center">
          We are serving in{" "}
          <span className="text-blue-500 ">various countries</span>
        </div>
        <div className="text-sm font-light text-right w-[35%] max-md:w-full max-md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste
          debitis aliquam est nostrum odio possimus, laborum, nulla deleniti
          optio ea.
        </div>
      </div>

      {/* Draggable Section */}
      <div
        ref={scrollRef}
        className="h-[400px] max-md:h-fit w-[95%] max-w-[1200px] flex items-center gap-5 overflow-hidden cursor-grab active:cursor-grabbing select-none" // Prevent text selection
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {data.map((e) => (
          <div
            className="image min-w-[700px] max-md:min-w-[300px] h-[90%] max-md:h-[200px] relative"
            key={e.id}
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              className="absolute max-md:w-10 max-md:h-10 w-15 h-15 rounded-full bg-white top-5 right-5 flex justify-center items-center z-20"
              onClick={() => {
                handleClick(`${e.title} clicked`);
              }}
            >
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/forma-thin-filled-sharp/24/2563eb/long-arrow-right.png"
                alt="long-arrow-right"
              />
            </div>
            <div className="overlay absolute top-0 bg-gradient-to-t from-[#00000075] to-transparent rounded-3xl  w-full h-full z-10 flex flex-col justify-end p-4">
              <div className="text-white text-3xl font-bold">{e.title}</div>
              <div className="text-white text-sm font-light">
                {e.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
