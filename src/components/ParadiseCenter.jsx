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
  // Function to handle modal open/close
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // Animation on component mount
  useEffect(() => {
    setIsVisible(true);

    // Animate stats counting up
    const duration = 2000; // 2 seconds for the animation
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
      color: "pink",
    },
    {
      id: 2,
      icon: <UserCheck size={24} className="text-blue-500" />,
      title: "Authentic Thai Massage Therapy",
      description:
        "Experience deep relaxation with expert Thai massage techniques that relieve tension and restore balance.",
      color: "blue",
    },
    {
      id: 3,
      icon: <Smile size={24} className="text-green-500" />,
      title: "Aromatherapy Oil Massage",
      description:
        "Indulge in a soothing oil massage infused with essential oils for a calming, stress-free escape.",
      color: "green",
    },
  ];
  

  const handleFeatureHover = (id) => {
    setActiveFeature(id);
  };
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section
      className="bg-pink-50 py-12 overflow-hidden"
      id="hb-paradisecenter"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div
          className={`mb-12 text-center max-w-3xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-8">
            Welcome to <span className="text-pink-500">D Thai Spa</span>
          </h2>
          <p className="text-xl text-gray-600">
            Indulge yourself in a world of beauty and relaxation where you'll
            emerge feeling like a goddess.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <div
            className={`w-full lg:w-1/2 p-4 mb-8 lg:mb-0 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-pink-200 rounded-lg transform group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300 ease-in-out"></div>
              <img
                src="/choose us.jpg"
                alt="Paradise Center Spa Experience"
                className="relative z-10 rounded-lg shadow-xl w-full h-auto object-cover transition-all duration-500 group-hover:shadow-2xl"
              />

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <p className="text-pink-500 font-bold text-lg">
                  {stats.years}+ Years
                </p>
                <p className="text-gray-600 text-sm">of Excellence</p>
              </div>

              {/* <div className="absolute top-4 -left-4 bg-white p-3 rounded-lg shadow-lg z-20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center">
                  <Clock className="text-pink-400 mr-2" size={16} />
                  <p className="text-gray-800 font-medium">{stats.treatments}+ Treatments</p>
                </div>
              </div> */}

              <div className="absolute top-1/3 -right-6 bg-white p-3 rounded-lg shadow-lg z-20 transition-all duration-300 hover:shadow-xl hover:-translate-x-1">
                {/* <div className="flex items-center">
                  <Award className="text-pink-400 mr-2" size={16} />
                  <p className="text-gray-800 font-medium">{stats.clients.toLocaleString()}+ Happy Clients</p>
                </div> */}
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 p-4 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Why Choose Our Spa?
            </h3>
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex p-6 bg-white shadow-lg rounded-xl transition-all duration-300 transform ${
                    activeFeature === feature.id
                      ? `scale-105 shadow-xl bg-${feature.color}-50`
                      : "hover:shadow-xl hover:-translate-y-1"
                  }`}
                  onMouseEnter={() => handleFeatureHover(feature.id)}
                  onMouseLeave={() => handleFeatureHover(null)}
                >
                  <div className="shrink-0">
                    <div
                      className={`p-3 bg-${
                        feature.color
                      }-100 rounded-full transition-all duration-300 ${
                        activeFeature === feature.id ? `scale-110` : ""
                      }`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div
                    className={`flex items-center transition-opacity duration-300 ${
                      activeFeature === feature.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <ChevronRight className={`text-${feature.color}-500`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button onClick={openModal} className="group relative bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center">
                  Book Your Session
                  <ChevronRight
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    size={18}
                  />
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-pink-600 transition-all duration-300 group-hover:h-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal with Booking Form */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm />
        </Modal>
      )}
    </section>
  );
};

export default ParadiseCenter;
