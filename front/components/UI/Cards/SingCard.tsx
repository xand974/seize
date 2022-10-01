import CtmText from "components/core/CtmText";
import {
  View,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import tw from "twrnc";
import CtmIcon from "components/Icons/CtmIcon";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";
import AppStyle from "styles/_globals";

export default function SingCard() {
  const navigation = useNavigation<HomeNavigationProp>();

  const goTo = (
    e: NativeSyntheticEvent<NativeTouchEvent>,
    state: "profile" | "song",
    data: string
  ) => {
    e.stopPropagation();
    switch (state) {
      case "profile":
        navigation.navigate("ProfileScreen", {
          data,
        });
        break;
      case "song":
        navigation.navigate("PlayScreen", {
          song: "",
        });
        break;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity
      style={tw`flex-row items-center h-20 relative mb-5`}
      onPress={(e) => goTo(e, "song", "song")}
    >
      {/* LEFT SIDE */}
      <View style={tw`flex-1 items-center`}>
        <View
          style={tw`w-9/12 h-6/12 rounded-full bg-gray-300 items-center justify-center`}
        >
          <CtmText type="MontserratBold" style="text-xl">
            1
          </CtmText>
        </View>
      </View>

      {/*  MIDDLE SIDE */}
      <View style={tw`flex-6 h-full pl-3`}>
        <CtmText type="MontserratMedium" style="text-sm mb-2">
          The limit of the happiness
        </CtmText>
        <View style={tw`flex-row items-center mb-2`}>
          <CtmText type="MontserratThin" style="text-xs">
            pop_smoke
          </CtmText>
          <CtmText type="MontserratThin" style="text-xs mx-2">
            ·
          </CtmText>

          <CtmText type="MontserratThin" style="text-sm">
            3min41
          </CtmText>
        </View>

        <View style={tw`flex-row items-center`}>
          <CtmText type="MontserratThin" style="text-xs mr-2">
            written by
          </CtmText>
          <CtmText
            type="MontserratMedium"
            style={`text-xs text-[${AppStyle.text_color.primaryBlue}]`}
            onPress={(e: any) => goTo(e, "profile", "xand974")}
          >
            @xand974
          </CtmText>
          <CtmText type="MontserratThin" style="text-xs mx-2">
            ·
          </CtmText>
          <CtmText type="MontserratThin" style="text-xs mr-2">
            Produced by
          </CtmText>
          <CtmText
            type="MontserratMedium"
            style={`text-xs text-[${AppStyle.text_color.primaryBlue}]`}
            onPress={(e: any) => goTo(e, "profile", "simon")}
          >
            @simon
          </CtmText>
        </View>
      </View>

      {/*  RIGHT SIDE */}
      <CtmIcon
        name="dots-three-vertical"
        type="entypo"
        parentStyle="absolute top-0 right-0 w-7 h-7"
        size={15}
      />
    </TouchableOpacity>
  );
}
