import React from "react";

export default function BlogCard() {
  return (
    <div className="max-w-sm  overflow-hidden bg-white">
      {/* Image Section */}
      <div className="h-48 bg-gradient-to-r rounded-xl from-blue-400 to-indigo-500">
        {/* Replace with actual image */}
        {/* <img src="/your-image.jpg" alt="Blog cover" className="w-full h-full object-cover" /> */}
      </div>

      <div className="p-1 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>Mar 16, 2020</span>
          <span>•</span>
          <span className="text-indigo-600 font-medium">Marketing</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Boost your conversion rate
        </h3>

        <p className="text-gray-600 mb-4">
          Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
          vitae illo. Non aliquid explicabo necessitatibus unde. Sed
          exercitationem placeat consectetur nulla...
        </p>

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
            {/* Replace with actual avatar */}
            <div className="h-full w-full bg-gray-300 flex items-center justify-center text-xs">
              MF
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Michael Foster</p>
            <p className="text-xs text-gray-500">Co-Founder / CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
