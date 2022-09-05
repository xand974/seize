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
  size,
}: {
  iconType: CtmIconHost;
  iconName: string;
  text: string;
  size?: number;
}) {
  return (
    <View style={tw`flex-row items-center`}>
      <CtmText type="MontserratThin" style="mr-1">
        {text}
      </CtmText>
      <SimpleIcon size={size} name={iconName} type={iconType} />
    </View>
  );
}

const styles = StyleSheet.create({});
