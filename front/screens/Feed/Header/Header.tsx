import React from "react";
import CtmText from "components/core/CtmText";
import EntTypo from "react-native-vector-icons/Entypo";
import { View } from "react-native";
import tw from "twrnc";
import CtmIcon from "components/Icons/CtmIcon";
import { CtmIconHost } from "components/Icons/CtmIcon";

export const HeaderLeft = ({ name }: { name: string }) => {
  return (
    <View style={tw`flex-row items-center mt-5 w-10/12 mx-auto`}>
      <CtmText type="MontserratSemiBold" style="text-3xl h-full">
        {name}
      </CtmText>
      <EntTypo name="pencil" style={tw`text-xl text-white ml-2`} />
    </View>
  );
};

export const HeaderRight = () => {
  const icons = [
    {
      name: "bell",
      type: "font-awesome-5",
    },
    {
      name: "library-outline",
      type: "ionicon",
    },
  ] as { name: string; type: CtmIconHost }[];
  return (
    <View style={tw`flex-row items-end mt-5 w-8/12`}>
      {icons.map((item, index) => (
        <CtmIcon key={index} name={item.name} type={item.type}></CtmIcon>
      ))}
    </View>
  );
};
