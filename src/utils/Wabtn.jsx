import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Whtsappbtn = () => {
  const phoneNumber = '6392240402';
  
  return (
    <div className="fixed bottom-24 right-[10px] flex flex-col space-y-4 z-50">
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition transform hover:scale-110 shadow-lg flex items-center"
        title="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition transform hover:scale-110 shadow-lg flex items-center"
        title="Call"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
};

export default Whtsappbtn;
