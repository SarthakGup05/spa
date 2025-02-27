import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-white to-pink-200 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logospa.png" alt="Spa Logo" className="w-32 mb-4" />
          <p className="text-gray-600 text-sm text-center md:text-left">
            Experience the art of relaxation with our professional spa services.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col space-y-3 text-center md:text-left">
          <h3 className="text-lg font-semibold text-pink-600">Contact Us</h3>
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-700">
            <Phone size={18} />
            <a href="tel:+916392240402" className="hover:text-pink-600 transition duration-300">
              063922 40402
            </a>
          </div>
          {/* Uncomment to enable email */}
          {/* <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-700">
            <Mail size={18} />
            <span>info@massagespa.com</span>
          </div> */}
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-start text-gray-700">
          <h3 className="text-lg font-semibold text-pink-600">Visit Us</h3>
          <div className="flex items-center space-x-2">
            <MapPin size={18} />
            <span>B2/16, 1st floor, Vineet Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} D Thai Spa. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
