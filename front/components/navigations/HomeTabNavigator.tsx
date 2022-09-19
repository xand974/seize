import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcons } from "screens/Home/HomeIcons";
import FeedScreen from "screens/Feed/FeedScreen";
import WriteScreen from "screens/Write/WriteScreen";
import SearchScreen from "screens/Search/SearchScreen";
import MyProfileScreen from "screens/MyProfile/MyProfileScreen";

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }: { route: any }) => ({
    tabBarIcon: (props: any) => {
      return <HomeIcons route={route} {...props} />;
    },
    unmountOnBlur: true,
    tabBarStyle: {
      backgroundColor: "#0a0a0a",
      borderTopColor: "transparent",
    },
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="WriteScreen" component={WriteScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
