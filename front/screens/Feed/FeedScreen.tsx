import { useCallback, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import { Header } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";
import { APP_SECTIONS, FEED_SECTIONS } from "data/app.data";
import Choices from "./Choices/Choices";
import SwitchButton from "components/UI/Buttons/SwitchButton";
import LyricsCard from "components/UI/Cards/LyricsCard";
import SecondLayout from "components/core/SecondLayout";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";
import SingCard from "components/UI/Cards/SingCard";

export default function FeedScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const [selectedSection, setSelectedSection] = useState(
    APP_SECTIONS.TopLyrics
  );
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

  const setSelected = (section: string) => {
    console.log(section);

    setSelectedSection(section as any);
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
          <SwitchButton
            sections={FEED_SECTIONS}
            setSection={(section: any) => setSelected(section)}
          ></SwitchButton>
          {selectedSection === "topLyrics" ? (
            <View style={tw`my-6`}>
              <LyricsCard cardSize="Big" />
              <LyricsCard cardSize="Big" />
              <LyricsCard cardSize="Big" />
            </View>
          ) : (
            <View style={tw`my-6`}>
              <SingCard />
              <SingCard />
              <SingCard />
              <SingCard />
              <SingCard />
              <SingCard />
              <SingCard />
              <SingCard />
            </View>
          )}
        </View>
      </ScrollView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
