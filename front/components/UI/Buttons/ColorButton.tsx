import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

type ButtonType = {
  text: string;
  onPress?: () => void;
  ctmStyle?: string;
  status?: "default" | "dark";
};
export default function ColorButton({
  text,
  onPress,
  ctmStyle,
  status = "default",
}: ButtonType) {
  const getStatus = () => {
    switch (status) {
      default:
      case "default":
        return ["#060FE9", "#615eff"];
      case "dark":
        return ["#313131", "#0c0c0c"];
    }
  };
  return (
    <TouchableOpacity
      style={tw`flex-row justify-center items-center`}
      onPress={onPress}
    >
      <LinearGradient
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0.1, y: 0.9 }}
        locations={[0.3, 0.9]}
        colors={getStatus()}
        style={tw`w-full flex-row justify-center items-center  ${
          ctmStyle ? ctmStyle : ""
        } `}
      >
        <Text style={tw`text-white text-[15px] shadow-md`}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
