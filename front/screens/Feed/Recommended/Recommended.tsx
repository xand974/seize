import { StyleSheet, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import CtmText from "components/UI/CtmText";
import RoundedButton from "components/UI/RoundedButton";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { RouteType } from "types/app.types";

type RecommendedType = {
  recommended: { name: string; uri?: string }[];
  navigation: RouteType["navigation"];
};
export default function Recommended({
  recommended,
  navigation,
}: RecommendedType) {
  const goToProfile = () => {
    navigation.navigate("ProfileScreen");
  };
  return (
    <ScrollView style={tw`h-full`}>
      <CtmText type="MontserratSemiBold" style="text-[18px] w-11/12 mx-auto">
        Recommandé
      </CtmText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`flex-row mt-4`}
      >
        {recommended.map((item, id) => (
          <View style={tw`items-center mx-2`}>
            <RoundedButton onPress={goToProfile} key={id}>
              <Image
                resizeMode="cover"
                style={tw`h-full w-full`}
                source={{ uri: COLORFUL_IMG }}
              />
            </RoundedButton>
            <CtmText type="MontserratLight" style="mt-2 text-[12px]">
              {item.name}
            </CtmText>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
