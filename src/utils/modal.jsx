import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Animated Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg p-5 w-full max-w-md relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-3 bg-gray-200 rounded-full p-2 focus:outline-none hover:bg-gray-300 transition z-50"
        >
          <FaTimes className="text-gray-600 w-4 h-4" />
        </button>
        
        {/* Modal Content */}
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
