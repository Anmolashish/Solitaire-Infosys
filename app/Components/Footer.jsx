import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaEnvelope,
  FaMediumM,
  FaBehance,
  FaInstagram,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 pt-10 pb-6 text-sm">
      <div className="flex flex-wrap justify-between gap-10 border-b border-gray-500 pb-8">
        {/* Company Section */}
        <div className="space-y-4 w-full sm:w-1/2 md:w-[18%]">
          <h2 className="font-bold text-lg border-b border-gray-500 pb-1">
            Company
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Corporate</li>
            <li>Blogs</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
          <div className="pt-4">
            <img
              src="http://solitaireinfosystems.com/wp-content/uploads/2023/08/expertise_custom.png"
              alt="Expertise Badge"
              className="h-30 w-auto"
            />
            <p className="text-center text-gray-300 text-xs mt-1">
              Best Mobile App Development in Irvine <br /> 2023
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-4 w-full sm:w-1/2 md:w-[18%]">
          <h2 className="font-bold text-lg border-b border-gray-500 pb-1">
            Our Services
          </h2>
          <ul className="space-y-2 text-gray-300">
            <li>UX & UI Design</li>
            <li>Mobile Applications</li>
            <li>Web Development</li>
            <li>Enterprise Applications</li>
            <li>Digital Marketing</li>
            <li>Support & Maintenance</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4 w-full md:w-[20%]">
          <div className="bg-[#45596D] p-4 rounded-lg space-y-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +91-987-665-6700
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              +91-987-222-0856
            </p>
          </div>
          <div className="bg-[#45596D] p-4 rounded-lg ">
            <p className="mb-2 text-gray-300">
              To check the authentication of your certificate, Please
            </p>
            <button className="border rounded-full px-4 py-1 text-white hover:bg-white hover:text-black transition">
              Click Here
            </button>
          </div>
        </div>

        {/* Social & Logo Section */}
        <div className="space-y-4 w-full md:w-[25%]">
          <h2 className="font-bold text-lg border-b border-gray-500 pb-1">
            Follow Us
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              FaFacebookF,
              FaTwitter,
              FaPinterestP,
              FaLinkedinIn,
              FaEnvelope,
              FaMediumM,
              FaBehance,
              FaInstagram,
            ].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 flex items-center justify-center bg-gray-500 rounded-full hover:bg-white hover:text-black transition"
              >
                <Icon />
              </div>
            ))}
          </div>
          <div className="pt-4">
            <img
              src="http://solitaireinfosystems.com/wp-content/uploads/2023/07/slinfi-logo.png"
              alt="Solitaire Logo"
              className="h-15"
            />
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex flex-col md:flex-row justify-between text-gray-300 text-xs mt-4 gap-6 pt-6">
        <div className="flex items-start gap-2">
          <FaGlobe className="mt-1" />
          <p>24981 Owens Lake CIR Lake Forest, CA 92630-2522, USA.</p>
        </div>
        <div className="flex items-start gap-2">
          <FaGlobe className="mt-1" />
          <p>
            <strong>Mohali:</strong> C-110, Industrial Area Phase-VII, Mohali,
            India. <br />
            <strong>Patiala:</strong> SCO 8-9, FF, Factory Area, Near Hotel
            Flyover, Patiala (Pb) 147001.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <FaGlobe className="mt-1" />
          <p>Unit 97. 23238 TWP 522, Sherwood Park ABT8B1H5, Canada</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6 pt-4 border-t border-gray-500">
        Copyright © 2025 Solitaire Infosystems Inc. All Rights Reserved.
      </div>
    </footer>
  );
}
