import { ScrollView, StyleSheet, View } from "react-native";
import SecondLayout from "components/core/SecondLayout";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import StepTitle from "components/UI/StepTitle/StepTitle";
import SimpleCard from "components/UI/Cards/SimpleCard";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { lyricsCategories } from "mock/data";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function StepOne() {
  const navigation = useNavigation<HomeNavigationProp>();
  const nextStep = () => {
    // * check valid category
    // * by id or something like this
    navigation.navigate("SingStepTwoScreen");
  };
  return (
    <SecondLayout>
      <ScrollView style={tw`mt-10`}>
        <View style={tw`w-11/12 mx-auto mt-10`}>
          <StepTitle purpleText="mood" lightText="Find your"></StepTitle>
          <CtmText type="MontserratMedium" style="mt-3">
            1. Choose a Category
          </CtmText>
          <View style={tw`mt-5`}>
            {lyricsCategories.map((item, id) => (
              <SimpleCard
                key={id}
                onPress={() => nextStep()}
                image={{ uri: COLORFUL_IMG, style: "opacity-60" }}
                text={{ style: "text-center text-sm", content: item.name }}
                size="Small"
              ></SimpleCard>
            ))}
          </View>
        </View>
      </ScrollView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
