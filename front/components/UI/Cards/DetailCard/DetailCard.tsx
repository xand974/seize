import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import { RouteType } from "types/app.types";
import { useState } from "react";
import { SongInfos } from "./SongInfos";
import { ArtistInfos } from "./ArtistInfos";
import { BadgeList } from "./BadgeList";
import { useNavigation } from "@react-navigation/native";

export default function DetailCard({
  state,
}: {
  state: "Lyrics" | "Instrumental";
}) {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const pressProfileByActions = () => {
    switch (state) {
      case "Instrumental":
        setIsPlaying((prev) => !prev);
        return;
      case "Lyrics":
      // TODO go to profile
      default:
        return;
    }
  };
  const seeByActions = () => {
    switch (state) {
      case "Instrumental":
        navigation.navigate("RecordScreen" as never);
        return;
      case "Lyrics":
      default:
        // TODO set infos steps to store here
        navigation.navigate("LyricsScreen" as never);
        return;
    }
  };

  return (
    <TouchableOpacity
      style={tw`flex-row h-20 mb-10`}
      onPress={() => seeByActions()}
    >
      <View style={tw`flex-2`}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={tw`w-full h-full rounded-lg overflow-hidden relative`}
          onPress={() => pressProfileByActions()}
        >
          {state === "Instrumental" && isPlaying && (
            <View
              style={tw`absolute top-0 left-0 w-full h-full opacity-80 z-2`}
            >
              <Image
                style={tw`w-8/12 h-8/12 m-auto`}
                resizeMode="contain"
                source={require("../../../../assets/img/Spectrum.png")}
              ></Image>
            </View>
          )}
          <Image
            blurRadius={10}
            source={{ uri: DEFAULT_PERSON }}
            resizeMode="cover"
            style={tw`w-full h-full`}
          />
        </TouchableOpacity>
      </View>
      <View style={tw`flex-4 ml-2 justify-between`}>
        <ArtistInfos></ArtistInfos>
        <SongInfos state={state}></SongInfos>
        <BadgeList></BadgeList>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
