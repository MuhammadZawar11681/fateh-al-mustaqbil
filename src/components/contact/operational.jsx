import { FormattedMessage } from "react-intl";

import backgroundPic from "../../assets/images/contact_page/Mask Group 3@2x.png";

const OperationalSection = () => {
  return (
    <section
      className="relative overflow-hidden w-full h-[400px] bg-fixed z-10"
      style={{
        background: `url(${backgroundPic}) no-repeat center center/cover`,
        width: "100%",
      }}
    >
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-[#F6DB5A]/20"></div>
      <div className="absolute w-full bg-[rgba(184,134,11,0.6)]/80 bottom-0 py-12">
        <div className="flex items-center flex-col justify-center w-full h-full text-white md:px-20 rtl:gap-y-2">
          <h1 className="about-text font-[gabriola] text-white opacity-1 ltr:font-[gabriola] rtl:font-[kufam] rtl:text-2xl rtl:md:text-3xl text-3xl text-center">
            <FormattedMessage id="contactCurrentLocation" />
          </h1>
          <h1 className="about-text font-[cooper] ltr:font-[cooper] rtl:font-bold rtl:font-[kufam] rtl:text-3xl rtl:md:text-5xl text-5xl text-center">
            <FormattedMessage id="contactCountry" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default OperationalSection;
