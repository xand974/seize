import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import tw from "twrnc";
import defaultStyle from "../../styles/_globals";

type InputFieldType = {
  title: string;
  type: string;
  placeholder: string;
};
export default function InputField({
  title,
  type,
  placeholder,
}: InputFieldType) {
  return (
    <View style={tw`mb-6`}>
      <Text
        style={tw.style(
          defaultStyle.text_color,
          `mb-2 font-extralight text-sm`
        )}
      >
        {title}
      </Text>
      <TextInput
        style={tw`bg-[rgba(255,255,255,0.18)] text-[16px] px-4 py-2 rounded-md text-white`}
        secureTextEntry={type === "password" ? true : false}
        placeholder={placeholder}
        placeholderTextColor="#ffffff42"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
