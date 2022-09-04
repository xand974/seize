import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteType } from "types/app.types";
import tw from "twrnc";
import { HeaderLeft, HeaderRight } from "./Header/Header";
import Recommended from "./Recommended/Recommended";
import { profilesRecommended } from "mock/data";

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
    <View style={tw`bg-[#0F1112] h-full`}>
      <View style={tw`mx-auto mt-10`}>
        <View>
          <Recommended
            navigation={navigation}
            recommended={profilesRecommended}
          ></Recommended>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
