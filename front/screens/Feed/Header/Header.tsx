import React from "react";
import CtmText from "components/core/CtmText";
import EntTypo from "react-native-vector-icons/Entypo";
import { View, StyleSheet } from "react-native";
import tw from "twrnc";
import CtmIcon from "components/Icons/CtmIcon";
import { CtmIconHost } from "components/Icons/CtmIcon";

export const HeaderLeft = ({ name }: { name: string }) => {
  return (
    <View style={tw.style(`flex-row items-center`)}>
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
    <View style={tw`flex-row items-end`}>
      {icons.map((item, index) => (
        <CtmIcon key={index} name={item.name} type={item.type}></CtmIcon>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#131313",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
  },
});

export const Header = () => {
  return (
    <View
      style={tw.style(
        styles.shadow,
        `bg-[#0F1112] pt-14 pb-3 w-full items-center`
      )}
    >
      <View style={tw`w-11/12 mx-auto flex-row items-center justify-between`}>
        <HeaderLeft name="Malet"></HeaderLeft>
        <HeaderRight></HeaderRight>
      </View>
    </View>
  );
};
