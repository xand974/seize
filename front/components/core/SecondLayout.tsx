import React, { RefObject } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import tw from "twrnc";

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
  return (
    <View style={tw`bg-[#0F1112] h-full`}>
      {canScroll ? (
        <ScrollView
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
