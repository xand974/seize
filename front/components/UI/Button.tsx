import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

type ButtonType = {
  text: string;
  onPress: any;
  ctmStyle: string;
};
export default function CtmButton({ text, onPress, ctmStyle }: ButtonType) {
  return (
    <LinearGradient
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0.1, y: 0.9 }}
      locations={[0.3, 0.9]}
      colors={["#060FE9", "#615eff"]}
      style={tw`w-full flex-row justify-center  ${ctmStyle} `}
    >
      <TouchableOpacity
        style={tw`flex-row justify-center items-center`}
        onPress={onPress}
      >
        <Text style={tw`text-white text-[15px] shadow-md`}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
