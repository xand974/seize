import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { RouteType } from "types/app.types";
import tw from "twrnc";
import { Header } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";
import Choices from "./Choices/Choices";
import ToggleButton from "components/UI/Buttons/ToggleButton";
import LyricsCard from "../../components/UI/Cards/LyricsCard";

export default function FeedScreen({ navigation }: RouteType) {
  //#region UI HEADER
  useLayoutEffect(() => {
    const options = {
      title: "",
      headerStyle: {
        backgroundColor: "#0F1112",
      },
      header: () => {
        return <Header />;
      },
      headerShadowVisible: false,
    };
    navigation.setOptions({
      ...options,
    });
  }, []);
  //#endregion
  const setSectionSelected = (section: string) => {
    console.log(section);
  };
  return (
    <ScrollView style={tw`bg-[#0F1112] h-full`}>
      <View style={tw`mx-auto mt-10`}>
        {/* RECOMMENDED SECTION*/}
        <View style={tw``}>
          <Recommended
            navigation={navigation}
            recommended={profilesRecommended}
          ></Recommended>
          {/* CHOICES SECTION*/}
          <View style={tw`w-full h-80 mt-10`}>
            <Choices></Choices>
          </View>
        </View>
      </View>
      <View style={tw`w-11/12 mx-auto mt-10 mb-20`}>
        <ToggleButton setSection={setSectionSelected}></ToggleButton>
        <View style={tw`my-6`}>
          <LyricsCard cardSize="Big"></LyricsCard>
          <LyricsCard cardSize="Big"></LyricsCard>
          <LyricsCard cardSize="Big"></LyricsCard>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
