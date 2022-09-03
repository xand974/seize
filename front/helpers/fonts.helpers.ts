export const fonts = {
  Asar: require("../assets/fonts/asar/AsarRegular400.ttf"),
  AlexBrush: require("../assets/fonts/alex-brush/AlexBrush-Regular.ttf"),

  MontserratThin: require("../assets/fonts/montserrat/Montserrat-Thin.otf"),
  MontserratExtraLight: require("../assets/fonts/montserrat/Montserrat-ExtraLight.otf"),
  MontserratLight: require("../assets/fonts/montserrat/Montserrat-Light.otf"),
  MontserratRegular: require("../assets/fonts/montserrat/Montserrat-Regular.otf"),
  MontserratMedium: require("../assets/fonts/montserrat/Montserrat-Medium.otf"),
  MontserratBold: require("../assets/fonts/montserrat/Montserrat-Bold.otf"),
  MontserratSemiBold: require("../assets/fonts/montserrat/Montserrat-SemiBold.otf"),
  MontserratExtraBold: require("../assets/fonts/montserrat/Montserrat-ExtraBold.otf"),
  MontserratBlack: require("../assets/fonts/montserrat/Montserrat-Black.otf"),
};

export const mappedFonts = (): {
  [key: string]: {
    fontFamily: string;
  };
} => {
  let obj = {} as { [key: string]: { fontFamily: string } };

  for (const key of Object.keys(fonts)) {
    if (!(key in obj)) {
      obj[key] = {
        fontFamily: key,
      };
    }
  }
  return obj;
};
