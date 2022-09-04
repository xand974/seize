import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";

type RoundedButtonType = {
  onPress?: () => void;
  children: React.ReactNode;
};
export default function RoundedButton({
  onPress,
  children,
}: RoundedButtonType) {
  return (
    <TouchableOpacity
      style={tw`w-20 h-20 rounded-full overflow-hidden`}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
