import React, { RefObject } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";

interface SecondLayoutProp {
  children: React.ReactNode;
  ref?: RefObject<ScrollView> | null;
}
export default function SecondLayout({ children }: SecondLayoutProp) {
  const route = useRoute();
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    scrollElement.scrollTo({
      y: 0,
    });
  }, [route.name]);

  return (
    <SafeAreaView style={tw`bg-[#0F1112] h-full`}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({});
