// import React from "react";
// import backgroundImage from "../../assets/images/home_page/background_color@2x.png";
// import arabFamily from "../../assets/images/home_page/Arabfamily@2x.png";

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden w-full h-[280px] bg-fixed z-10 sm:rounded-2xl">
//       {/* Images for LTR and RTL Layouts */}
//       {/* <img
//         dir="object"
//         className="object-cover w-full h-full ltr:hidden"
//         src={backgroundImage}
//         alt="Banner Flipped"
//       /> */}
//       <img
//         src={backgroundImage}
//         alt="Background"
//         className="heroimg hero-bg absolute top-0 left-0 w-full h-full object-cover opacity-[0.8] z-[1]"
//       />
//       <img
//         dir="object"
//         className="object-cover w-full h-full rtl:hidden"
//         src={arabFamily}
//         alt="Banner"
//       />

//       {/* Gradient Overlay with Text */}
//       <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-[#b69e22] to-transparent">
//         <div className="flex items-start flex-col rtl:gap-y-1.5 rtl:md:gap-y-5 justify-center w-full h-full text-white px-6 md:px-20">
//           <h1 className="ltr:font-[Cooper] rtl:font-bold rtl:font-kufam text-[30px] sm:text-[38px] rtl:text-[28px] rtl:sm:text-[32px] rtl:md:text-[44px] md:text-5xl">
//             Your Gateway to
//           </h1>
//           <h1 className="ltr:font-[Cooper] rtl:font-bold rtl:font-kufam text-[30px] sm:text-[38px] rtl:text-[28px] rtl:sm:text-[32px] rtl:md:text-[44px] md:text-5xl">
//             World Adventure
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { FormattedMessage } from "react-intl";
import backgroundImage from "../../assets/images/home_page/background_color@2x.png";
import arabFamily from "../../assets/images/home_page/Arabfamily@2x.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full h-[280px] bg-fixed z-10 sm:rounded-2xl">
      <img
        src={backgroundImage}
        alt="Background"
        className="heroimg hero-bg absolute top-0 left-0 w-full h-full object-cover opacity-[0.8] z-[1]"
      />
      <img
        dir="object"
        className="object-cover w-full h-full rtl:hidden"
        src={arabFamily}
        alt="Banner"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-[#b69e22] to-transparent">
        <div className="flex items-start flex-col rtl:gap-y-1.5 rtl:md:gap-y-5 justify-center w-full h-full text-white px-6 md:px-20">
          <h1 className="ltr:font-[Cooper] rtl:font-bold rtl:font-kufam text-[30px] sm:text-[38px] rtl:text-[28px] rtl:sm:text-[32px] rtl:md:text-[44px] md:text-5xl">
            <FormattedMessage id="hero.title.part1" />
          </h1>
          <h1 className="ltr:font-[Cooper] rtl:font-bold rtl:font-kufam text-[30px] sm:text-[38px] rtl:text-[28px] rtl:sm:text-[32px] rtl:md:text-[44px] md:text-5xl">
            <FormattedMessage id="hero.title.part2" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
