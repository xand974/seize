import React, { RefObject } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";
import { useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";

type SecondLayoutType = {
  children: React.ReactNode;
  style?: string;
  ref?: RefObject<ScrollView> | null;
  canScroll?: boolean;
};
export default function SecondLayout({
  children,
  style,
  canScroll = true,
}: SecondLayoutType) {
  const route = useRoute();
  const scrollRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    console.log(route.name);

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;
    scrollElement.scrollTo({
      y: 0,
    });
  }, [route.name]);

  return (
    <View style={tw`bg-[#0F1112] h-full`}>
      {canScroll ? (
        <ScrollView
          ref={scrollRef}
          horizontal={false}
          style={tw`${style ?? ""}`}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <>{children}</>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
