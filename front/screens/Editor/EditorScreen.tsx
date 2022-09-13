/// <reference path="../../types/index.d.ts"/>
import { DEFAULT_PERSON } from "helpers/assets.helpers";
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
import RecordFooter from "screens/Record/components/RecordFooter";
import tw from "twrnc";
import { useState } from "react";
import { RecordState } from "types";
import CtmText from "components/core/CtmText";
import Spectrum from "components/UI/Spectrum/Spectrum";
import { useNavigation } from "@react-navigation/native";

export default function EditorScreen() {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const setRecordAction = (action: RecordState) => {
    switch (action) {
      case "Play":
        return;
      case "PlayBack":
        return;
      case "Validate":
        navigation.navigate("RenderingScreen");
        return;
      case "SeePreview":
        return;
      case "UploadImage":
        return;
    }
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
      <View style={tw`h-full`}>
        <View style={tw`w-11/12 mx-auto mt-10`}>
          <CtmText type="MontserratSemiBold" style="text-2xl text-center">
            pop_smoke
          </CtmText>
          <View style={tw`w-3/12 mx-auto my-4 h-[1px] bg-[#6e6e6e]`}></View>
          <CtmText type="MontserratThin" style="text-xl text-center">
            Le jour où j'ai...
          </CtmText>
        </View>
      </View>
      <Spectrum></Spectrum>

      <RecordFooter
        type="edit"
        isRecording={isPlaying}
        setRecordAction={setRecordAction}
      ></RecordFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
