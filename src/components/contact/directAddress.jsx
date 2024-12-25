//import React from "react";

import directionPic from "../../assets/images/contact_page/Mention-amico (1)@2x.png";
import phoneicon from "../../assets/images/contact_page/phone@2x.png";
import locationicon from "../../assets/images/contact_page/map-pin@2x.png";
import mailicon from "../../assets/images/contact_page/mail@2x.png";

const DirectContactSection = () => {
  return (
    <section className="relative overflow-hidden flex flex-col-reverse gap-y-12 md:flex-row xl:gap-x-16 2xl:gap-x-60 items-center justify-center py-40">
      <img
        src={directionPic}
        alt="Mention-amico"
        className="w-[380.806px] h-[380.093px]"
      />
      <div
        className="flex flex-col gap-y-7 items-center justify-center  px-8"
        style={{ fontFamily: "Gabriola" }}
      >
        <h1
          className="about-text rtl:text-[22px] text-xl sm:text-[28px] xl:text-[35px] rtl:font-bold ltr:font-[cooper] rtl:font-kufam"
          data-en="You can directly reach to us"
          data-ar="يمكنك الوصول إلينا مباشرة"
        >
          You can directly reach to us
        </h1>
        <div className="flex flex-col justify-center gap-y-7 xl:gap-y-10 ltr:font-gabriola rtl:font-kufam">
          <div className="flex items-center gap-x-6 text-base sm:text-xl md:text-lg xl:text-xl">
            <img src={phoneicon} alt="Phone" className="w-6 h-6" />
            <span className="bg-[#F6DB5A] h-10 w-[2px]"></span>
            <span>011 200 4951</span>
          </div>
          <div className="flex items-center gap-x-6 text-base sm:text-xl md:text-lg xl:text-xl">
            <img src={mailicon} alt="Mail" className="w-6 h-6" />
            <span className="bg-[#F6DB5A] h-10 w-[2px]"></span>
            <span>contact@fatehtour.com</span>
          </div>
          <div className="flex items-center gap-x-6 text-base sm:text-xl md:text-lg xl:text-xl">
            <img src={locationicon} alt="Location" className="w-6 h-6" />
            <span className="bg-[#F6DB5A] h-10 w-[2px]"></span>
            <div className="flex flex-col">
              <span
                className="about-text"
                data-en="Haye Al Mansoura, Riyadh"
                data-ar="حي المنصورة، الرياض"
              >
                Haye Al Mansoura, Riyadh
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Name */}
    </section>
  );
};

export default DirectContactSection;
