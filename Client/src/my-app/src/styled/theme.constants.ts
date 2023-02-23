const SCREEN_MAX_SIZE = {
  mobileS: "374px",
  mobileL: "767px",
  tablet: "1023px",
  laptop: "1300px",
};

export const DEVICE = {
  mobileS: `(max-width: ${SCREEN_MAX_SIZE.mobileS})`,
  mobileL: `(max-width: ${SCREEN_MAX_SIZE.mobileL})`,
  tablet: `(max-width: ${SCREEN_MAX_SIZE.tablet})`,
  laptop: `(max-width: ${SCREEN_MAX_SIZE.laptop})`,
};

export const INFO_CARD_COLORS = [
  "#f87739",
  "#e25886",
  "#b658e2",
  "#7b58e2",
  "#589be2",
  "#58e2af",
  "#58e25e",
  "#bfe258",
  "#e2b658",
  "#e25858",
  "#e258b7",
];

const COLORS = {
  // new colors
  white: "#ffffff",
  paleMauve: "#f3f2f3",
  pastelPink: "#ddd8db", // use in border color
  purpleyGrey: "#907f88",
  pinkishGrey64: "rgba(219, 202, 194, 0.64)",
  eggplant: "#1f0412",
  eggplant32: "rgba(31, 4, 18, 0.32)",
  gray: "#fbfafb",
  pinkish: "#e25886",
  lightPink: "#fceef2",
  pinkishBg: "#fff6f4",
  goldenYellow: "#fbc929",
  purpleyGreyTwo: "#988c92",
  sunflower: "#ffca0c",
  greenColor: "#58e2af",

  googleWhite: "##e8eaed",
  googleBtn: "#303134",
};

const THEME = {
  color: {
    // new

    backgroundDefaultBtn: COLORS.googleWhite,
    defaultBtn: COLORS.googleBtn,

    placeholderBackground: COLORS.pastelPink,
    imageBorder: COLORS.pastelPink,
    imageSelectedBorder: COLORS.pinkish,
    primary: COLORS.pinkish,
    primaryLight: COLORS.lightPink,
    inputBorder: COLORS.pastelPink,
    inputPlaceholder: COLORS.purpleyGrey,
    fontColor: COLORS.eggplant,
    fontHighlightColor: COLORS.pinkish,
    pinkleBackgrondColor: COLORS.pinkishBg,
    fontColorInverted: COLORS.white,
    separator: COLORS.pastelPink,
    border: COLORS.pastelPink,
    disabledBackground: COLORS.paleMauve,
    menuColor: COLORS.purpleyGrey,
    iconColor: COLORS.purpleyGrey,
    menuActiveColor: COLORS.white,
    fontDisabled: COLORS.pastelPink,

    background: COLORS.white,
    highlightBackground: COLORS.pinkish,
    lightBackground: COLORS.paleMauve,
    lighterBackground: COLORS.purpleyGrey,
    lightBackgroundHover: COLORS.pastelPink,
    shadow: COLORS.pinkishGrey64,
    warning: COLORS.goldenYellow,
    starReview: COLORS.goldenYellow,
    starReviewEmpty: COLORS.purpleyGrey,
    promotionHighlight: COLORS.sunflower,
    greenColorBtn: COLORS.greenColor,
  },
  gradients: {
    lightLoadingPlaceholder:
      "linear-gradient(to right, #d7d7d7 8%, #f7f7f7 18%, #d7d7d7 33%)",
    darkLoadingPlaceholder:
      "linear-gradient(to right, #888 8%, #999 18%, #888 33%)",
  },
  borderRadiuses: {
    round: 8,
    rounder: 16,
    rounderer: 24,
  },
  opacity: {
    hover: 0.8,
    disabled: 0.5,
  },
  easing: {
    easeOut: "cubic-bezier(0.25, 1, 0.5, 1)", // https://easings.net/en#easeOutQuart
    easeInOut: "cubic-bezier(0.37, 0, 0.63, 1)", // https://easings.net/en#easeInOutSine
  },
  sizes: {
    topBarHeight: 70,
    topBarMobileHeight: 62,
  },
  shadow: {
    small: `0 8px 24px 0 ${COLORS.pinkishGrey64}`,
    smallDark: `0 8px 24px 0 ${COLORS.eggplant32}`,
    large: `0 16px 64px 0 ${COLORS.pinkishGrey64}`,
    largeDark: `0 16px 64px 0 ${COLORS.eggplant32}`,
  },
  zIndex: {
    modal: 999,
    popup: 99,
  },
};

export default THEME;
