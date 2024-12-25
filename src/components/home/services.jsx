import React from "react";

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
      { en: "International And", ar: "الرحلات الدولية" },
      { en: "Domestic Flight Tickets", ar: "وتذاكر الطيران المحلية" },
    ],
  },
  {
    href: "/services",
    imgSrc: booksPic,
    overlayImgSrc: "./assets/images/home_page/Union 10@2x.png",
    alt: "Hotel Reservation",
    text: [
      { en: "Hotel Reservation", ar: "حجوزات الفنادق" },
      { en: "World Wide", ar: "في جميع أنحاء العالم" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/laptop@2x.png",
    overlayImgSrc: "./assets/images/home_page/world@2x.png",
    alt: "Visa Services",
    text: [
      { en: "Visa", ar: "خدمات التأشيرات" },
      { en: "Services", ar: "خدمات" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/card@2x.png",
    overlayImgSrc: "./assets/images/home_page/Union 3@2x.png",
    alt: "Driving License",
    text: [
      { en: "International", ar: "رخصة القيادة" },
      { en: "Driving License", ar: "الدولية" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/plan@2x.png",
    overlayImgSrc: "./assets/images/home_page/Union 4@2x.png",
    alt: "Airport VIP Services",
    text: [
      { en: "Airport VIP Services", ar: "خدمات كبار الشخصيات بالمطار" },
      { en: "(Meet & Greet)", ar: "(الاستقبال والترحيب)" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/hand@2x.png",
    overlayImgSrc: "./assets/images/home_page/Union 5@2x.png",
    alt: "House Maid Services",
    text: [
      { en: "House Maid", ar: "خدمات الخادمات" },
      { en: "Transportation", ar: "النقل" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/city@2x.png",
    overlayImgSrc: "./assets/images/home_page/Union 6@2x.png",
    alt: "Tourism Packages",
    text: [
      { en: "Tourism", ar: "حزم السياحة" },
      { en: "Packages", ar: "العروض" },
    ],
  },
  {
    href: "/services",
    imgSrc: "./assets/images/home_page/Kaaba@2x.png",
    overlayImgSrc: "./assets/images/home_page/Union 7@2x.png",
    alt: "Umrah & Ziyara Services",
    text: [
      { en: "Umrah & Ziyara", ar: "خدمات العمرة والزيارة" },
      { en: "Services", ar: "خدمات" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="services flex flex-wrap justify-center gap-5 p-5 mt-8 mb-14 font-[gabriola] text-xl text-white">
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
            {service.text.map((line, idx) => (
              <span
                key={idx}
                className="text_styling block leading-[24px]"
                data-en={line.en}
                data-ar={line.ar}
              >
                {line.en}
              </span>
            ))}
          </div>
        </a>
      ))}
    </section>
  );
};

export default ServicesSection;
