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
import CtmText from "../core/CtmText";

interface InputFieldProp {
  title: string;
  type: string;
  placeholder: string;
  setText: (text: string, name?: string) => void;
  name: string;
  value: any;
  textStyle?: string;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}
export default function InputField({
  title,
  type,
  placeholder,
  textStyle,
  setText,
  value,
  name,
}: InputFieldProp) {
  return (
    <View style={tw`mb-6`}>
      <CtmText
        style={`mb-2 font-extralight text-sm ${textStyle ?? ""}`}
        type="MontserratLight"
      >
        {title}
      </CtmText>
      <TextInput
        onChangeText={(text) => setText(text, name)}
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
