import CtmText from "components/core/CtmText";
import CtmIcon, { CtmIconHost } from "components/Icons/CtmIcon";
import ColorButton from "components/UI/Buttons/ColorButton";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import SimpleIcon from "components/Icons/SimpleIcon";
import { RouteType } from "types";

export default function ShareScreen({ navigation }: RouteType) {
  const shareButtons = [
    {
      size: 25,
      name: "download-outline",
      type: "ionicon",
      tag: "download",
    },
    {
      size: 20,
      name: "tiktok",
      type: "font-awesome-5",
      tag: "shareTiktok",
    },
    {
      size: 25,
      name: "logo-instagram",
      type: "ionicon",
      tag: "shareInstagram",
    },
  ] as { size: number; name: string; type: CtmIconHost; tag: string }[];

  const setShareActions = (tag: string) => {};

  const cancel = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={tw`bg-[#0F1112] w-full h-full justify-end`}>
      <View style={tw`w-10/12 mx-auto`}>
        <CtmText type="MontserratExtraLight" style="text-2xl text-center">
          Share this to your community
        </CtmText>
        <ColorButton
          text="Publish"
          ctmStyle="h-10 w-7/12 rounded-lg my-5"
        ></ColorButton>
      </View>
      <View style={tw`w-full h-9/12 rounded-t-2xl overflow-hidden relative`}>
        <TouchableOpacity
          style={tw`absolute top-5 left-5 z-2`}
          onPress={() => cancel()}
        >
          <SimpleIcon
            type="ionicon"
            size={30}
            name="ios-chevron-down"
            style=""
          ></SimpleIcon>
        </TouchableOpacity>
        <LinearGradient
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0.1, y: 0.9 }}
          locations={[0.3, 0.9]}
          colors={["#060FE9", "#615eff"]}
          style={tw`w-full h-full flex-row justify-center items-center`}
        >
          <View style={tw`w-8/12 h-9/12 justify-between`}>
            <View style={tw`h-8/12 w-full rounded-lg overflow-hidden relative`}>
              <View
                style={tw.style(
                  `absolute top-0 left-0 h-full w-full items-center justify-center z-2`
                )}
              >
                <CtmIcon
                  name="play-outline"
                  type="ionicon"
                  parentStyle="w-17 h-17 relative left-1"
                  size={30}
                  style="relative left-1"
                ></CtmIcon>
              </View>
              <Image
                blurRadius={10}
                source={{ uri: COLORFUL_IMG }}
                style={tw`w-full h-full`}
                resizeMode="cover"
              />
            </View>
            <View>
              <View style={tw`flex-row w-full justify-between items-center`}>
                {shareButtons.map((item, id) => (
                  <CtmIcon
                    onPress={() => setShareActions(item.tag)}
                    key={id}
                    name={item.name}
                    size={item.size}
                    parentStyle="w-12 h-12"
                    type={item.type}
                  ></CtmIcon>
                ))}
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
