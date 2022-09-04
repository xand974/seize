import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import CtmText from "../core/CtmText";
import tw from "twrnc";

type CardType = {
  onPress?: () => void;
  image?: {
    uri: string;
  };
  text: {
    style: string;
    content: string;
  };
  size: "Large" | "Small";
};
export default function Card({ onPress, image, text, size }: CardType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw.style(styles[size], `rounded-md mx-[2.5%]`)}
    >
      {image ? (
        <Image
          source={{ uri: image.uri }}
          resizeMode="cover"
          blurRadius={10}
          borderRadius={10}
          style={tw`h-full w-full absolute left-0 top-0`}
        />
      ) : (
        <></>
      )}
      <CtmText type="MontserratSemiBold" style={`${text.style ?? ""}`}>
        {text.content}
      </CtmText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Large: {
    width: "45%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  Small: {},
});
