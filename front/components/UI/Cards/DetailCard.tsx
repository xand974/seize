import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import CtmText from "components/core/CtmText";
import SimpleIcon from "../../Icons/SimpleIcon";
import Badge from "../Badge/Badge";
import { RouteType } from "types/app.types";
import TextIcon from "components/Icons/TextIcon";

const ArtistInfos = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <CtmText type="MontserratThin">pop_smoke</CtmText>
      <CtmText style="mx-2" type="MontserratRegular">
        •
      </CtmText>
      <CtmText type="MontserratRegular">Le jour où j'ai vu</CtmText>
    </View>
  );
};

const SongInfos = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <CtmText type="MontserratRegular">6 mesures</CtmText>
      <CtmText style="mx-2" type="MontserratRegular">
        •
      </CtmText>
      <TextIcon
        iconName="heart-outline"
        iconType="ionicon"
        text="120"
      ></TextIcon>

      <CtmText style="mx-2" type="MontserratRegular">
        •
      </CtmText>

      <TextIcon
        iconName="comment-outline"
        iconType="material-community"
        text="120"
      ></TextIcon>
    </View>
  );
};

const BadgeList = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <Badge state="Active" content="Drill" style="mr-2" />
      <Badge state="Active" content="Emotional" style="mr-2" />
      <Badge state="Default" content="Jersey" style="mr-2" />
    </View>
  );
};
export default function DetailCard({ navigation }: RouteType) {
  const seeLyrics = () => {
    // TODO set infos steps to store here
    navigation.navigate("LyricsScreen");
  };

  return (
    <TouchableOpacity
      style={tw`flex-row h-20 mb-10`}
      onPress={() => seeLyrics()}
    >
      <View style={tw`flex-2`}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={tw`w-full h-full rounded-lg overflow-hidden`}
        >
          <Image
            source={{ uri: DEFAULT_PERSON }}
            resizeMode="cover"
            style={tw`w-full h-full`}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-4 ml-2 justify-between`}>
        <ArtistInfos></ArtistInfos>
        <SongInfos></SongInfos>
        <BadgeList></BadgeList>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
