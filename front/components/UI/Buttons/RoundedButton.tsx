import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";

interface RoundedButtonProp {
  onPress?: () => void;
  children: React.ReactNode;
}
export default function RoundedButton({
  onPress,
  children,
}: RoundedButtonProp) {
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
