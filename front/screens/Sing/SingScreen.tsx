import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SingStepOne from "./Steps/SingStepOne";
import SingStepTwo from "./Steps/SingStepTwo";
import SingStepThree from "./Steps/SingStepThree";

export default function SingScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="SingStepOneScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={SingStepOne} name="SingStepOneScreen" />
      <Stack.Screen component={SingStepTwo} name="SingStepTwoScreen" />
      <Stack.Screen component={SingStepThree} name="SingStepThreeScreen" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
