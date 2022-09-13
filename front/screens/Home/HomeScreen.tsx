import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Profile/ProfileScreen";
import SearchScreen from "../Search/SearchScreen";
import FeedScreen from "../Feed/FeedScreen";
import { RouteType } from "../../types/app.types";
import WriteScreen from "../Write/WriteScreen";
import CtaScreen from "../CTA/CtaScreen";
import { HomeIcons } from "./HomeIcons";

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          return <HomeIcons route={route} {...props} />;
        },
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="WriteScreen" component={WriteScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
