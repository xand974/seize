import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import tw from "twrnc";
import defaultStyle from "../../styles/_globals";
import CtmText from "../core/CtmText";

type InputFieldType = {
  title: string;
  type: string;
  placeholder: string;
  setText: (name: string, text: string) => void;
  name: string;
  value: any;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
export default function InputField({
  title,
  type,
  placeholder,
  setText,
  value,
  name,
}: InputFieldType) {
  return (
    <View style={tw`mb-6`}>
      <CtmText style={`mb-2 font-extralight text-sm`} type="MontserratLight">
        {title}
      </CtmText>
      <TextInput
        onChangeText={(text) => setText(name, text)}
        value={value}
        style={tw`bg-[rgba(255,255,255,0.18)] text-[16px] px-4 py-2 rounded-md text-white`}
        secureTextEntry={type === "password" ? true : false}
        placeholder={placeholder}
        placeholderTextColor="#ffffff42"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
