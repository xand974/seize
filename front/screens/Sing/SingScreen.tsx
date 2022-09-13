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
      initialRouteName="StepOne"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={SingStepOne} name="StepOneScreen" />
      <Stack.Screen component={SingStepTwo} name="StepTwoScreen" />
      <Stack.Screen component={SingStepThree} name="StepThreeScreen" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
