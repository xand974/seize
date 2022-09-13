import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  View,
} from "react-native";
import tw from "twrnc";

interface ImageLayoutProp {
  imgUrl: string;
  canScroll?: boolean;
  children: React.ReactNode;
}
export default function ImageLayout({
  imgUrl,
  children,
  canScroll = true,
}: ImageLayoutProp) {
  return (
    <SafeAreaView style={tw`h-full mb-20`}>
      <Image
        source={{ uri: imgUrl }}
        resizeMode="cover"
        blurRadius={20}
        style={tw`absolute w-full h-[${
          Dimensions.get("window").height
        }px] top-0 left-0 opacity-90`}
      />
      {canScroll ? (
        <ScrollView horizontal={false} style={tw`h-full mt-10`}>
          {children}
        </ScrollView>
      ) : (
        <View style={tw`h-full mt-10`}> {children} </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
