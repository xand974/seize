import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeIcons } from "screens/Home/HomeIcons";
import FeedScreen from "screens/Feed/FeedScreen";
import WriteScreen from "screens/Write/WriteScreen";
import SearchScreen from "screens/Search/SearchScreen";
import MyProfileScreen from "screens/MyProfile/MyProfileScreen";

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }: { route: any }) =>
    ({
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
    } as BottomTabNavigationOptions);

  const nestedScreenOptions = {
    headerShown: false,
  } as BottomTabNavigationOptions;

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen
        name="WriteScreen"
        options={nestedScreenOptions}
        component={WriteScreen}
      />
      <Tab.Screen
        name="SearchScreen"
        options={nestedScreenOptions}
        component={SearchScreen}
      />
      <Tab.Screen
        options={nestedScreenOptions}
        name="MyProfileScreen"
        component={MyProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
