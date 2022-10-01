import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { ToastProp } from "../../types/index";

export default function Toast({ status, message }: ToastProp) {
  return (
    <View style={tw`absolute z-10 left-0 w-100 h-50 bg-red-200`}>
      <Text>TEST</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
