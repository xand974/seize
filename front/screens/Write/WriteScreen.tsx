import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WriteStepOne from "screens/Write/Steps/WriteStepOne";
import WriteStepTwo from "screens/Write/Steps/WriteStepTwo";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function WriteScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StepOneScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={WriteStepOne} name="StepOneScreen" />
      <Stack.Screen component={WriteStepTwo} name="StepTwoScreen" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
