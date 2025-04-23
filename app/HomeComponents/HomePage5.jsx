import React from "react";

export default function HomePage5() {
  return (
    <div className="w-full min-h-screen bg-[#f7fdff] flex justify-center items-center">
      <div className="w-[90%] max-w-[1200px] min-h-[70vh] flex max-md:flex-col gap-8">
        {/* Image Section */}
        <div className="images max-h-[70vh] w-[40%] max-md:w-full flex justify-center items-center rounded-4xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7156104/pexels-photo-7156104.jpeg?cs=srgb&dl=pexels-gustavo-fring-7156104.jpg&fm=jpg"
            alt="Marketing Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="h-[70vh] w-[60%] max-md:w-full flex flex-col justify-around gap-6">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-sans max-lg:text-4xl font-bold text-[#1a1a1a]">
              We believe in{" "}
              <span className="text-blue-500">Empowering Innovations</span>{" "}
              through Technology
            </h1>
            <p className="text-gray-600 text-md w-[80%] max-lg:text-sm leading-relaxed">
              We design bilateral and interactive online experiences for our
              clients with our vast knowledge of the latest industry trends and
              technologies. Our solutions and services are created keeping in
              mind our client’s requirements & expectations and international
              standards as well.
            </p>
            <button className="bg-blue-500 w-fit items-center flex gap-2 text-white pl-2 pr-7 text-xl py-2 rounded-full hover:bg-blue-600 transition duration-300">
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/circled-play.png"
                alt="circled-play"
                className=""
              />
              Learn More
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex relative gap-15 mt-6 before:content[('')] before:absolute before:top-[-20px] before:w-full before:h-[1px] before:bg-gray-400">
            <div className="flex flex-col relative after:content[('')] after:absolute after:right-[-30px] after:h-full after:w-[1px] after:bg-gray-400">
              <span className="text-5xl font-bold text-blue-500">12+</span>
              <span className="text-gray-600">
                Years in Development industry
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-blue-500">300+</span>
              <span className="text-gray-600">
                Expert team professionals in business strategy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
