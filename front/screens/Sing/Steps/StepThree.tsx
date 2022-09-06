import CtmText from "components/core/CtmText";
import SecondLayout from "components/core/SecondLayout";
import DetailCard from "components/UI/Cards/DetailCard/DetailCard";
import StepTitle from "components/UI/StepTitle/StepTitle";
import { StyleSheet, View } from "react-native";
import tw from "twrnc";
import { RouteType } from "types/app.types";

export default function StepThree({ navigation }: RouteType) {
  return (
    <SecondLayout style="mt-10">
      <View style={tw`w-11/12 mx-auto mt-10`}>
        <StepTitle purpleText="tempo" lightText="Find your"></StepTitle>
        <CtmText type="MontserratMedium" style="mt-3">
          2. Choose Instrumental
        </CtmText>
        <View style={tw`mt-5`}>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
          <DetailCard state="Instrumental" navigation={navigation}></DetailCard>
        </View>
      </View>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
