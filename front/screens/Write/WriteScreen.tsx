import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StepOne from "screens/Write/Steps/StepOne";
import StepTwo from "screens/Write/Steps/StepTwo";
import { useLayoutEffect } from "react";
import { RouteType } from "../../types/app.types";

export default function WriteScreen({ navigation }: RouteType) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});