import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export default function Spectrum() {
  return (
    <View
      style={tw`absolute bottom-40 h-30 w-full z-2 left-0 items-center justify-center`}
    >
      <View
        style={tw`w-10/12 mx-auto bg-red-200 items-center h-8/12 justify-center`}
      >
        <Text>Spectrum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
