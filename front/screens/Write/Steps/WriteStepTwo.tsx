import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageLayout from "components/core/ImageLayout";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import LyricsText from "screens/Lyrics/components/LyricsText";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { useState } from "react";
import { LyricsModel } from "types";

export default function WriteStepTwo() {
  const [lyricsInfos, setLyricsInfos] = useState({} as Partial<LyricsModel>);
  return (
    <ImageLayout imgUrl={DEFAULT_PERSON}>
      <View style={tw`w-11/12 mx-auto`}>
        {/* Header */}
        <View style={tw`w-8/12 mx-auto mb-5`}>
          <CtmText type="MontserratSemiBold" style="text-2xl text-center">
            pop_smoke
          </CtmText>
          <View style={tw`w-3/12 mx-auto my-4 h-[1px] bg-[#6e6e6e]`}></View>
          <CtmText type="MontserratBold" style="text-2xl">
            La vie que je mène
          </CtmText>
        </View>
        {/* Body */}
        <View style={tw`mb-5`}>
          <LyricsText />
        </View>
        {/* Footer */}
        <View></View>
      </View>
    </ImageLayout>
  );
}

const styles = StyleSheet.create({});
