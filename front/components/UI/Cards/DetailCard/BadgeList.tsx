import { View } from "react-native";
import tw from "twrnc";
import Badge from "../../Badge/Badge";
export const BadgeList = () => {
  return (
    <View style={tw`flex-row items-center`}>
      <Badge state="Active" content="Drill" style="mr-2" />
      <Badge state="Active" content="Emotional" style="mr-2" />
      <Badge state="Default" content="10 more" style="mr-2" />
    </View>
  );
};
