import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "screens/Home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "screens/Register/RegisterScreen";
import LoginScreen from "screens/Login/LoginScreen";
import GetStarted from "screens/GetStarted/GetStarted";
import SingScreen from "screens/Sing/SingScreen";
import LyricsScreen from "screens/Lyrics/LyricsScreen";

export default function MainRoutes() {
  const Stack = createStackNavigator();
  const user = true;

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
            <Stack.Group>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="SingScreen" component={SingScreen} />
              <Stack.Screen name="LyricsScreen" component={LyricsScreen} />
            </Stack.Group>
          ) : (
            <Stack.Group>
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="GetStartedScreen" component={GetStarted} />
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
