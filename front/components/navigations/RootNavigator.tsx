import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/Home/HomeScreen";
import SingScreen from "screens/Sing/SingScreen";
import LyricsScreen from "screens/Lyrics/LyricsScreen";
import RecordScreen from "screens/Record/RecordScreen";
import EditorScreen from "screens/Editor/EditorScreen";
import ShareScreen from "screens/Share/ShareScreen";
import RenderingScreen from "screens/Rendering/RenderingScreen";
import RegisterScreen from "screens/Register/RegisterScreen";
import LoginScreen from "screens/Login/LoginScreen";
import GetStarted from "screens/GetStarted/GetStarted";
import ProfileScreen from "screens/Profile/ProfileScreen";
import LoadingScreen from "screens/Loading/LoadingScreen";

export default function RootNavigator() {
  const Stack = createStackNavigator();
  const user = true;
  return (
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
          <Stack.Screen name="RenderingScreen" component={RenderingScreen} />
          <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
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
  );
}

const styles = StyleSheet.create({});
