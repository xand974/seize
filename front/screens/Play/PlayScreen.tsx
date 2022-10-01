import ImageLayout from "components/core/ImageLayout";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DEFAULT_PERSON } from "../../helpers/assets.helpers";
import tw from "twrnc";
import SimpleIcon from "components/Icons/SimpleIcon";
import CtmIcon from "components/Icons/CtmIcon";
import CtmText from "components/core/CtmText";
import AppStyle from "styles/_globals";
import Spectrum from "components/UI/Spectrum/Spectrum";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function PlayScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const back = () => {
    navigation.goBack();
  };

  const topButtons = [
    {
      name: "heart-outline",
      type: "ionicon",
      tag: "like",
    },
    {
      name: "library-outline",
      type: "ionicon",
      tag: "library",
    },
    {
      name: "download-outline",
      type: "ionicon",
      tag: "download",
    },
  ];

  const playButtons = [
    {
      name: "play-skip-back",
      type: "ionicon",
      tag: "playBack",
    },
    {
      name: "play-outline",
      type: "ionicon",
      tag: "play",
    },
    {
      name: "play-skip-forward",
      type: "ionicon",
      tag: "playNext",
    },
  ];
  return (
    <ImageLayout imgUrl={DEFAULT_PERSON}>
      {/* header */}
      <View style={tw`flex-row justify-between w-10/12 mx-auto`}>
        <TouchableOpacity style={tw``} onPress={() => back()}>
          <SimpleIcon
            type="ionicon"
            size={30}
            name="ios-chevron-down"
            color="white"
          ></SimpleIcon>
        </TouchableOpacity>
        <TouchableOpacity style={tw`relative top-1`} onPress={() => back()}>
          <SimpleIcon
            color="white"
            type="entypo"
            name="dots-three-vertical"
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row justify-center mt-10`}>
        {/* Top Buttons */}
        {topButtons.map((item, id) => (
          <CtmIcon
            name={item.name}
            key={id}
            size={24}
            parentStyle={`h-11 w-11 ${
              item.tag === "library" ? "ml-10 mr-12 " : ""
            }`}
            type={item.type as any}
          />
        ))}
      </View>
      {/* Middle text */}
      <View style={tw`justify-center mt-20 items-center`}>
        <CtmText type="MontserratBold" style="text-2xl">
          Il était une fois
        </CtmText>
        <CtmText type="MontserratLight" style="text-xl mt-4">
          pop_smoke
        </CtmText>
        <View style={tw`flex-row items-center mt-4`}>
          <CtmText type="MontserratExtraLight" style="text-sm ">
            written by{" "}
          </CtmText>
          <CtmText
            type="MontserratBold"
            style={`text-sm text-[${AppStyle.text_color.primaryBlue}]`}
          >
            @xand974
          </CtmText>
        </View>
      </View>
      {/* Play Buttons */}
      <View style={tw`flex-row justify-center mt-10`}>
        {/* Top Buttons */}
        {playButtons.map((item, id) => (
          <CtmIcon
            color={item.tag === "play" ? "black" : "white"}
            name={item.name}
            key={id}
            size={20}
            parentStyle={`h-12 w-12 ${
              item.tag === "play" ? "ml-10 mr-12 bg-white" : ""
            }`}
            type={item.type as any}
          />
        ))}
      </View>
      {/* Spectrum */}
      <View style={tw`relative items-center justify-center mt-10`}>
        <CtmText type="MontserratLight" style="text-sm">
          11:23:21
        </CtmText>
        <Spectrum />
      </View>
    </ImageLayout>
  );
}

const styles = StyleSheet.create({});
