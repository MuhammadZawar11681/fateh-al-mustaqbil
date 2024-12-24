//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import components
import YellowHeader from "./components/headers/yellowHeader";
import WhiteHeader from "./components/headers/whiteHeader";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

const Home = () => <div>Home Page</div>;
const Services = () => <div>Services Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <>
      <Router>
        <YellowHeader />
        <WhiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
