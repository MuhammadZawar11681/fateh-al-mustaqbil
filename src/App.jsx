//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import YellowHeader from "./components/headers/yellowHeader";
import WhiteHeader from "./components/headers/whiteHeader";
import HomePage from "./components/home/home";
import About from "./components/about/about";
import ServicesSection from "./components/services/services";
import MainForm from "./components/contact/mainContact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <YellowHeader />
        <WhiteHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<MainForm />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
