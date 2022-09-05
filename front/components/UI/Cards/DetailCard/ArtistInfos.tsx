import { View } from "react-native";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
export const ArtistInfos = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <CtmText type="MontserratThin">pop_smoke</CtmText>
      <CtmText style="mx-2" type="MontserratRegular">
        •
      </CtmText>
      <CtmText type="MontserratRegular">Le jour où j'ai vu</CtmText>
    </View>
  );
};
