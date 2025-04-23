import React from "react";

export default function HomePage9() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[50vh] w-full bg-white"></div>
      <div className="h-1 w-full relative flex justify-center items-center">
        <div className="absolute w-[90%] max-w-[1200px] h-[60vh] p-4 gap-4 flex justify-center items-center bg-blue-500 rounded-4xl">
          <div className="w-[40%] h-full rounded-3xl p-3 flex flex-col justify-center items-center gap-4 max-md:hidden">
            <h1
              className="text-4xl text-white font-bold relative after:absolute after:bottom-0 after:w-[50%]
            after:h-1 after:bg-white pb-3 after:rounded-2xl text-center flex justify-center items-center "
            >
              Request for Quote
            </h1>
            <p className=" text-white text-center">
              Send us an email and we’ll get in touch shortly, or call us
              between 8:00 and 18:00 from Monday to Friday — we would be
              delighted to speak.
            </p>
          </div>
          <div className="w-[60%] max-md:w-full h-full rounded-3xl bg-gray-100 p-6 flex flex-col space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-200 p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 p-3 rounded-md w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone"
                className="bg-gray-200 p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Country"
                className="bg-gray-200 p-3 rounded-md w-full"
              />
            </div>

            <div className="flex-grow">
              <textarea
                placeholder="Message"
                className="bg-gray-200 p-3 rounded-md w-full h-full resize-none min-h-[150px]"
              />
            </div>

            <div className="mt-2">
              <div className="flex font-bold justify-center items-center text-center text-white bg-blue-500 w-full rounded-xl px-4 py-2">
                SUBMIT NOW
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] w-full bg-black"></div>
    </div>
  );
}
