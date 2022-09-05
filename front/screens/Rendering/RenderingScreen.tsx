import CtmText from "components/core/CtmText";
import ColorButton from "components/UI/Buttons/ColorButton";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import React from "react";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import { RouteType } from "types";

export default function RenderingScreen({ navigation }: RouteType) {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);

    if (timer === 100) {
      navigation.navigate("ShareScreen");
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [timer]);

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
      <View style={tw`h-full items-center justify-center`}>
        <ColorButton
          text={`${timer}%`}
          ctmStyle="w-30 h-30 rounded-full"
        ></ColorButton>
        <View style={tw`w-11/12 mx-auto mt-10 items-center`}>
          <CtmText type="MontserratExtraLight" style="text-2xl mb-3">
            Wait !
          </CtmText>
          <CtmText type="MontserratExtraLight" style="text-xl">
            Your masterpiece is getting{" "}
            <CtmText type="MontserratBold">ready</CtmText>{" "}
          </CtmText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
