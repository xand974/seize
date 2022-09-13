import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "screens/Home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "screens/Register/RegisterScreen";
import LoginScreen from "screens/Login/LoginScreen";
import GetStarted from "screens/GetStarted/GetStarted";
import SingScreen from "screens/Sing/SingScreen";
import LyricsScreen from "screens/Lyrics/LyricsScreen";
import RecordScreen from "screens/Record/RecordScreen";
import RenderingScreen from "screens/Rendering/RenderingScreen";
import EditorScreen from "screens/Editor/EditorScreen";
import ShareScreen from "screens/Share/ShareScreen";

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
            <Stack.Group>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="SingScreen" component={SingScreen} />
              <Stack.Screen name="LyricsScreen" component={LyricsScreen} />
              <Stack.Screen name="RecordScreen" component={RecordScreen} />
              <Stack.Screen name="EditorScreen" component={EditorScreen} />
              <Stack.Screen name="ShareScreen" component={ShareScreen} />
              <Stack.Screen
                name="RenderingScreen"
                component={RenderingScreen}
              />
            </Stack.Group>
          ) : (
            <Stack.Group
              screenOptions={{
                gestureEnabled: false,
              }}
            >
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
