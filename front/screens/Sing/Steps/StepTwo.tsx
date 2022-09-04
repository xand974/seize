import CtmText from "components/core/CtmText";
import SecondLayout from "components/core/SecondLayout";
import StepTitle from "components/UI/StepTitle/StepTitle";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export default function StepTwo() {
  return (
    <SecondLayout>
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <StepTitle purpleText="inspiration" lightText="Find your"></StepTitle>
        <CtmText type="MontserratMedium" style="mt-3">
          1. Choose Lyrics
        </CtmText>
        <View style={tw`mt-5`}></View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
