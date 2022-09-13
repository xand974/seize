import { StyleSheet, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import RoundedButton from "components/UI/Buttons/RoundedButton";
import { useNavigation } from "@react-navigation/native";

type RecommendedType = {
  recommended: { name: string; uri?: string; id?: string }[];
};
export default function Recommended({ recommended }: RecommendedType) {
  const navigation = useNavigation();
  const goToProfile = () => {
    navigation.navigate("ProfileScreen");
  };
  return (
    <View style={tw``}>
      <CtmText type="MontserratSemiBold" style="text-[18px] w-11/12 mx-auto">
        Recommandé
      </CtmText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`flex-row mt-4`}
      >
        {recommended.map((item, id) => (
          <View style={tw`items-center mx-2`} key={id}>
            <RoundedButton onPress={goToProfile}>
              <Image
                resizeMode="cover"
                style={tw`h-full w-full`}
                source={{ uri: COLORFUL_IMG }}
              />
            </RoundedButton>
            <CtmText
              type="MontserratLight"
              style="mt-2 text-[12px]"
              onPress={goToProfile}
            >
              {item.name}
            </CtmText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
