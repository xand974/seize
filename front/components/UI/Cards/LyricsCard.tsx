import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CtmText from "../../core/CtmText";
import tw from "twrnc";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import CtmIcon from "components/Icons/CtmIcon";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

interface LyricsCardProp {
  cardSize: "Small" | "Medium" | "Big";
}
export default function LyricsCard({ cardSize }: LyricsCardProp) {
  const navigation = useNavigation<HomeNavigationProp>();

  const goTo = (to: string) => {
    switch (to) {
      case "Profile":
        navigation.navigate("ProfileScreen", {
          data: "profile",
        });
        return;
    }
  };
  const setCardImgSize = () => {
    switch (cardSize) {
      case "Medium":
        return 60;
      case "Small":
        return 40;
      default:
      case "Big":
        return 80;
    }
  };

  return (
    <View style={tw`mt-10 relative`}>
      <CtmIcon
        type="entypo"
        name="dots-three-vertical"
        size={10}
        parentStyle="absolute right-0 top-2 w-6 h-6 z-1"
      ></CtmIcon>
      {/* HEADER */}
      <View style={tw`flex-row items-center mb-2`}>
        <TouchableOpacity
          onPress={() => goTo("Profile")}
          activeOpacity={0.1}
          style={tw`w-10 h-10 rounded-full mr-2 overflow-hidden`}
        >
          <Image
            source={{ uri: COLORFUL_IMG }}
            style={tw`h-full w-full`}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <CtmText type="MontserratThin" onPress={() => goTo("Profile")}>
          pop_smoke
        </CtmText>
        <CtmText style="mx-2" type="MontserratRegular">
          •
        </CtmText>
        <CtmText type="MontserratRegular">J'ai vu des choses...</CtmText>
      </View>
      {/* BODY */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={tw`w-full h-${setCardImgSize()} mb-2 relative items-center justify-center`}
      >
        <Image
          source={{ uri: COLORFUL_IMG }}
          style={tw`h-full w-full rounded-lg absolute left-0 top-0`}
          resizeMode="cover"
          blurRadius={10}
        />
        <CtmText type="Asar" style="w-8/12">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          repellat."
        </CtmText>
      </TouchableOpacity>
      {/* FOOTER */}
      <View style={tw`flex-row items-center`}>
        <View style={tw`items-center`}>
          <CtmIcon size={17} name="heart-outline" type="ionicon"></CtmIcon>
          <CtmText style="relative right-1 mt-1" type="MontserratThin">
            100
          </CtmText>
        </View>
        <View style={tw`items-center`}>
          <CtmIcon
            size={17}
            name="comment-outline"
            type="material-community"
          ></CtmIcon>
          <CtmText style="relative right-1 mt-1" type="MontserratThin">
            1k
          </CtmText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
