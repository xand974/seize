import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextStyle,
} from "react-native";
import { Icon, IconType } from "react-native-elements/dist/icons/Icon";
import tw from "twrnc";

export type CtmIconHost =
  | "material"
  | "material-community"
  | "simple-line-icon"
  | "zocial"
  | "font-awesome"
  | "octicon"
  | "ionicon"
  | "foundation"
  | "evilicon"
  | "entypo"
  | "antdesign"
  | "font-awesome-5"
  | "ant-design";

type CtmIconType = {
  name: string;
  style?: string;
  size?: number;
  color?: string;
  onPress?: () => void;
  type: CtmIconHost;
  parentStyle?: string;
};
export default function CtmIcon({
  name,
  style,
  onPress,
  size,
  color,
  type,
  parentStyle,
}: CtmIconType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw` h-10 w-10 items-center justify-center rounded-full bg-[#212121] shadow-lg mr-3 ${
        parentStyle ?? ""
      }`}
    >
      <Icon
        type={type}
        name={name}
        size={size ?? 20}
        color={color ?? "#d1d1d1"}
        style={tw.style(styles.icon, `${style ? style : ""}`)}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
