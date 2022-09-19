import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";
import { CtmIconHost } from "components/Icons/CtmIcon";

interface SimpleIconProp {
  type: CtmIconHost;
  name: string;
  size?: number;
  color?: string;
  style?: string;
}
export default function SimpleIcon({
  type,
  name,
  size,
  color,
  style,
}: SimpleIconProp) {
  return (
    <Icon
      type={type}
      name={name}
      size={size ?? 20}
      color={color ?? "#d1d1d1"}
      style={tw.style(`${style ? style : ""}`)}
    />
  );
}

const styles = StyleSheet.create({});
