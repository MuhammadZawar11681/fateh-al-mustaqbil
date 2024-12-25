//import React from "react";
// import pictures
import { FormattedMessage } from "react-intl";

import bgStylePic1 from "../../assets/images/services_page/Component 33 – 12@2x.png";
import bgStylePic2 from "../../assets/images/services_page/Component 32 – 12@2x.png";
import services1 from "../../assets/images/services_page/Rectangle 1116@2x.png";
import services2 from "../../assets/images/services_page/Rectangle 1118-3@2x.png";

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden z-0 flex flex-col items-center gap-y-1 justify-center px-8 font-[gabriola] pt-10 rtl:font-[kufam]">
      <img
        src={bgStylePic1}
        alt="Background Right"
        className="absolute -right-9 md:right-0 -z-10 top-0 h-10 w-10 md:h-20 md:w-20"
      />
      <img
        src={bgStylePic2}
        alt="Background Left"
        className="absolute left-0 top-0 h-10 w-10 md:h-20 md:w-20"
      />
      <h1 className="text-[34px] md:text-[40px] ltr:font-[cooper] rtl:font-bold rtl:font-kufam relative !z-10">
        <FormattedMessage id="servicesTittle" />
      </h1>
      <div className="relative !z-10 flex flex-col rtl:text-lg rtl:lg:text-xl ltr:text-[20px] text-center ltr:lg:text-[26px] ltr:font-[gabriola] rtl:font-kufam text-dark-gray rtl:!leading-8 leading-8">
        <span>
          <FormattedMessage id="servicesDescription1" />
        </span>
        <span>
          <span>
            <FormattedMessage id="servicesDescription2" />
          </span>
        </span>
      </div>

      <div className="flex flex-col gap-y-20 xl:px-32 mb-16 px-8 md:px-0 relative !z-50 mt-10">
        {/* Service 1 */}
        <div className="flex items-start md:items-center flex-col md:flex-row gap-y-6 sm:gap-y-12 md:gap-x-12 xl:gap-x-32">
          <img
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[420px] md:w-[300px] md:h-[420px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] !rounded-2xl object-contain sm:object-cover lg:object-contain"
            src={services1}
            alt="International And Domestic Flight Tickets"
          />
          <div className="flex flex-col gap-y-3 text-mid-night-blue">
            <span className="text-4xl lg:text-5xl rtl:font-bold xl:text-[60px] font-montserrat rtl:font-[kufam] rtl:text-golden-dark/60 text-[#bd9c0080] font-[General]">
              01
            </span>
            <div className="flex flex-col text-2xl lg:text-[30px] font-bold rtl:text-xl rtl:lg:text-[28px] xl:text-[36px] ltr:font-[cooper] rtl:font-kufam rtl:leading-9 lg:gap-y-4">
              <h1>
                <FormattedMessage id="servicesBox1Heading1" />
              </h1>
              <h1>
                <FormattedMessage id="servicesBox1Heading2" />
              </h1>
            </div>
            <p className="ltr:font-[gabriola] rtl:font-kufam text-xl xl:text-[22px] rtl:text-base rtl:sm:text-lg rtl:xl:text-lg leading-5 ltr:lg:!leading-9 rtl:leading-10 rtl:lg:!leading-loose">
              <FormattedMessage id="servicesBoxDescription" />
            </p>
            <button
              type="button"
              className="primary-btn bg-[#daa520] text-white px-5 py-2 text-lg rounded font-gabriola w-[139px] h-[46px] hover:bg-[#b8860b]"
            >
              <FormattedMessage id="servicesBoxButton" />
            </button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex items-start md:items-center flex-col  gap-y-6 sm:gap-y-12 md:gap-x-12 xl:gap-x-32 md:flex-row-reverse">
          <img
            className="w-[300px] h-[300px] sm:w-[500px] sm:h-[420px] md:w-[300px] md:h-[420px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] !rounded-2xl object-contain sm:object-cover lg:object-contain"
            src={services2}
            alt="Hotel Reservation"
          />
          <div className="flex flex-col gap-y-3 text-mid-night-blue ">
            <span className="text-4xl lg:text-5xl rtl:font-bold xl:text-[60px] font-montserrat rtl:font-[kufam] rtl:text-golden-dark/60 text-[#bd9c0080] font-[General]">
              02
            </span>
            <div className="flex flex-col text-2xl lg:text-[30px] font-bold rtl:text-xl rtl:lg:text-[28px] xl:text-[36px] ltr:font-[cooper] rtl:font-kufam rtl:leading-9 lg:gap-y-4">
              <h1>
                <FormattedMessage id="servicesBox2Heading1" />
              </h1>
              <h1>
                <FormattedMessage id="servicesBox2Heading2" />
              </h1>
            </div>
            <p className="ltr:font-[gabriola] rtl:font-kufam text-xl xl:text-[22px] rtl:text-base rtl:sm:text-lg rtl:xl:text-lg leading-5 ltr:lg:!leading-9 rtl:leading-10 rtl:lg:!leading-loose">
              <FormattedMessage id="servicesBoxDescription" />
            </p>
            <button
              type="button"
              className="primary-btn bg-[#daa520] text-white px-5 py-2 text-lg rounded font-gabriola w-[139px] h-[46px] hover:bg-[#b8860b]"
            >
              <FormattedMessage id="servicesBoxButton" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
