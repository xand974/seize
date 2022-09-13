import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { SafeAreaView } from "react-native";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import LyricsText from "./components/LyricsText";
import ColorButton from "components/UI/Buttons/ColorButton";
import LyricsHeader from "./components/Header";
import { useNavigation } from "@react-navigation/native";

export default function LyricsScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  const goBack = () => {
    const canGoBack = navigation.canGoBack();
    if (!canGoBack) {
      navigation.navigate("HomeScreen");
      return;
    }
    navigation.goBack();
  };

  const nextStep = () => {
    navigation.navigate("StepThreeScreen");
  };
  return (
    <SafeAreaView>
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
          <LyricsText></LyricsText>
          <ColorButton
            onPress={() => nextStep()}
            text="Choose"
            ctmStyle="w-6/12 py-3 rounded-xl"
          ></ColorButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
