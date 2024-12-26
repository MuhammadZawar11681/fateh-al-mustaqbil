// // Import Pictures
// import phoneIcon from "../../assets/images/home_page/phone.png";
// import locationIcon from "../../assets/images/home_page/map-pin@2x.png";

// // Yellow Header Component
// const YellowHeader = () => {
//   return (
//     <header className="yellow-header bg-gradient-to-r from-[#f6db5a] to-[#bd9c00] text-white py-2 text-[15px] leading-[26px] font-[Gabriola]  md:mx-[49px]">
//       <div className="container mx-auto max-w-[1200px]">
//         {/* For Medium and Large Screens */}
//         <div className="hidden md:flex justify-end items-center">
//           {/* Phone Icon and Text */}
//           <span className="flex items-center">
//             <img
//               src={phoneIcon}
//               alt="Phone Icon"
//               className="w-[15px] h-[15px] mr-[14px]"
//             />
//             <span className="phone-text text-[14px]">+966 123 456 897</span>
//           </span>

//           {/* Separator */}
//           <span className="mx-[28px] h-[1px] w-[1px] pb-6">|</span>

//           {/* Location Icon and Text */}
//           <span className="flex items-center">
//             <img
//               src={locationIcon}
//               alt="Location Icon"
//               className="w-[13px] h-[16px]"
//             />
//             <span className="location-text mx-[16px] mr-[46px] text-[14px]">
//               Al noor industrial area, Riyadh
//             </span>
//           </span>

//           {/* Language Selector Dropdown */}
//           <span>
//             <select
//               className="lag-selector bg-[#f65934] rounded-[2px] w-[65px] h-[23px] text-left text-[10px] text-white"
//               id="language-selector"
//             >
//               <option className="bg-white text-black" value="eng">
//                 English
//               </option>
//               <option className="bg-white text-black" value="arb">
//                 عربی
//               </option>
//             </select>
//           </span>
//         </div>

// {/* For Small Screens */}
// <div className="flex md:hidden flex-wrap justify-between items-center gap-2">
//   {/* Phone Icon and Text */}
//   <span className="flex items-center text-[14px] sm:text-[12px]">
//     <img
//       src={phoneIcon}
//       alt="Phone Icon"
//       className="w-[15px] h-[15px] mr-[8px]"
//     />
//     <span className="phone-text">+966 123 456 897</span>
//   </span>

//   {/* Separator (hidden on small screens) */}
//   <span className="hidden sm:inline-block mx-[8px] w-px bg-white opacity-100"></span>

//   {/* Location Icon and Text */}
//   <span className="flex items-center text-[14px] sm:text-[12px]">
//     <img
//       src={locationIcon}
//       alt="Location Icon"
//       className="w-[13px] h-[16px]"
//     />
//     <span className="location-text mx-[8px]">
//       Al noor industrial area, Riyadh
//     </span>
//   </span>

//   {/* Language Selector Dropdown */}
//   <span>
//     <select
//       className="lag-selector bg-[#f65934] rounded-[2px] w-[65px] h-[23px] text-left text-[10px] sm:text-[9px] text-white"
//       id="language-selector"
//     >
//       <option className="bg-white text-black" value="eng">
//         English
//       </option>
//       <option className="bg-white text-black" value="arb">
//         عربی
//       </option>
//     </select>
//   </span>
// </div>
//       </div>
//     </header>
//   );
// };

// export default YellowHeader;

//import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import phoneIcon from "../../assets/images/home_page/phone.png";
import locationIcon from "../../assets/images/home_page/map-pin@2x.png";

const YellowHeader = ({ onLanguageChange }) => {
  return (
    <header className="yellow-header bg-gradient-to-r from-[#f6db5a] to-[#bd9c00] text-white py-2 text-[15px] leading-[26px] font-[Gabriola]  md:mx-[49px] rtl:font-[kufam]">
      <div className="container mx-auto max-w-[1200px]">
        <div className="hidden md:flex justify-end items-center md:mx-10">
          {/* Phone */}
          <span className="flex items-center">
            <img
              src={phoneIcon}
              alt="Phone Icon"
              className="w-[15px] h-[15px] mr-[14px] rtl:ml-5"
            />
            <span className="phone-text text-[14px]">
              <FormattedMessage id="header.phone" />
            </span>
          </span>

          {/* Separator */}
          <span className="mx-[28px] h-[1px] w-[1px] pb-6">|</span>

          {/* Location */}
          <span className="flex items-center">
            <img
              src={locationIcon}
              alt="Location Icon"
              className="w-[13px] h-[16px]"
            />
            <span className="location-text mx-[16px] mr-[46px] text-[14px]">
              <FormattedMessage id="header.location" />
            </span>
          </span>

          {/* Language Selector */}
          <span>
            <select
              className="lag-selector bg-[#f65934] rounded-[2px] w-[65px] h-[23px] text-left text-[10px] text-white"
              onChange={(e) => onLanguageChange(e.target.value)}
            >
              <option value="en">
                <FormattedMessage id="header.language.english" />
              </option>
              <option value="ar">
                <FormattedMessage id="header.language.arabic" />
              </option>
            </select>
          </span>
        </div>
        {/* For Small Screens */}
        <div className="flex md:hidden flex-wrap justify-between items-center gap-2">
          {/* Phone Icon and Text */}
          <span className="flex items-center text-[14px] sm:text-[12px]">
            <img
              src={phoneIcon}
              alt="Phone Icon"
              className="w-[15px] h-[15px] mr-[8px]"
            />
            <span className="phone-text">+966 123 456 897</span>
          </span>

          {/* Separator (hidden on small screens) */}
          <span className="hidden sm:inline-block mx-[8px] w-px bg-white opacity-100"></span>

          {/* Location Icon and Text */}
          <span className="flex items-center text-[14px] sm:text-[12px]">
            <img
              src={locationIcon}
              alt="Location Icon"
              className="w-[13px] h-[16px]"
            />
            <span className="location-text mx-[8px]">
              Al noor industrial area, Riyadh
            </span>
          </span>

          {/* Language Selector Dropdown */}
          <span>
            <select
              className="lag-selector bg-[#f65934] rounded-[2px] w-[65px] h-[23px] text-left text-[10px] sm:text-[9px] text-white"
              id="language-selector"
            >
              <option className="bg-white text-black" value="eng">
                English
              </option>
              <option className="bg-white text-black" value="arb">
                عربی
              </option>
            </select>
          </span>
        </div>
      </div>
    </header>
  );
};
YellowHeader.propTypes = {
  onLanguageChange: PropTypes.func.isRequired,
};

export default YellowHeader;
