import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import tw from "twrnc";

interface RoundedIconProp {
  iconName: string;
}
/**
 *
 * @param iconName: RoundedIconProp
 * @returns JSX.Element
 * @deprecated
 */
export default function RoundedIcon({ iconName }: RoundedIconProp) {
  return (
    <TouchableOpacity
      style={tw`w-[60px] h-[60px] mx-auto bg-red-100 mb-2 rounded-full justify-center items-center`}
    >
      <AntDesignIcon name={iconName} style={tw`text-[2rem]`}></AntDesignIcon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
