import { useNavigation } from "@react-navigation/native";
import CtmText from "components/core/CtmText";
import SecondLayout from "components/core/SecondLayout";
import DetailCard from "components/UI/Cards/DetailCard/DetailCard";
import StepTitle from "components/UI/StepTitle/StepTitle";
import { StyleSheet, View } from "react-native";
import tw from "twrnc";

export default function StepThree() {
  const navigation = useNavigation();
  return (
    <SecondLayout style="mt-10">
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <StepTitle purpleText="tempo" lightText="Find your"></StepTitle>
        <CtmText type="MontserratMedium" style="mt-3">
          2. Choose Instrumental
        </CtmText>
        <View style={tw`mt-5`}>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
          <DetailCard state="Instrumental"></DetailCard>
        </View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
