import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import LyricsHeader from "../Lyrics/components/Header";
import tw from "twrnc";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import CtmText from "components/core/CtmText";
import LyricsText from "screens/Lyrics/components/LyricsText";
import RecordFooter from "./components/RecordFooter";
import { useState } from "react";
import { RecordState, RootStackParamList } from "types";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type CustomNavigationType = StackNavigationProp<
  RootStackParamList,
  "EditorScreen"
>;

export default function RecordScreen() {
  const navigation = useNavigation<CustomNavigationType>();
  const [isRecording, setIsRecording] = useState(false);

  const setRecordAction = (action: RecordState) => {
    switch (action) {
      case "PlayBack":
        return;
      case "Validate":
        navigation.navigate("EditorScreen");
        return;
      case "Play":
        setIsRecording((prev) => !prev);
        return;
    }
  };
  const goBack = () => {
    const canGoBack = navigation.canGoBack();
    if (!canGoBack) {
      navigation.navigate("HomeScreen");
      return;
    }
    navigation.goBack();
  };
  return (
    <SafeAreaView style={tw`relative`}>
      <Image
        source={{ uri: DEFAULT_PERSON }}
        resizeMode="cover"
        blurRadius={20}
        style={tw`absolute w-full h-[${
          Dimensions.get("window").height
        }px] top-0 left-0 opacity-90`}
      />
      <ScrollView horizontal={false} style={tw`h-full`}>
        <View style={tw`w-11/12 mx-auto`}>
          <LyricsHeader onPress={() => goBack()}></LyricsHeader>
          <View style={tw`w-8/12 mx-auto mb-5`}>
            <CtmText type="MontserratSemiBold" style="text-2xl text-center">
              pop_smoke
            </CtmText>
            <View style={tw`w-3/12 mx-auto my-4 h-[1px] bg-[#6e6e6e]`}></View>
            <CtmText type="MontserratThin" style="text-xl text-center">
              Le jour où j'ai...
            </CtmText>
          </View>
          <LyricsText />
        </View>
      </ScrollView>
      <RecordFooter
        type="record"
        isRecording={isRecording}
        setRecordAction={setRecordAction}
      ></RecordFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
