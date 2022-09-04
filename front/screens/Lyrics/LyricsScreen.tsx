import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import SecondLayout from "components/core/SecondLayout";
import { RouteType } from "types/app.types";
import tw from "twrnc";
import SimpleIcon from "components/Icons/SimpleIcon";
import CtmText from "components/core/CtmText";
import TextIcon from "components/Icons/TextIcon";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { SafeAreaView } from "react-native";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import LyricsText from "./components/LyricsText";
import ColorButton from "components/UI/Buttons/ColorButton";

export default function LyricsScreen({ navigation }: RouteType) {
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
          <View style={tw`flex-row justify-between w-full items-center h-10`}>
            <TouchableOpacity>
              <SimpleIcon
                name="chevron-back"
                type="ionicon"
                size={30}
              ></SimpleIcon>
            </TouchableOpacity>
            <View>
              <TextIcon
                iconName="heart-outline"
                iconType="ionicon"
                text="100"
              ></TextIcon>
            </View>
          </View>
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
            text="Choose"
            ctmStyle="w-6/12 py-3 rounded-xl"
          ></ColorButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
