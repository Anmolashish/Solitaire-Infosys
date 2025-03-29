"use client";
import React from "react";
import Image from "next/image";

export default function HomePage4() {
  return (
    <div className="w-full bg-[#f7fdff] py-16 px-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto mt-10 my-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center flex-wrap">
          <div className="text-5xl font-sans font-bold max-md:text-3xl flex flex-col">
            Products We have <span className="text-blue-500">Completed</span>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-gray-600 hover:text-blue-500 transition">
              Know more about our products
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
              View All Works
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw=",
              title: "School Dairy 24",
              description: "AR creation with 3D design to solve problems with.",
            },
            {
              img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?cs=srgb&dl=pexels-fauxels-3183186.jpg&fm=jpg",
              title: "Campus Edge",
              description: "Crafting seamless user experiences for apps.",
            },
            {
              img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?cs=srgb&dl=pexels-fauxels-3183153.jpg&fm=jpg",
              title: "Pingo Advanture",
              description: "Innovative graphic solutions for marketing.",
            },
            {
              img: "https://media.istockphoto.com/id/1330168130/photo/engineer-meeting-for-an-architectural-project-working-with-partner-and-engineering-tools.jpg?s=612x612&w=0&k=20&c=qvVhYP6SIJeOfERacQa87-RjsmRXs_YhfoQ_oMCHs8k=",
              title: "The Twitt",
              description: "Building cutting-edge mobile applications.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300"
            >
              <div className="relative">
                <img
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute w-10 h-10 flex justify-center items-center top-4 left-4 bg-white rounded-full shadow-lg group-hover:scale-110 transition">
                  <span className="text-gray-700 text-xl">➜</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
