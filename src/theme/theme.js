const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export default {
  font: {
    rosario: "'Rosario', sans-serif",
  },
  color: {
    main: "#42f5b3",
    mainLight: "#75ffcc",
    mainDark: "#009172",
    buyBtn: "#fa652f",
    buyBtnLight: "#ff8b52",
  },

  breakpoints: {
    phone: "only screen and (max-width:320px)",
    largePhone: "only screen and (max-width:500px)",
    greaterThanLargePhone: "(min-width:500px)",
    tablet: "only screen and (max-width:768px)",
  },
  maxWidth: "1250px",
  media: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
};
