import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CtmText from "../../core/CtmText";
import tw from "twrnc";

type BadgeType = {
  content: string;
  style?: string;
  textStyle?: string;
  state: "Default" | "Active";
};
export default function Badge({ content, style, state, textStyle }: BadgeType) {
  return (
    <View
      style={tw`px-2 py-1 ${
        state === "Active" ? "bg-[#7D7AFF]" : "bg-[#383838]"
      } rounded-xl ${style ?? ""}`}
    >
      <CtmText
        type="MontserratExtraLight"
        style={`text-[12px] ${textStyle ?? ""}`}
      >
        {content}
      </CtmText>
    </View>
  );
}

const styles = StyleSheet.create({});
