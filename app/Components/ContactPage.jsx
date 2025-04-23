import React from "react";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-12 md:pb-20">
      {/* Header Section */}
      <div className="text-center mb-12"></div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            We are the market leaders in IT Development & Training services,
            helping our clients in finding solutions that meet and define
            tomorrow.
            <br /> Tell us what it is and we’ll show you how to get the answer
            as quickly as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-10 bg-gray-50 rounded-2xl p-5">
            <div className=" flex-grow h-[100px] border-l-1 border-gray-300 pl-5 flex flex-col justify-center relative after:content('') after:absolute after:w-[2px] after:bg-blue-500 after:h-[40%] after:top-0 after:left-[-1px]">
              <h4 className="font-bold text-lg">Mohali</h4>
              <p className="text-gray-500 text-xs">
                C-110, Industrial Area, Phase-VII, Mohali, India. Phone:
                +91-987-665-6700 Email: info@slinfy.com
              </p>
            </div>

            <div className=" h-[100px] border-l-1 border-gray-300 pl-5 flex flex-col justify-center relative after:content('') after:absolute after:w-[2px] after:bg-blue-500 after:h-[40%] after:top-0 after:left-[-1px]">
              <h4 className="font-bold text-lg">Patiala</h4>
              <p className="text-gray-500 text-xs">
                SCO 8-9, FF, Factory Area, Near Hotel Flyover, Patiala (Pb)
                147001 Phone: +91-99157-49931
              </p>
            </div>

            <div className=" h-[100px] border-l-1 border-gray-300 pl-5 flex flex-col justify-center relative after:content('') after:absolute after:w-[2px] after:bg-blue-500 after:h-[40%] after:top-0 after:left-[-1px]">
              <h4 className="font-bold text-lg">Canada</h4>
              <p className="text-gray-500 text-xs">
                Unit 97. 23238 TWP 522, Sherwood Park ABT8B1H5, Canada. Phone:
                +1(780)224-2422 Email:savita@solitaireinfosys.com
              </p>
            </div>

            <div className=" h-[100px] border-l-1 border-gray-300 pl-5 flex flex-col justify-center relative after:content('') after:absolute after:w-[2px] after:bg-blue-500 after:h-[40%] after:top-0 after:left-[-1px]">
              <h4 className="font-bold text-lg"> New Zealand</h4>
              <p className="text-gray-500 text-xs">
                7 Oakmont Place, Rototuna Hamilton 3210 Phone: 0211557602
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
