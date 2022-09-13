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
  let iconName = "";
  switch (route.name) {
    case "FeedScreen":
      iconName = focused ? "home" : "home-outline";
      color = focused ? "white" : "#b8b8b8";
      size = 20;
      break;
    case "WriteScreen":
      iconName = focused ? "pencil" : "pencil-outline";
      color = focused ? "white" : "#b8b8b8";
      size = 20;
      break;
    case "ProfileScreen":
      iconName = focused ? "person-sharp" : "person-outline";
      color = focused ? "white" : "#b8b8b8";
      size = 20;
      break;
    case "SearchScreen":
      iconName = focused ? "search" : "search-outline";
      color = focused ? "white" : "#b8b8b8";
      size = 20;
      break;
  }
  return (
    <SimpleIcon type="ionicon" name={iconName} size={size} color={color} />
  );
};

const styles = StyleSheet.create({});
