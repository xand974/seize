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

  return (
    <ScrollView style={tw`bg-[#0F1112] h-full`}>
      <View style={tw`mx-auto mt-10`}>
        {/* RECOMMENDED SECTION*/}
        <View>
          <Recommended
            navigation={navigation}
            recommended={profilesRecommended}
          ></Recommended>
          {/* CHOICES SECTION*/}
          <View style={tw`w-full h-7/12 mt-10`}>
            <Choices></Choices>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
