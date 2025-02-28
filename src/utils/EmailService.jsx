import emailjs from "emailjs-com";

// Your EmailJS configuration
const SERVICE_ID = "service_cqm4x2f";
const TEMPLATE_ID = "template_n5n3isl";
const PUBLIC_KEY = "u-ut0UklpILr_HDZn";

// Function to send an email using EmailJS
export const sendBookingEmail = (values, callback) => {
  emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: values.name,
        email: values.email,
        phone: values.phone,
        service: values.service,
      },
      PUBLIC_KEY
    )
    .then((response) => {
      console.log("✅ Booking email sent:", response);
      callback(true); // Success callback
    })
    .catch((error) => {
      console.error("❌ Error sending email:", error);
      callback(false); // Failure callback
    });
};
