import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import StepOne from "screens/Write/Steps/StepOne";
import StepTwo from "screens/Write/Steps/StepTwo";
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
