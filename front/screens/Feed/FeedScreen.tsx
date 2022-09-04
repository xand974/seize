import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { RouteType } from "types/app.types";
import tw from "twrnc";
import { HeaderLeft, HeaderRight } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";
import Card from "components/UI/Card";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import Choices from "./Choices/Choices";
import ToggleButton from "../../components/Buttons/ToggleButton";

export default function FeedScreen({ navigation }: RouteType) {
  //#region UI HEADER
  useLayoutEffect(() => {
    const options = {
      title: "",
      headerStyle: {
        backgroundColor: "#0F1112",
      },
      headerLeft: () => <HeaderLeft name="Malet" />,
      headerRight: () => <HeaderRight />,
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
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <ToggleButton setSection={setSectionSelected}></ToggleButton>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
        <Text>dzdezdezz</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
