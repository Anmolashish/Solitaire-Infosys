import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-full h-[40px] bg-black flex justify-center absolute">
        <div className="flex justify-between items-center w-full max-w-[1200px] h-full p-4">
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <img
                width="17"
                height="17"
                src="https://img.icons8.com/material-outlined/50/FFFFFF/phone.png"
                alt="phone"
              />
              <p className="text-white text-sm font-bold">+91-987-665-6700</p>
            </div>
            <div className="flex items-center gap-1 max-md:hidden">
              <img
                width="17"
                height="17"
                src="https://img.icons8.com/material-rounded/24/FFFFFF/mail.png"
                alt="mail"
              />
              <p className="text-white text-sm font-bold ">
                +info@solitaireinfosystems.com
              </p>
            </div>
          </div>
          <div
            className="text-blue-600 relative flex justify-center text-center font-bold items-center h-[40px] 
                    after:content-[''] after:opacity-0 after:transition-opacity after:duration-300 
                    hover:after:opacity-100 after:absolute after:bottom-0 after:h-[2px] 
                    after:w-full after:bg-white animate-wiggle "
          >
            FRESHER HIRING
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full absolute top-[40px] z-20">
        <div className="flex justify-between items-center h-[90px] pl-[20px] ">
          <div className="flex h-full justify-center items-center">
            <img
              src="/Images/slinfi-logo.png"
              alt="example"
              className=" h-[60%] filter-blue-600"
            />
          </div>
        </div>

        <div className=" w-[50%] min-w-[500px] max-md:hidden">
          <div className="flex justify-between items-center h-[90px] gap-4 text-[clamp(0.75rem,1vw,1rem)]">
            <Link
              href={"/"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              HOME
            </Link>
            <Link
              href={"/about-us"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              CORPORATE
            </Link>
            <Link
              href={"/"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              OUR SERVICES
            </Link>
            <Link
              href={"/"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              BLOG
            </Link>
            <Link
              href={"/"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              CAREER
            </Link>
            <Link
              href={"/contact"}
              className="px-3 py-2 text-gray-700 font-medium hover:text-blue-600 "
            >
              CONTACT US
            </Link>
          </div>
        </div>

        <div className="pr-[20px] max-lg:hidden">
          <button className="bg-blue-700 text-white px-5 py-3 rounded-2xl font-bold">
            Apply Internship
          </button>
        </div>

        <div className="hidden max-md:flex pr-[20px]">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/2563eb/menu--v1.png"
            alt="menu--v1"
          />
        </div>
      </div>
    </>
  );
}
