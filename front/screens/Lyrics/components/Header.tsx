import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import SimpleIcon from "components/Icons/SimpleIcon";
import TextIcon from "components/Icons/TextIcon";

interface LyricsHeaderProp {
  onPress: () => void;
}

export default function Header({ onPress }: LyricsHeaderProp) {
  return (
    <View style={tw`flex-row justify-between w-full items-center h-10`}>
      <TouchableOpacity onPress={onPress}>
        <SimpleIcon name="chevron-back" type="ionicon" size={30}></SimpleIcon>
      </TouchableOpacity>
      <View>
        <TextIcon
          iconName="heart-outline"
          iconType="ionicon"
          text="100"
        ></TextIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
