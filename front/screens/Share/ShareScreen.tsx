import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "twrnc";

export default function ShareScreen() {
  return (
    <SafeAreaView style={tw`bg-black w-full h-full justify-end`}>
      <View style={tw`bg-red-100 w-full h-10/12 rounded-t-2xl`}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
