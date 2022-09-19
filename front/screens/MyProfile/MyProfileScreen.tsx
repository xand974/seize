import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import SecondLayout from "components/core/SecondLayout";
import LyricsCard from "components/UI/Cards/LyricsCard";
import SwitchButton from "components/UI/Buttons/SwitchButton";
import TextIcon from "components/Icons/TextIcon";
import CtmIcon from "components/Icons/CtmIcon";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { useNavigation } from "@react-navigation/native";

export default function MyProfileScreen() {
  const setSection = (section: string) => {};

  return (
    <SecondLayout>
      <ScrollView style={tw`mt-10`}>
        <View style={tw`w-11/12 h-full mx-auto`}>
          {/* Header */}
          <View style={tw`w-full items-center mt-10`}>
            <TouchableOpacity
              style={tw`w-30 h-30 rounded-full overflow-hidden`}
            >
              <Image source={{ uri: COLORFUL_IMG }} style={tw`w-full h-full`} />
            </TouchableOpacity>
            <CtmText type="MontserratBold" style="mt-4 text-2xl">
              pop_smoke
            </CtmText>

            <CtmText
              type="MontserratExtraLight"
              style="mt-4 text-sm w-8/12 text-center"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              natus.
            </CtmText>

            <View style={tw`my-4`}>
              <CtmIcon name="ios-person-add-outline" type="ionicon"></CtmIcon>
            </View>
            <View
              style={tw`mt-4 w-7/12 border-[1px] border-[#3a3a3a] rounded-lg py-2 px-3 flex-row justify-between`}
            >
              <TextIcon
                size={15}
                iconName="heart-outline"
                iconType="ionicon"
                text="100"
              ></TextIcon>
              <TextIcon
                size={15}
                iconName="md-person-outline"
                iconType="ionicon"
                text="1k"
              ></TextIcon>
              <TextIcon
                size={15}
                iconName="pencil"
                iconType="entypo"
                text="100"
              ></TextIcon>
            </View>
          </View>
          {/* Body */}
          <View style={tw`my-10`}>
            <SwitchButton setSection={setSection}></SwitchButton>
            <View>
              <LyricsCard cardSize="Big"></LyricsCard>
              <LyricsCard cardSize="Big"></LyricsCard>
              <LyricsCard cardSize="Big"></LyricsCard>
            </View>
          </View>
        </View>
      </ScrollView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
