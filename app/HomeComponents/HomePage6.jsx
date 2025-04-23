import React from "react";

export default function HomePage6() {
  return (
    <div className="w-full flex justify-center items-center h-[30vh] bg-blue-400 mt-10">
      <div className="w-[90%] max-w-[1200px] h-full flex justify-between items-center max-md:flex-col max-md:justify-center gap-4">
        <div className="text-white font-bold text-5xl max-md:text-4xl max-md:text-center">
          Ready to dive in?
          <br /> Start your free trial today.
        </div>
        <div className="">
          <button className="px-6 py-3 text-blue-400 bg-white text-lg font-bold rounded-2xl">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
