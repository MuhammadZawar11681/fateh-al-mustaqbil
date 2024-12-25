// HomePage.jsx
//import React from "react";
import ContactForm from "./contactForm";
import LocationAddress from "./directAddress";
import OperationalSection from "./operational";

const MainContact = () => {
  return (
    <div className="home-page  mt-10">
      {/* Form Section */}
      <ContactForm />

      {/* Location Section */}
      <LocationAddress />

      {/* Operational */}
      <OperationalSection />
    </div>
  );
};

export default MainContact;
