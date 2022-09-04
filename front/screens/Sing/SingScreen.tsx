import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";

export default function SingScreen() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StepOne"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={StepOne} name="StepOneScreen" />
      <Stack.Screen component={StepTwo} name="StepTwoScreen" />
      <Stack.Screen component={StepThree} name="StepThreeScreen" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
