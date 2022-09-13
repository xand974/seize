import CtmText from "components/core/CtmText";
import SecondLayout from "components/core/SecondLayout";
import StepTitle from "components/UI/StepTitle/StepTitle";
import { StyleSheet, View } from "react-native";
import tw from "twrnc";
import DetailCard from "components/UI/Cards/DetailCard/DetailCard";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function StepTwo() {
  const navigation = useNavigation<HomeNavigationProp>();
  return (
    <SecondLayout style="mt-10">
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <StepTitle purpleText="inspiration" lightText="Find your"></StepTitle>
        <CtmText type="MontserratMedium" style="mt-3">
          2. Choose Lyrics
        </CtmText>
        <View style={tw`mt-5`}>
          <DetailCard state="Lyrics"></DetailCard>
        </View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
