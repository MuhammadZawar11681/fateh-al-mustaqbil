//import React from "react";
import { FormattedMessage } from "react-intl";

// import pictures
import bgStylePic1 from "../../assets/images/services_page/Component 32 – 12@2x.png";

const ContactForm = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#f6db5a1a] pt-6 mt-6 pb-20 relative"
      style={{ fontFamily: "Gabriola" }}
    >
      <img
        src={bgStylePic1}
        alt="Background Right"
        className="absolute -right-9 md:right-0 -z-10 top-0 h-10 w-10 md:h-20 md:w-20"
      />
      <span className="absolute right-0 md:right-20 top-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76.151"
          height="77.833"
          viewBox="0 0 76.151 77.833"
        ></svg>
      </span>
      <h1 className="about-text text-4xl xl:text-[55px] ltr:font-[cooper] rtl:font-bold rtl:font-[kufam] mb-8 relative !z-10 ">
        <FormattedMessage id="contactTittle" />
      </h1>
      <section className="flex flex-col gap-y-6 w-full px-4 sm:px-0 sm:w-4/5 lg:w-[750px] relative !z-10">
        <form className="ant-form ant-form-vertical css-xu9wm8 flex flex-col gap-y-3 md:grid md:grid-cols-2 bg-white px-6 py-9 gap-5 ltr:font-gabriola rtl:font-[kufam] rounded-xl">
          {/* Name Input */}
          <div className="ant-form-item !mb-0 css-xu9wm8">
            <div className="ant-row ant-form-item-row css-xu9wm8">
              <div className="ant-col ant-form-item-label css-xu9wm8">
                <label htmlFor="name" title="">
                  <div className="flex items-center gap-x-1">
                    <span className="text-secondary">
                      <span className="about-text ltr:font-gabriola rtl:font-[kufam] rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl">
                        <FormattedMessage id="contactName" />
                      </span>
                    </span>
                  </div>
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-xu9wm8">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder=""
                      id="name"
                      className="ant-input css-xu9wm8 h-10 ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg md:text-lg xl:text-xl p-2 border border-gray-300 rounded-md text-base"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Email Input */}
          <div className="ant-form-item !mb-0 css-xu9wm8">
            <div className="ant-row ant-form-item-row css-xu9wm8">
              <div className="ant-col ant-form-item-label css-xu9wm8">
                <label htmlFor="email" title="">
                  <div className="flex items-center gap-x-1">
                    <span className="text-secondary">
                      <span className="about-text ltr:font-gabriola rtl:font-[kufam] rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl">
                        <FormattedMessage id="contactEmail" />
                      </span>
                    </span>
                  </div>
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-xu9wm8">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder=""
                      id="email"
                      className="ant-input p-2 border border-gray-300 rounded-md css-xu9wm8 h-10 ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Phone Number Input */}
          <div className="ant-form-item !mb-0 css-xu9wm8">
            <div className="ant-row ant-form-item-row css-xu9wm8">
              <div className="ant-col ant-form-item-label css-xu9wm8">
                <label htmlFor="name" title="">
                  <div className="flex items-center gap-x-1">
                    <span className="text-secondary">
                      <span className="about-text ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl">
                        <FormattedMessage id="contactPhone1" />
                      </span>
                    </span>
                  </div>
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-xu9wm8">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder=""
                      id="name"
                      className="ant-input css-xu9wm8 h-10 ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg md:text-lg xl:text-xl p-2 border border-gray-300 rounded-md text-base"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Input */}
          <div className="ant-form-item !mb-0 css-xu9wm8">
            <div className="ant-row ant-form-item-row css-xu9wm8">
              <div className="ant-col ant-form-item-label css-xu9wm8">
                <label htmlFor="name" title="">
                  <div className="flex items-center gap-x-1">
                    <span className="text-secondary">
                      <span className="about-text ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl">
                        <FormattedMessage id="contactService" />
                      </span>
                    </span>
                  </div>
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-xu9wm8">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder=""
                      id="name"
                      className="ant-input css-xu9wm8 h-10 ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg md:text-lg xl:text-xl p-2 border border-gray-300 rounded-md text-base"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Description Input */}
          <div className="ant-form-item !mb-0 css-xu9wm8">
            <div className="ant-row ant-form-item-row css-xu9wm8">
              <div className="ant-col ant-form-item-label css-xu9wm8">
                <label htmlFor="name" title="">
                  <div className="flex items-center gap-x-1">
                    <span className="text-secondary">
                      <span className="about-text ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg text-xl md:text-lg xl:text-xl">
                        <FormattedMessage id="contactDescription" />
                      </span>
                    </span>
                  </div>
                </label>
              </div>
              <div className="ant-col ant-form-item-control css-xu9wm8">
                <div className="ant-form-item-control-input">
                  <div className="ant-form-item-control-input-content">
                    <input
                      placeholder=""
                      id="name"
                      className="ant-input css-xu9wm8 pb-7 h-28 md:w-[700px] ltr:font-gabriola rtl:font-kufam rtl:text-sm rtl:md:text-base rtl:xl:text-lg md:text-lg xl:text-xl p-2 border border-gray-300 rounded-md text-base"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Additional Fields */}
          {/* Add similar structure for other inputs like Phone Number, Services, and Description */}
          {/* Submit Button */}
          <div className="flex items-center justify-end col-span-2 mt-2">
            <button
              type="submit"
              className="about-text ant-btn css-xu9wm8 border border-[#BD9C00] text-[#bd9c00] w-28 rounded-sm opacity-100 ant-btn-default secondary-btn rtl:text-base rtl:md:text-lg rtl:xl:text-xl text-[22px] ltr:font-[gabriola] rtl:font-[kufam]"
            >
              <FormattedMessage id="conatctButton" />
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-y-12 sm:flex-row items-center justify-between ltr:font-[gabriola] rtl:font-[kufam] mt-6">
          <div className="flex flex-col items-center justify-center sm:items-start gap-y-6">
            <h1 className="about-text rtl:text-[27px] rtl:font-bold rtl:xl:text-[28px] text-[29px] xl:text-[32px]">
              <FormattedMessage id="contactTime1" />
            </h1>
            <div className="flex flex-col rtl:text-xl rtl:xl:text-2xl text-[24px] xl:text-[28px] rtl:leading-10 leading-6">
              <span className="about-text">
                <FormattedMessage id="contactTime2" />
              </span>
              <span
                className="about-text"
                data-en="9:00 am - 6:00pm"
                data-ar="9:00 صباحًا - 6:00 مساءً"
              >
                <FormattedMessage id="contactTime3" />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-y-8">
            <div className="flex items-center gap-x-6 rtl:text-base text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
              >
                <g
                  id="Group_1419"
                  data-name="Group 1419"
                  transform="translate(-346 -3996)"
                >
                  <rect
                    id="Rectangle_671"
                    data-name="Rectangle 671"
                    width="39"
                    height="39"
                    rx="4"
                    transform="translate(346 3996)"
                    fill="#fff"
                  ></rect>
                  <g id="mail" transform="translate(353.005 4004.822)">
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M4.408,3H22.583A3.412,3.412,0,0,1,25.99,6.408V20.039a3.412,3.412,0,0,1-3.408,3.408H4.408A3.412,3.412,0,0,1,1,20.039V6.408A3.412,3.412,0,0,1,4.408,3ZM22.583,21.175a1.137,1.137,0,0,0,1.136-1.136V6.408a1.137,1.137,0,0,0-1.136-1.136H4.408A1.137,1.137,0,0,0,3.272,6.408V20.039a1.137,1.137,0,0,0,1.136,1.136Z"
                      transform="translate(-1 -3)"
                      fill="#bd9c00"
                    ></path>
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M11.535,15.223a.857.857,0,0,1-.549-.205L1.409,7.067a1.275,1.275,0,0,1-.235-1.582.867.867,0,0,1,1.334-.279l9.028,7.5,9.028-7.5a.867.867,0,0,1,1.334.279,1.275,1.275,0,0,1-.235,1.582l-9.578,7.952A.857.857,0,0,1,11.535,15.223Z"
                      transform="translate(0.851 -2.728)"
                      fill="#bd9c00"
                    ></path>
                  </g>
                </g>
              </svg>
              <span>
                <FormattedMessage id="contactMail" />
              </span>
            </div>
            <div className="flex items-center gap-x-6 rtl:text-base text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
              >
                <g
                  id="Group_1418"
                  data-name="Group 1418"
                  transform="translate(-720 -3994)"
                >
                  <rect
                    id="Rectangle_725"
                    data-name="Rectangle 725"
                    width="39"
                    height="39"
                    rx="4"
                    transform="translate(720 3994)"
                    fill="#fff"
                  />
                  <g id="map-pin" transform="translate(727.749 3999.099)">
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M14.061,0A12.075,12.075,0,0,1,26.123,12.061a13.784,13.784,0,0,1-1.843,6.589A25.523,25.523,0,0,1,20.365,23.9a36.6,36.6,0,0,1-5.634,4.848,1.206,1.206,0,0,1-1.338,0A36.6,36.6,0,0,1,7.758,23.9a25.523,25.523,0,0,1-3.915-5.246A13.783,13.783,0,0,1,2,12.061,12.075,12.075,0,0,1,14.061,0Zm0,26.258c2.288-1.7,9.649-7.668,9.649-14.2a9.649,9.649,0,1,0-19.3,0C4.412,18.591,11.773,24.561,14.061,26.258Z"
                      transform="translate(-2)"
                      fill="#bd9c00"
                    />
                    <path
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      d="M3.825-1A4.825,4.825,0,1,1-1,3.825,4.83,4.83,0,0,1,3.825-1Zm0,7.237A2.412,2.412,0,1,0,1.412,3.825,2.415,2.415,0,0,0,3.825,6.237Z"
                      transform="translate(8.237 8.237)"
                      fill="#bd9c00"
                    />
                  </g>
                </g>
              </svg>

              <div className="flex flex-col">
                <span className="about-text">
                  <FormattedMessage id="contactLocation" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
