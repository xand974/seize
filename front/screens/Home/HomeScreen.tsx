import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Profile/ProfileScreen";
import SearchScreen from "../Search/SearchScreen";
import FeedScreen from "../Feed/FeedScreen";
import CtmIcon from "components/Icons/CtmIcon";
import { RouteType } from "../../types/app.types";
import WriteScreen from "../Write/WriteScreen";
import CtaScreen from "../CTA/CtaScreen";

export default function HomeScreen({ navigation }: RouteType) {
  const Tab = createBottomTabNavigator();
  const goTo = (to: string) => {
    navigation.navigate(to);
  };

  // TODO refactor tab bar

  return (
    <Tab.Navigator
      initialRouteName="FeedScreen"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="FeedScreen"
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <CtmIcon
              parentStyle="bg-[#D9D9D9] w-10 h-10 "
              type="ionicon"
              name="home-outline"
              size={20}
              color="black"
              onPress={() => goTo("FeedScreen")}
            />
          ),
        }}
        component={FeedScreen}
      />
      <Tab.Screen
        name="CtaScreen"
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <CtmIcon
              parentStyle="bg-[#D9D9D9] w-10 h-10"
              type="entypo"
              name="plus"
              size={20}
              color="black"
              onPress={() => goTo("CtaScreen")}
            />
          ),
        }}
        component={CtaScreen}
      />
      <Tab.Screen
        name="WriteScreen"
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <CtmIcon
              parentStyle="bg-[#7D7AFF] w-13 h-13"
              type="evilicon"
              name="pencil"
              size={30}
              color="white"
              onPress={() => goTo("WriteScreen")}
            />
          ),
        }}
        component={WriteScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <CtmIcon
              parentStyle="bg-[#D9D9D9] w-10 h-10"
              type="ionicon"
              name="person-outline"
              size={20}
              color="black"
              onPress={() => goTo("ProfileScreen")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <CtmIcon
              parentStyle="bg-[#D9D9D9] w-10 h-10"
              type="ionicon"
              name="search-outline"
              size={20}
              color="black"
              onPress={() => goTo("SearchScreen")}
            />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
