import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SimpleCard from "components/UI/Cards/SimpleCard";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import tw from "twrnc";
import { RouteType } from "types/app.types";

export default function Choices({ navigation }: RouteType) {
  const goTo = (to: string) => {
    navigation.navigate(to);
  };
  return (
    <View style={tw`flex-row h-full`}>
      <SimpleCard
        onPress={() => goTo("SingScreen")}
        size="Large"
        text={{ content: "INTERPRÊTER", style: "text-[17px]" }}
        image={{ uri: COLORFUL_IMG }}
      ></SimpleCard>
      <SimpleCard
        onPress={() => goTo("WriteScreen")}
        size="Large"
        text={{ content: "ÉCRIRE", style: "text-[17px]" }}
        image={{ uri: COLORFUL_IMG }}
      ></SimpleCard>
    </View>
  );
}

const styles = StyleSheet.create({});
