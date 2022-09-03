import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/Home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import LoginScreen from "../../screens/Login/LoginScreen";

export default function MainRoutes() {
  const Stack = createStackNavigator();
  const user = false;

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={user ? "HomeScreen" : "RegisterScreen"}
        >
          {user ? (
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          ) : (
            <Stack.Group>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
