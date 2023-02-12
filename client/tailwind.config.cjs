/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "model3-bg":
          "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto')",
        "modelY-bg":
          "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&amp;format=auto')",
        "modelS-bg":
          "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/e57227be-7840-4ea7-b46a-11ab25e76039/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD?quality=auto-medium&amp;format=auto')",
        "modelX-bg":
          "url('https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&amp;format=auto')",
      },
    },
  },
  plugins: [],
};
