import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabNavigator from "components/navigations/HomeTabNavigator";

export default function HomeScreen() {
  return <HomeTabNavigator />;
}

const styles = StyleSheet.create({});
