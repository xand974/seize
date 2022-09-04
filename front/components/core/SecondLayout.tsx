import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";

type SecondLayoutType = {
  children: React.ReactNode;
};
export default function SecondLayout({ children }: SecondLayoutType) {
  return (
    <SafeAreaView style={tw`bg-[#0F1112] h-full`}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
