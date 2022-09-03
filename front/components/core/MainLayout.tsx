import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

type MainLayoutType = {
  children: React.ReactNode;
  uri?: string;
  style?: string;
};
export default function MainLayout({ children, uri, style }: MainLayoutType) {
  return (
    <View style={tw`flex-1`}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={tw`bg-[#212121] h-full flex-1 `}
      >
        {uri ? (
          <View style={styles.container__img}>
            <Image
              source={{
                uri,
              }}
              style={tw.style(styles.img, `h-full`)}
              resizeMode="cover"
              blurRadius={10}
            ></Image>
            <LinearGradient
              start={{ x: 0.5, y: 0 }}
              colors={[
                "transparent",
                "#21212139",
                "#21212155",
                "#2121218b",
                "#212121e6",
                "#212121",
              ]}
              style={styles.container__img__layer}
            ></LinearGradient>
          </View>
        ) : (
          <></>
        )}
        <SafeAreaView style={tw`${style ? style : ""}`}>
          {children}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {},
  container__img: {
    position: "relative",
    height: "30%",
  },
  container__img__layer: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: "100%",
    zIndex: 10,
    linearGradient: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      height: 200,
      width: 350,
    },
  },
});
