import React from "react";

import SpaSlider from "../components/SpaSlider";
import ParadiseCenter from "../components/ParadiseCenter";
import ServicesSection from "../components/Services";
import AppointmentSection from "../components/Appointment";
import BookNow from "../utils/BookBtn";
import Whtsappbtn from "../utils/Wabtn";

const Home = () => {
  return (
    <>
      
      <SpaSlider/>
      <ParadiseCenter/>
      <ServicesSection/>
      <AppointmentSection/>
      <BookNow/>
      <Whtsappbtn/>
    </>
  );
};

export default Home;
