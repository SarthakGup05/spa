import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../utils/modal";
import BookingForm from "../utils/Bookingform";

const AppointmentSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="hb-appointment" className="hb-appointment bg-pink-50 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <figure className="hb-appointmentimg">
                <img
                  src="/reception.jpg"
                  alt="Luxury Spa Appointment"
                  className="w-full rounded-xl shadow-lg"
                />
              </figure>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="md:w-1/2 mt-8 md:mt-0 md:pl-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="hb-sectionhead mb-6">
                <h2 className="text-3xl font-semibold text-gray-800">
                  <span className="text-pink-600">Book Your</span> Massage Session
                </h2>
              </div>
              <div className="hb-appointmentcontent">
                <h3 className="text-2xl font-medium text-gray-700 mb-4">
                  Relax with Couple Massage, Thai Massage & Oil Massage
                </h3>
                <div className="hb-description mb-6">
                  <p className="text-gray-600">
                    Experience the ultimate relaxation with our expert <span className="font-bold">Couple Massage,</span> <span className="font-bold">Thai Massage,</span> and <span className="font-bold">Aromatherapy Oil Massage.</span> Whether you need deep tissue relief or a calming spa session, we have the perfect treatment for you.
                  </p>
                  <p className="text-gray-600 mt-4">
                    Call us:{" "}
                    <strong className="text-pink-600">063922 40402</strong> or
                    fill out our easy online booking
                    <span className="text-pink-600">
                      {" "} form and let us take care of your wellness journey.
                    </span>
                  </p>
                </div>
                <div className="hb-btnarea">
                  <a
                    onClick={openModal}
                    className="hb-btn bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-700 transition-colors cursor-pointer"
                  >
                    Book an Appointment Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm />
        </Modal>
      )}
    </>
  );
};

export default AppointmentSection;
