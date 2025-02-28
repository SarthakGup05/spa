import React, { useState, useEffect } from "react";
import {
  HeartHandshake,
  UserCheck,
  Smile,
  ChevronRight,
  Award,
  Clock,
} from "lucide-react";
import Modal from "../utils/modal";
import BookingForm from "../utils/Bookingform";

const ParadiseCenter = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ years: 0, clients: 0, treatments: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    setIsVisible(true);

    const duration = 2000;
    const intervalTime = 20;
    const steps = duration / intervalTime;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = Math.min(currentStep / steps, 1);

      setStats({
        years: Math.floor(8 * progress),
        clients: Math.floor(5000 * progress),
        treatments: Math.floor(12 * progress),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      icon: <HeartHandshake size={24} className="text-pink-500" />,
      title: "Best Couple Massage Experience",
      description:
        "Enjoy a rejuvenating couple massage with your partner in a serene and romantic ambiance.",
      bgColor: "bg-pink-50",
    },
    {
      id: 2,
      icon: <UserCheck size={24} className="text-blue-500" />,
      title: "Authentic Thai Massage Therapy",
      description:
        "Experience deep relaxation with expert Thai massage techniques that relieve tension and restore balance.",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      icon: <Smile size={24} className="text-green-500" />,
      title: "Aromatherapy Oil Massage",
      description:
        "Indulge in a soothing oil massage infused with essential oils for a calming, stress-free escape.",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="bg-pink-50 py-12 overflow-hidden" id="hb-paradisecenter">
      <div className="container mx-auto px-4 md:px-12">
        <div
          className={`mb-12 text-center max-w-3xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 pt-8">
            Welcome to <span className="text-pink-500">DThai Spa</span>
          </h1>
          <p className="text-xl text-gray-600">
            Indulge yourself in a world of beauty and relaxation where you'll
            emerge feeling like a goddess.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div
            className={`w-full lg:w-1/2 p-4 mb-8 lg:mb-0 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-200 rounded-lg transform group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300 ease-in-out"></div>
              <img
                src="/choose us.jpg"
                alt="Paradise Center Spa Experience"
                className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover transition-all duration-500 group-hover:shadow-2xl"
              />

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-pink-500 font-bold text-lg">{stats.years}+ Years</p>
                <p className="text-gray-600 text-sm">of Excellence</p>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 p-4 transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose Our Spa?
            </h3>
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex p-4 sm:p-2 bg-white shadow-lg rounded-xl transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 ${
                    activeFeature === feature.id ? feature.bgColor : ""
                  }`}
                  onMouseEnter={() => setActiveFeature(feature.id)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="shrink-0">
                    <div className="p-3 bg-gray-100 rounded-full transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-lg sm:text-base font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={toggleModal}
                className="group relative bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                <span className="relative z-10">Book Your Session</span>
                <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>

              <a
                href="https://wa.me/6392240402"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                WhatsApp
                <ChevronRight className="ml-2" size={18} />
              </a>

              <a
                href="tel:6392240402"
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Call Now
                <ChevronRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm />
        </Modal>
      )}
    </section>
  );
};

export default ParadiseCenter;
