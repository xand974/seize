import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CtmText from "components/core/CtmText";
import tw from "twrnc";
import SimpleIcon from "components/Icons/SimpleIcon";
import { CtmIconHost } from "components/Icons/CtmIcon";

export default function TextIcon({
  iconName,
  iconType,
  text,
}: {
  iconType: CtmIconHost;
  iconName: string;
  text: string;
}) {
  return (
    <View style={tw`flex-row items-center`}>
      <CtmText type="MontserratThin">{text}</CtmText>
      <SimpleIcon name={iconName} type={iconType} />
    </View>
  );
}

const styles = StyleSheet.create({});
