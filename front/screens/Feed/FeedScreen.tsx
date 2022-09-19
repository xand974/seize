import { useCallback, useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import { Header } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";
import Choices from "./Choices/Choices";
import SwitchButton from "components/UI/Buttons/SwitchButton";
import LyricsCard from "components/UI/Cards/LyricsCard";
import SecondLayout from "components/core/SecondLayout";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function FeedScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
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

  useFocusEffect(
    useCallback(() => {
      console.log("focus");

      return () => {};
    }, [])
    // useCallback(() => {
    //   const unsubscribe = API.subscribe(userId, user => setUser(data));

    //   return () => unsubscribe();
    // }, [userId])
  );

  const setSectionSelected = (section: string) => {
    console.log(section);
  };
  return (
    <SecondLayout>
      <ScrollView>
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
      </ScrollView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
