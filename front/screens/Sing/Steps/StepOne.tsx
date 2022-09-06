import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainLayout from "components/core/MainLayout";
import SecondLayout from "components/core/SecondLayout";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import StepTitle from "components/UI/StepTitle/StepTitle";
import SimpleCard from "components/UI/Cards/SimpleCard";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { RouteType } from "types/app.types";
import { lyricsCategories } from "mock/data";

export default function StepOne({ navigation }: RouteType) {
  const nextStep = () => {
    // * check valid category
    // * by id or something like this
    navigation.navigate("StepTwoScreen");
  };
  return (
    <SecondLayout style="mt-10">
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <StepTitle purpleText="mood" lightText="Find your"></StepTitle>
        <CtmText type="MontserratMedium" style="mt-3">
          1. Choose a Category
        </CtmText>
        <View style={tw`mt-5`}>
          {lyricsCategories.map((item, id) => (
            <SimpleCard
              key={id}
              onPress={() => nextStep()}
              image={{ uri: COLORFUL_IMG, style: "opacity-60" }}
              text={{ style: "text-center text-sm", content: item.name }}
              size="Small"
            ></SimpleCard>
          ))}
        </View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
