import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "components/UI/Card";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import tw from "twrnc";

export default function Choices() {
  return (
    <View style={tw`flex-row h-full`}>
      <Card
        size="Large"
        text={{ content: "INTERPRÊTER", style: "text-[17px]" }}
        image={{ uri: COLORFUL_IMG }}
      ></Card>
      <Card
        size="Large"
        text={{ content: "ÉCRIRE", style: "text-[17px]" }}
        image={{ uri: COLORFUL_IMG }}
      ></Card>
    </View>
  );
}

const styles = StyleSheet.create({});
