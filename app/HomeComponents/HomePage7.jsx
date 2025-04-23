import React from "react";
import BlogCard from "../Components/BlogCard";

export default function HomePage7() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center pt-5">
      <div className="w-[90%] max-w-[1200px] flex flex-col items-center justify-center">
        <div className="flex w-full justify-between items-center flex-wrap max-md:justify-center max-md:text-center gap-4">
          <div className="text-5xl font-sans font-bold max-md:text-4xl flex flex-col">
            Latest News and <span className="text-blue-500">Blogs</span>
          </div>
          <div className="flex gap-4 max-md:flex-col">
            <button className="text-sm font-medium text-gray-600 hover:text-blue-500 transition">
              Explore our latest insights
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
              View All Blogs
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
