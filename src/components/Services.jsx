import React, { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Turkish Bath",
      description:
        "Provides innovative bodywork and geared toward the needs of athletics",
      image: "/services/turkish baath.jpg",
    },
    {
      id: 2,
      title: "Jacuzzi Baths",
      description:
        "Jacuzzi baths are a great way to relax and unwind after a long day",
      image: "/services/jacuzi.jpg",
    },
    {
      id: 3,
      title: "Steam Baths",
      description:
        "Provides innovative bodywork and geared toward the needs of athletics",
      image: "/services/steam bath.jpg",
    },
    {
      id: 4,
      title: "Ashiatsu Massage",
      description:
        "A deep massage where therapists use their feet for firm pressure.",
      image: "/services/massage.jpg",
    },
  ];

  // WhatsApp Redirect Function
  const handleWhatsAppRedirect = (serviceTitle) => {
    const phoneNumber = "6392240402"; 
    const message = encodeURIComponent(`I'm interested in ${serviceTitle}. Can you provide more details?`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-t from-pink-200 to-white" id="services">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800">
              <span className="block text-lg text-gray-500 mb-1">Welcome to</span>
              Our Services
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-400 hover:bg-pink-600"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden rounded-lg m-3 border-4 border-pink-400 group-hover:border-white transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 transition-all duration-300 group-hover:text-white">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-all duration-300 mb-4">
                  {service.description}
                </p>

                <motion.button
                  onClick={() => handleWhatsAppRedirect(service.title)}
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-200 text-white font-medium transition-all duration-300 shadow-md group-hover:from-white group-hover:to-gray-200 group-hover:text-pink-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
