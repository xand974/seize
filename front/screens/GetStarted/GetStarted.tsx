import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MainLayout from "../../components/core/MainLayout";
import { COLORFUL_IMG } from "../../helpers/assets.helpers";
import CtmButton from "../../components/UI/Button";
import tw from "twrnc";
import font from "../../styles/_font";
import { LinearGradient } from "expo-linear-gradient";

export default function GetStarted() {
  const start = () => {};
  return (
    <MainLayout>
      <View style={tw`h-8/12 relative bottom-20`}>
        <Image
          source={{ uri: COLORFUL_IMG }}
          style={tw.style(styles.img, `h-full relative `)}
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
      <View style={tw`w-10/12 mx-auto flex-1`}>
        <Text
          style={tw.style(
            font.MontserratBold.fontFamily,
            `text-center text-white font-bold text-[30px] tracking-wide`
          )}
        >
          Seize
        </Text>
        <Text
          style={tw.style(
            font.MontserratBold.fontFamily,
            `text-center mt-10 text-white font-thin text-[16px] tracking-wide`
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          excepturi sed assumenda
        </Text>

        <CtmButton
          text="Get Started"
          onPress={start}
          ctmStyle="w-8/12 h-10 rounded-md shadow-lg absolute top-[20]"
        ></CtmButton>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  img: {},
  container__img: {},
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
