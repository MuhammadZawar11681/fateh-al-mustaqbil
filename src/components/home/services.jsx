import React from "react";
import { FormattedMessage } from "react-intl";

// import pictures
import Tickets from "../../assets/images/home_page/aero_plan2x.png";
import ticketLogo from "../../assets/images/home_page/plan_union@2x (1).png";
import booksPic from "../../assets/images/home_page/booknow@2x.png";

const services = [
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Flight Tickets",
    text: [
      <FormattedMessage key="homeServices1T1" id="homeServices1T1" />,
      <FormattedMessage key="homeServices1T2" id="homeServices1T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: booksPic,
    overlayImgSrc: ticketLogo,
    alt: "Hotel Reservation",
    text: [
      <FormattedMessage key="homeServices2T1" id="homeServices2T1" />,
      <FormattedMessage key="homeServices2T2" id="homeServices2T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Visa Services",
    text: [
      <FormattedMessage key="homeServices3T1" id="homeServices3T1" />,
      <FormattedMessage key="homeServices3T2" id="homeServices3T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Driving License",
    text: [
      <FormattedMessage key="homeServices4T1" id="homeServices4T1" />,
      <FormattedMessage key="homeServices4T2" id="homeServices4T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Airport VIP Services",
    text: [
      <FormattedMessage key="homeServices5T1" id="homeServices5T1" />,
      <FormattedMessage key="homeServices5T2" id="homeServices5T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "House Maid Services",
    text: [
      <FormattedMessage key="homeServices6T1" id="homeServices6T1" />,
      <FormattedMessage key="homeServices6T2" id="homeServices6T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Tourism Packages",
    text: [
      <FormattedMessage key="homeServices7T1" id="homeServices7T1" />,
      <FormattedMessage key="homeServices7T2" id="homeServices7T2" />,
    ],
  },
  {
    href: "/services",
    imgSrc: Tickets,
    overlayImgSrc: ticketLogo,
    alt: "Umrah & Ziyara Services",
    text: [
      <FormattedMessage key="homeServices8T1" id="homeServices8T1" />,
      <FormattedMessage key="homeServices8T2" id="homeServices8T2" />,
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services flex flex-wrap justify-center gap-5 p-5 mt-8 mb-14 font-[gabriola] text-xl text-white rtl:font-[kufam]">
      {services.map((service, index) => (
        <a
          key={index}
          href={service.href}
          className="service-box relative w-[247px] h-[120px] rounded-[11px] overflow-hidden group"
        >
          <img
            src={service.imgSrc}
            alt={service.alt}
            className="service-image w-full h-full  transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="overlay absolute  inset-0 bg-gradient-to-b from-[rgba(0,22,36,0.6)] to-[#bd9c00] flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            <img
              src={service.overlayImgSrc}
              alt={service.alt + " overlay"}
              className="w-[48px] h-[48px] mb-2 "
            />
            {service.text.map((line) => (
              <span
                key={line.key}
                className="text_styling block leading-[24px]"
              >
                {line}
              </span>
            ))}
          </div>
        </a>
      ))}
    </section>
  );
};

export default ServicesSection;
