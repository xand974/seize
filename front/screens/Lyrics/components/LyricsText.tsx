import { sampleLyrics } from "mock/data";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import CtmText from "../../../components/core/CtmText";

export default function LyricsText() {
  return (
    <View style={tw``}>
      {sampleLyrics.map((item, id) => (
        <View key={item.key} style={tw`mb-5`}>
          <CtmText type="MontserratBold" style="text-xl">
            {item.text}
          </CtmText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
