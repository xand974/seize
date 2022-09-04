import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CtmText from "components/core/CtmText";

export default function StepTitle({
  lightText,
  purpleText,
}: {
  lightText: string;
  purpleText: string;
}) {
  return (
    <>
      <CtmText type="MontserratThin" style="text-center text-2xl">
        {lightText}
      </CtmText>
      <CtmText type="AlexBrush" style="text-center text-[#7D7AFF] text-[40px]">
        {purpleText}
      </CtmText>
    </>
  );
}

const styles = StyleSheet.create({});
