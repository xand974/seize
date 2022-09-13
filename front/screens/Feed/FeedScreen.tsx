import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import { Header } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";
import Choices from "./Choices/Choices";
import SwitchButton from "components/UI/Buttons/SwitchButton";
import LyricsCard from "components/UI/Cards/LyricsCard";
import SecondLayout from "components/core/SecondLayout";
import { useNavigation } from "@react-navigation/native";

export default function FeedScreen() {
  const navigation = useNavigation();
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
    <SecondLayout>
      <View style={tw`mx-auto mt-10`}>
        {/* RECOMMENDED SECTION*/}
        <View style={tw``}>
          <Recommended recommended={profilesRecommended}></Recommended>
          {/* CHOICES SECTION*/}
          <View style={tw`w-full h-80 mt-10`}>
            <Choices></Choices>
          </View>
        </View>
      </View>
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <SwitchButton setSection={setSectionSelected}></SwitchButton>
        <View style={tw`my-6`}>
          <LyricsCard cardSize="Big"></LyricsCard>
          <LyricsCard cardSize="Big"></LyricsCard>
          <LyricsCard cardSize="Big"></LyricsCard>
        </View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
