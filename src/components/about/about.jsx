// import picture
import aboutPicture from "../../assets/images/about_page/Image 3@2x.png";

const About = () => {
  return (
    <section className="bg-[#F6DB5A1A] relative gap-x-10 xl:gap-x-0 lg:mx-16 2xl:mx-32 px-6 md:px-8 xl:px-16 py-20 rounded-2xl my-16">
      {/* Background Decorative SVG */}
      <span className="absolute -top-10 left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="69.934"
          height="81.831"
          viewBox="0 0 69.934 81.831"
        >
          <g
            id="Component_28_16"
            data-name="Component 28 – 16"
            transform="translate(0.68 0.577)"
          >
            <g
              id="Group_894"
              data-name="Group 894"
              transform="translate(-514.09 -278.392)"
              opacity="0.31"
            >
              <path
                id="Path_1022"
                data-name="Path 1022"
                d="M575.269,321.667l-24.985,14.425L525.3,321.667v-28.85l24.985-14.425,24.985,14.425Z"
                transform="translate(7.575 0)"
                fill="#f6db5a"
                stroke="#f6db5a"
                strokeWidth="1"
                opacity="0.29"
              ></path>
              <path
                id="Path_1023"
                data-name="Path 1023"
                d="M564.06,335.254l-24.985,14.425L514.09,335.254V306.4l24.985-14.425L564.06,306.4Z"
                transform="translate(0 9.182)"
                fill="none"
                stroke="#bd9c00"
                strokeWidth="1.359"
              ></path>
            </g>
          </g>
        </svg>
      </span>

      {/* Content */}
      <div className="flex flex-col gap-y-8 md:grid md:grid-cols-2 items-center justify-center md:items-start">
        {/* Text Section */}
        <div className="flex flex-col gap-y-7 ltr:font-gabriola rtl:font-kufam rtl:text-base rtl:sm:text-lg text-xl rtl:md:text-sm md:text-base lg:text-xl rtl:lg:text-[21px] xl:text-2xl">
          <h1
            className="about-text font-[Cooper] text-black font-bold text-[30px] rtl:xl:text-[33px] xl:text-[35px]"
            data-en="About"
            data-ar="عن"
          >
            About
          </h1>
          <p
            className="about-text font-[Gabriola] opacity-100 rtl:leading-10"
            data-en="Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance. With competitive pricing and access to superior consulting services, we have become the favored choice among travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the landscape of travel and tour services not only within the Kingdom of Saudi Arabia but also on a global scale."
            data-ar="فتح المستقبل هي وكالة سفر فريدة من نوعها مصممة لتلبية احتياجات المسافرين في جميع أنحاء العالم، تأسست عام 2023 في الرياض، المملكة العربية السعودية. تكمن خبرتنا في صياغة رحلات استثنائية مصممة خصيصًا لتلبية المتطلبات الفريدة لكل عميل، سواء كانت التذاكر أو حجوزات الفنادق أو المساعدة في الحصول على التأشيرة. بفضل الأسعار التنافسية وإمكانية الوصول إلى الخدمات الاستشارية المتميزة، أصبحنا الخيار المفضل بين المسافرين. يلعب فاتح المستقبل دورًا محوريًا في تشكيل مشهد خدمات السفر والسياحة ليس فقط داخل المملكة العربية السعودية ولكن أيضًا على المستوى العالمي"
          >
            Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to
            cater to the interests of travelers across the globe, founded in
            2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting
            exceptional journeys tailored to each client&apos;s unique
            requirements, whether it be ticketing, hotel bookings, or visa
            assistance. With competitive pricing and access to superior
            consulting services, we have become the favored choice among
            travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the
            landscape of travel and tour services not only within the Kingdom of
            Saudi Arabia but also on a global scale.
          </p>
          <p
            className="about-text font-[Gabriola] opacity-100 rtl:leading-10"
            data-en="Welcome to Fateh Al Mustaqbil, where we advocate exploring the world one adventure at a time. Come, be a part of this remarkable journey, and together, let's craft experiences that transcend time and place."
            data-ar="مرحبًا بكم في فتح المستقبل، حيث ندعو إلى استكشاف العالم بمغامرة واحدة في كل مرة. تعال وكن جزءًا من هذه الرحلة الرائعة، ولنصنع معًا تجارب تتجاوز الزمان والمكان."
          >
            Welcome to Fateh Al Mustaqbil, where we advocate exploring the world
            one adventure at a time. Come, be a part of this remarkable journey,
            and together, let&apos;s craft experiences that transcend time and
            place.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-end">
          <img
            className="md:h-[480px] md:w-[280px] xl:h-[522px] xl:w-[349px] object-contain"
            src={aboutPicture}
            alt="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
