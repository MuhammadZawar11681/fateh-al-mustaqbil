// //import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import components
// import YellowHeader from "./components/headers/yellowHeader";
// import WhiteHeader from "./components/headers/whiteHeader";
// import HomePage from "./components/home/home";
// import About from "./components/about/about";
// import ServicesSection from "./components/services/services";
// import MainForm from "./components/contact/mainContact";
// import Footer from "./components/footer/footer";

// function App() {
//   return (
//     <>
//       <Router>
//         <YellowHeader />
//         <WhiteHeader />

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/services" element={<ServicesSection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<MainForm />} />
//         </Routes>

//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import YellowHeader from "./components/headers/yellowHeader";
import WhiteHeader from "./components/headers/whiteHeader";
import HomePage from "./components/home/home";
import About from "./components/about/about";
import ServicesSection from "./components/services/services";
import MainForm from "./components/contact/mainContact";
import Footer from "./components/footer/footer";

// Import translations
import messagesEn from "./locales/en.json";
import messagesAr from "./locales/ar.json";

const messages = {
  en: messagesEn,
  ar: messagesAr,
};

function App() {
  const [locale, setLocale] = useState("en");

  // Load language preference from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("appLanguage") || "en";
    setLocale(savedLocale);
    document.dir = savedLocale === "ar" ? "rtl" : "ltr";
  }, []);

  // Handle language change
  const handleLanguageChange = (language) => {
    setLocale(language);
    document.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("appLanguage", language); // Save language to localStorage
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <YellowHeader onLanguageChange={handleLanguageChange} />
        <WhiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<MainForm />} />
        </Routes>
        <Footer />
      </Router>
    </IntlProvider>
  );
}

export default App;
