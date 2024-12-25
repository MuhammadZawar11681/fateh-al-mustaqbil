// /** @type {import('tailwindcss').Config} */

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        rtl: { raw: "(dir: rtl)" }, // Define RTL-specific screen
        ltr: { raw: "(dir: ltr)" }, // Define LTR-specific screen
      },
      textAlign: {
        start: "start", // Logical start
        end: "end", // Logical end
      },
    },
  },
  plugins: [],
};
