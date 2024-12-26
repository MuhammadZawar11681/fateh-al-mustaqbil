import React, { Suspense, lazy, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Loader from "./components/loader/loader";
import YellowHeader from "./components/headers/yellowHeader";
import WhiteHeader from "./components/headers/whiteHeader";
import Footer from "./components/footer/footer";

// Import components
const HomePage = lazy(() => import("./components/home/home"));
const ServicesSection = lazy(() => import("./components/services/services"));
import About from "./components/about/about";
import MainForm from "./components/contact/mainContact";

// Import translations
import messagesEn from "./locales/en.json";
import messagesAr from "./locales/ar.json";

const messages = {
  en: messagesEn,
  ar: messagesAr,
};

function App() {
  const [locale, setLocale] = useState("en");
  const [loading, setLoading] = useState(true);

  // Load language preference from localStorage
  useEffect(() => {
    const savedLocale = localStorage.getItem("appLanguage") || "en";
    setLocale(savedLocale);
    document.dir = savedLocale === "ar" ? "rtl" : "ltr";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
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
        {loading ? (
          <Loader loading={loading} />
        ) : (
          <>
            <YellowHeader onLanguageChange={handleLanguageChange} />
            <WhiteHeader />
            <Suspense fallback={<Loader loading={true} />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesSection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<MainForm />} />
              </Routes>
            </Suspense>
            <Footer />
          </>
        )}
      </Router>
    </IntlProvider>
  );
}

export default App;
