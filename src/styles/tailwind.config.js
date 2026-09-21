const { execSync } = require("child_process");
const plutoniumGemPath = execSync("bundle show plutonium").toString().trim();
const plutoniumTailwindConfig = require(`${plutoniumGemPath}/tailwind.options.js`);
const tailwindPlugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: plutoniumTailwindConfig.darkMode,
  plugins: [
    // add plugins here
    tailwindPlugin(function ({ addComponents, theme }) {
      const brandStart = theme("colors.brand.start");
      const brandEnd = theme("colors.brand.end");

      addComponents({
        // Buttons
        ".btn": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: theme("spacing.2"),
          borderRadius: theme("borderRadius.lg"),
          fontWeight: theme("fontWeight.medium"),
          transition: "all 150ms ease-in-out",
          cursor: "pointer",
          "&:focus": {
            outline: "none",
            ring: "2px",
            ringColor: theme("colors.primary.500"),
            ringOffset: "2px",
          },
        },
        ".btn-sm": {
          height: "2.25rem",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          fontSize: theme("fontSize.sm")[0],
          lineHeight: theme("fontSize.sm")[1].lineHeight,
        },
        ".btn-md": {
          height: "2.5rem",
          paddingLeft: theme("spacing.5"),
          paddingRight: theme("spacing.5"),
          fontSize: theme("fontSize.sm")[0],
          lineHeight: theme("fontSize.sm")[1].lineHeight,
        },
        ".btn-lg": {
          height: "3rem",
          paddingLeft: theme("spacing.6"),
          paddingRight: theme("spacing.6"),
          fontSize: theme("fontSize.base")[0],
          lineHeight: theme("fontSize.base")[1].lineHeight,
        },
        // Button variants
        ".btn-primary": {
          backgroundImage: `linear-gradient(90deg, ${brandStart} 0%, ${brandEnd} 100%)`,
          color: theme("colors.white"),
        },
        ".btn-primary-blue": {
          backgroundColor: theme("colors.midnight.900"),
          color: theme("colors.white"),
        },
        ".btn-secondary-grey": {
          backgroundColor: theme("colors.coolgray.200"),
          color: theme("colors.coolgray.700"),
        },
        ".btn-white": {
          backgroundColor: theme("colors.white"),
          color: theme("colors.secondary.700"),
          borderWidth: "1px",
          borderColor: theme("colors.secondary.200"),
          "&:hover": {
            backgroundColor: theme("colors.secondary.50"),
            borderColor: theme("colors.secondary.300"),
          },
        },
        ".btn-secondary-gradient": {
          backgroundColor: "transparent",
          color: brandEnd,
          borderWidth: "1px",
          borderColor: brandEnd,
        },
        ".brand-text": {
          backgroundImage: `linear-gradient(90deg, ${brandStart} 0%, ${brandEnd} 100%)`,
          color: brandEnd, // fallback color
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      });
    }),
  ].concat(
    plutoniumTailwindConfig.plugins.map(function (plugin) {
      switch (typeof plugin) {
        case "function":
          return tailwindPlugin(plugin);
        case "string":
          return require(plugin);
        default:
          throw Error(`unsupported plugin: ${plugin}: ${typeof plugin}`);
      }
    })
  ),
  theme: plutoniumTailwindConfig.merge(plutoniumTailwindConfig.theme, {
    // define your custom theme here
    extend: {
      fontFamily: {
        polaris: ["Polaris Trial", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Typography tokens from Figma
        h1: ["36px", { lineHeight: "1.28" }],
        h2: ["28px", { lineHeight: "1.43" }],
        h3: ["24px", { lineHeight: "1.33" }],
        h4: ["20px", { lineHeight: "1.4" }],
        "body-lg": ["16px", { lineHeight: "1.5" }],
        body: ["14px", { lineHeight: "1.29" }],
        "body-sm": ["10px", { lineHeight: "1.4" }],
      },
      colors: {
        // Brand gradient stops
        brand: {
          start: "#F8AD03",
          end: "#E74011",
        },
        // Midnight Blue scale
        midnight: {
          900: "#211C41",
          800: "#2F295C",
          700: "#3D3680",
          600: "#4C4BA0",
          500: "#5A55AA",
          400: "#726DBF",
          300: "#8C88D2",
          200: "#B2AFE4",
          100: "#E9E8F5",
          50: "#F7F6FB",
        },
        // Primary colors -> midnight blue scale
        primary: {
          900: "#211C41",
          800: "#2F295C",
          700: "#3D3680",
          600: "#4C4BA0",
          500: "#5A55AA",
          400: "#726DBF",
          300: "#8C88D2",
          200: "#B2AFE4",
          100: "#E9E8F5",
          50: "#F7F6FB",
        },
        // Orange (warm) scale
        orange: {
          900: "#E74011",
          800: "#F2572F",
          700: "#F5734F",
          600: "#F89072",
          500: "#FBB8A2",
          400: "#FDD0BE",
          300: "#FEE3D6",
          200: "#FFF0E8",
          100: "#FFF8F4",
          50: "#FFFBFA",
        },
        // Gold (amber-like) scale
        gold: {
          900: "#F8AD03",
          800: "#F9B823",
          700: "#FAC43F",
          600: "#FBD05F",
          500: "#FCD978",
          400: "#FDE597",
          300: "#FEF0B5",
          200: "#FFF6CD",
          100: "#FFFBE4",
          50: "#FFFEF8",
        },
        // Yellow scale (based on design)
        yellow: {
          900: "#F59E0B",
          800: "#F6B121",
          700: "#F7C33D",
          600: "#F8D559",
          500: "#F9E775",
          400: "#FAF191",
          300: "#FBFBAD",
          200: "#FCFCC9",
          100: "#FDFDE5",
          50: "#FFFEF8",
        },
        // Cool Gray scale
        coolgray: {
          900: "#2E2E30",
          800: "#444446",
          700: "#5A5B5D",
          600: "#76777A",
          500: "#939497",
          400: "#ADADAF",
          300: "#C8C8CA",
          200: "#E2E2E4",
          100: "#F4F4F6",
          50: "#FAFAFB",
        },
        // Secondary colors -> cool gray scale
        secondary: {
          900: "#2E2E30",
          800: "#444446",
          700: "#5A5B5D",
          600: "#76777A",
          500: "#939497",
          400: "#ADADAF",
          300: "#C8C8CA",
          200: "#E2E2E4",
          100: "#F4F4F6",
          50: "#FAFAFB",
        },
      },
    },
  }),
  content: [
    `${__dirname}/app/**/*.{erb,haml,html,slim,rb}`,
    `${__dirname}/app/javascript/**/*.js`,
    `${__dirname}/packages/**/app/**/*.{erb,haml,html,slim,rb}`,
  ].concat(plutoniumTailwindConfig.content),
};
