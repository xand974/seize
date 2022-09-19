import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleIcon from "components/Icons/SimpleIcon";

export const HomeIcons = ({
  route,
  focused,
  color,
  size,
}: {
  route: any;
  focused: boolean;
  color: string;
  size: number;
}) => {
  const iconOptionsMap = new Map<string, string>([
    ["FeedScreen", focused ? "home" : "home-outline"],
    ["WriteScreen", focused ? "pencil" : "pencil-outline"],
    ["MyProfileScreen", focused ? "person-sharp" : "person-outline"],
    ["SearchScreen", focused ? "search" : "search-outline"],
  ]);
  const routeName = route.name as string;
  const iconName = iconOptionsMap.get(routeName) as string;
  color = focused ? "white" : "#b8b8b8";
  size = 20;

  return (
    <SimpleIcon type="ionicon" name={iconName} size={size} color={color} />
  );
};

const styles = StyleSheet.create({});
