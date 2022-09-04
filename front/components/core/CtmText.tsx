import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import font from "styles/_font";

type CtmTextType = {
  style?: string;
  children: React.ReactNode | string;
  type:
    | "MontserratBold"
    | "Asar"
    | "AlexBrush"
    | "MontserratThin"
    | "MontserratLight"
    | "MontserratExtraLight"
    | "MontserratLight"
    | "MontserratRegular"
    | "MontserratMedium"
    | "MontserratSemiBold"
    | "MontserratBold"
    | "MontserratBlack";
  onPress?: () => void;
};
export default function CtmText({
  style,
  children,
  type,
  onPress,
}: CtmTextType) {
  return (
    <Text
      style={tw.style(styles[type], `text-white ${style ? style : ""}`)}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  MontserratBold: {
    fontFamily: font.MontserratBold.fontFamily,
  },
  Asar: {
    fontFamily: font.Asar.fontFamily,
  },
  AlexBrush: {
    fontFamily: font.AlexBrush.fontFamily,
  },
  MontserratThin: {
    fontFamily: font.MontserratThin.fontFamily,
  },
  MontserratExtraLight: {
    fontFamily: font.MontserratExtraLight.fontFamily,
  },
  MontserratLight: {
    fontFamily: font.MontserratLight.fontFamily,
  },
  MontserratRegular: {
    fontFamily: font.MontserratRegular.fontFamily,
  },
  MontserratMedium: {
    fontFamily: font.MontserratMedium.fontFamily,
  },
  MontserratSemiBold: {
    fontFamily: font.MontserratSemiBold.fontFamily,
  },
  MontserratExtraBold: {
    fontFamily: font.MontserratExtraBold.fontFamily,
  },
  MontserratBlack: {
    fontFamily: font.MontserratBlack.fontFamily,
  },
});
