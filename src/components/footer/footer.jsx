//import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

// import pictures
import footerLogo from "../../assets/images/home_page/Footer_LOGO@2x.png";

const Footer = () => {
  return (
    <footer className="bg-black flex flex-col gap-8 items-center justify-center pt-20 pb-10 font-[Gabriola] rtl:font-semibold rtl:font-[kufam]">
      <img className="w-52 h-auto" src={footerLogo} alt="Footer Logo Logo" />
      <div className="flex items-center gap-x-12 text-white rtl:text-base rtl:md:text-xl text-xl">
        <Link to="/">
          <FormattedMessage id="nav.home" />
        </Link>
        <Link to="/services">
          <FormattedMessage id="nav.services" />
        </Link>
        <Link to="/about">
          <FormattedMessage id="nav.about" />
        </Link>
        <Link to="/contact">
          <FormattedMessage id="nav.contact" />
        </Link>
      </div>
      <div className="flex items-center gap-x-10">
        <a
          href="https://www.facebook.com/fatehalmustaqbil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.855"
            height="20.729"
            viewBox="0 0 20.855 20.729"
          >
            <path
              d="M20.855,10.5a10.436,10.436,0,0,1-8.8,10.3V13.535h2.424l.461-3.007H12.052V8.577a1.5,1.5,0,0,1,1.694-1.624h1.311V4.393a15.982,15.982,0,0,0-2.328-.2A3.67,3.67,0,0,0,8.8,8.236v2.291H6.162v3.007H8.8V20.8A10.428,10.428,0,1,1,20.855,10.5Z"
              transform="translate(0 -0.073)"
              fill="#f6db5a"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/FatehTours"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.57"
            height="20"
            viewBox="0 0 19.57 20"
          >
            <path
              d="M24.832,8.469,32.117,0H30.391L24.065,7.353,19.012,0H13.185l7.64,11.119L13.185,20h1.726l6.68-7.765L26.928,20h5.827L24.831,8.469Zm-2.365,2.749-.774-1.107L15.534,1.3h2.652l4.971,7.11.774,1.107,6.461,9.242H27.74l-5.273-7.542Z"
              transform="translate(-13.185)"
              fill="#f6db5a"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/thefatehtours/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.29"
            height="20.294"
            viewBox="0 0 20.29 20.294"
          >
            <g transform="translate(-0.449)">
              <path
                d="M20.687,5.966A7.415,7.415,0,0,0,20.216,3.5,5.2,5.2,0,0,0,17.246.535,7.434,7.434,0,0,0,14.784.064C13.7.012,13.353,0,10.6,0S7.5.012,6.415.059A7.419,7.419,0,0,0,3.954.531,4.951,4.951,0,0,0,2.154,1.7,5,5,0,0,0,.984,3.5,7.437,7.437,0,0,0,.513,5.962C.461,7.049.449,7.394.449,10.149s.012,3.1.059,4.182A7.416,7.416,0,0,0,.98,16.793,5.2,5.2,0,0,0,3.95,19.763a7.435,7.435,0,0,0,2.462.472c1.082.048,1.427.059,4.182.059s3.1-.012,4.182-.059a7.413,7.413,0,0,0,2.462-.472,5.191,5.191,0,0,0,2.969-2.969,7.441,7.441,0,0,0,.472-2.462c.048-1.082.059-1.427.059-4.182S20.735,7.049,20.687,5.966ZM18.86,14.252a5.563,5.563,0,0,1-.349,1.883,3.367,3.367,0,0,1-1.927,1.927,5.582,5.582,0,0,1-1.883.349c-1.07.048-1.391.059-4.1.059s-3.033-.012-4.1-.059a5.559,5.559,0,0,1-1.883-.349A3.123,3.123,0,0,1,3.454,17.3,3.155,3.155,0,0,1,2.7,16.139a5.583,5.583,0,0,1-.349-1.883c-.048-1.07-.059-1.392-.059-4.1s.012-3.033.059-4.1A5.559,5.559,0,0,1,2.7,4.175a3.084,3.084,0,0,1,.761-1.166,3.149,3.149,0,0,1,1.165-.757A5.585,5.585,0,0,1,6.507,1.9c1.07-.048,1.392-.059,4.1-.059s3.033.012,4.1.059a5.563,5.563,0,0,1,1.883.349,3.121,3.121,0,0,1,1.165.757,3.155,3.155,0,0,1,.757,1.166,5.584,5.584,0,0,1,.349,1.883c.048,1.07.059,1.391.059,4.1s-.012,3.025-.059,4.1Zm0,0"
                fill="#f6db5a"
              />
              <path
                d="M130.748,90.185a5.8,5.8,0,1,0,5.8,5.8A5.8,5.8,0,0,0,130.748,90.185Zm0,9.559a3.761,3.761,0,1,1,3.761-3.761A3.762,3.762,0,0,1,130.748,99.744Zm7.381-9.788a1.354,1.354,0,1,1-1.354-1.354,1.354,1.354,0,0,1,1.354,1.354Zm0,0"
                transform="translate(-120.343 -85.642)"
                fill="#f6db5a"
              />
            </g>
          </svg>
        </a>
      </div>
      <section className="text-[#979797] rtl:text-sm text-lg">
        <FormattedMessage id="footer.copyRight" />
      </section>
    </footer>
  );
};

export default Footer;
