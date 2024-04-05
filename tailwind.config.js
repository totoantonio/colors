module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Safelisting classes for heart colors
    "bg-red-300",
    "bg-red-400",
    "bg-red-500",
    "bg-red-600",
    "bg-red-700",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
    extend: {},
  },
};
