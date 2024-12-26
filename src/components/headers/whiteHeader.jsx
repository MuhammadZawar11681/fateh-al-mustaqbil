import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/home_page/FATEH LOGO@2x.png";

const WhiteHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // const handleResize = () => {
  //   if (window.innerWidth >= 768) {
  //     setMobileMenuOpen(false);
  //   }
  // };

  
  // React.useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <header className="white-header bg-white shadow-md rounded-b-[10px] sticky top-0 z-50 text-left font-[Cooper] text-[14px] leading-[26px] text-[#646464] h-[65px] md:mx-[49px] rtl:font-[kufam]">
      <div className="container mx-auto max-w-[1200px] flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="Fateh Al Mustaqbil"
            className="w-[145px] h-[42px]"
          />
        </div>

        {/* Hamburger Icon (Only visible on small screens) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#646464] text-[24px] flex items-center justify-center"
        >
          &#9776;
        </button>

        {/* Navigation Links (Visible on medium and larger screens) */}
        <nav className="hidden md:flex flex-col md:flex-row items-start md:items-center md:justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-[48px] text-[16px] sm:text-[14px] text-[#646464] opacity-1 px-[5px]">
          <Link
            to="/"
            className={`relative m-5 rtl:ml-8 ${
              location.pathname === "/" ? "text-[#f65934]" : ""
            }`}
          >
            <FormattedMessage id="nav.home" />
            {/* Active Indicator */}
            {location.pathname === "/" && (
              <span
                className="absolute bottom-[-21px] left-1/2 transform -translate-x-1/2 w-[21px] h-[8px] bg-[#f65934] mb-2"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></span>
            )}
          </Link>
          <Link
            to="/services"
            className={`relative m-5 rtl:ml-8 ${
              location.pathname === "/services" ? "text-[#f65934]" : ""
            }`}
          >
            <FormattedMessage id="nav.services" />
            {location.pathname === "/services" && (
              <span
                className="absolute bottom-[-21px] left-1/2 transform -translate-x-1/2 w-[21px] h-[8px] bg-[#f65934] mb-2"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></span>
            )}
          </Link>
          <Link
            to="/about"
            className={`relative m-5 rtl:ml-8 ${
              location.pathname === "/about" ? "text-[#f65934]" : ""
            }`}
          >
            <FormattedMessage id="nav.about" />
            {location.pathname === "/about" && (
              <span
                className="absolute bottom-[-21px] left-1/2 transform -translate-x-1/2 w-[21px] h-[8px] bg-[#f65934] mb-2"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`relative m-5 rtl:ml-8 ${
              location.pathname === "/contact" ? "text-[#f65934]" : ""
            }`}
          >
            <FormattedMessage id="nav.contact" />
            {location.pathname === "/contact" && (
              <span
                className="absolute bottom-[-21px] left-1/2 transform -translate-x-1/2 w-[21px] h-[8px] bg-[#f65934] mb-2"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></span>
            )}
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } bg-white shadow-md w-full mt-2 px-4 py-4 space-y-4 flex-col items-start text-[14px] sm:text-[14px] text-[#646464]`}
      >
        <Link to="/" className="text-[#f65934] text-[14px] sm:text-[14px]">
          <FormattedMessage id="nav.home" />
        </Link>
        <Link to="/services" className="text-[14px] sm:text-[14px] text-black">
          <FormattedMessage id="nav.services" />
        </Link>
        <Link to="/about" className="text-[14px] sm:text-[14px] text-black">
          <FormattedMessage id="nav.about" />
        </Link>
        <Link to="/contact" className="text-[14px] sm:text-[14px] text-black">
          <FormattedMessage id="nav.contact" />
        </Link>
      </nav>
    </header>
  );
};

export default WhiteHeader;
