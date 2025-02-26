import React, { useState } from "react";
import Modal from "./modal";
import BookingForm from "./Bookingform";


const BookNow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Book Now Button */}
      <button
        onClick={toggleModal}
        className="fixed top-[40%] right-[-30px] px-4 py-2 bg-yellow-500 text-white rounded-l-lg shadow-md hover:bg-yellow-600 transition z-50 rotate-90 font-semibold"
        style={{
          textOrientation: "mixed",
        }}
      >
        Book Now
      </button>

      {/* Modal */}
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BookingForm closeModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default BookNow;