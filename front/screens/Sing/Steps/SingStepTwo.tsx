import CtmText from "components/core/CtmText";
import SecondLayout from "components/core/SecondLayout";
import StepTitle from "components/UI/StepTitle/StepTitle";
import { ScrollView, StyleSheet, View } from "react-native";
import tw from "twrnc";
import DetailCard from "components/UI/Cards/DetailCard/DetailCard";

export default function StepTwo() {
  return (
    <SecondLayout>
      <ScrollView style={tw`mt-10`}>
        <View style={tw`w-11/12 mx-auto mt-10`}>
          <StepTitle purpleText="inspiration" lightText="Find your" />
          <CtmText type="MontserratMedium" style="mt-3">
            2. Choose Lyrics
          </CtmText>
          <View style={tw`mt-5`}>
            <DetailCard state="Lyrics" />
          </View>
        </View>
      </ScrollView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
