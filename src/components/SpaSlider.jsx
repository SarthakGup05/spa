import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Spa video slide data
const slides = [
  {
    id: 1,
    title: "Couple Massage for Ultimate Relaxation",
    description: "Reignite your bond with a soothing couple massage in a peaceful, luxurious spa setting.",
    video: "/massge.mp4",
    poster: "/assets/images/spa/poster-relaxation.jpg",
    alt: "Couple massage video preview"
  },
  // {
  //   id: 2,
  //   title: "Hot Stone Therapy",
  //   description: "Rejuvenate with hot stone therapy, melting away stress and tension effortlessly.",
  //   video: "/assets/videos/hot-stone-therapy.mp4",
  //   poster: "/assets/images/spa/poster-hotstone.jpg",
  //   alt: "Hot stone therapy video preview"
  // }
];

const SpaSlider = () => {
  const sliderRef = useRef(null);

  const NextArrow = ({ onClick }) => (
    <motion.button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <ChevronRight size={24} />
    </motion.button>
  );

  const PrevArrow = ({ onClick }) => (
    <motion.button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <ChevronLeft size={24} />
    </motion.button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    pauseOnHover: false,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative h-[80vh] overflow-hidden bg-black">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[80vh] flex items-center">
            <div className="absolute inset-0 overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src={slide.video}
                poster={slide.poster}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <div className="relative container mx-auto px-6 z-20 text-center text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  className="max-w-lg mx-auto bg-black/50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm md:text-base">{slide.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpaSlider;
