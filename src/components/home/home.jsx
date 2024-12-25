// HomePage.jsx
//import React from "react";
import HeroSection from "./heroSection";
import ServicesSection from "./services";

const HomePage = () => {
  return (
    <div className="home-page md:mx-[49px] mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />
    </div>
  );
};

export default HomePage;
