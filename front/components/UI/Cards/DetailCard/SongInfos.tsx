import CtmText from "components/core/CtmText";
import Badge from "../../Badge/Badge";
import TextIcon from "components/Icons/TextIcon";
import { View } from "react-native";
import tw from "twrnc";

export const SongInfos = ({ state }: { state: "Instrumental" | "Lyrics" }) => {
  const getInfosByState = () => {
    switch (state) {
      case "Instrumental":
        return (
          <>
            <CtmText type="MontserratThin">123bpm</CtmText>
            <Badge content="only me" style="ml-2" state="Default" />
          </>
        );

      default:
      case "Lyrics":
        return (
          <>
            <CtmText type="MontserratRegular">6 mesures</CtmText>
            <CtmText style="mx-2" type="MontserratRegular">
              •
            </CtmText>
            <TextIcon
              iconName="heart-outline"
              iconType="ionicon"
              text="120"
            ></TextIcon>

            <CtmText style="mx-2" type="MontserratRegular">
              •
            </CtmText>

            <TextIcon
              iconName="comment-outline"
              iconType="material-community"
              text="120"
            ></TextIcon>
          </>
        );
    }
  };
  return <View style={tw`flex-row items-center`}>{getInfosByState()}</View>;
};
