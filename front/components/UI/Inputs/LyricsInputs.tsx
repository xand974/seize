import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import tw from "twrnc";
import font from "styles/_font";
import { TextInputChangeEventData } from "react-native";

type LyricsInputType = {
  placeholder: string;
  style?: string;
  submitEdit: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  value: string;
  setLine: ({ text, id }: { text: string; id: number }) => void;
  onChange: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
export default function LyricsInputs({
  placeholder,
  style,
  setLine,
  submitEdit,
  value,
  onChange,
}: LyricsInputType) {
  return (
    <View style={tw`${style ?? ""}`}>
      <TextInput
        blurOnSubmit={false}
        keyboardType="default"
        returnKeyType="next"
        defaultValue={value}
        onChange={onChange}
        onChangeText={(t) => setLine({ text: t, id: 0 })}
        style={tw.style(
          font.MontserratBold,
          `text-[20px] px-4 py-2 rounded-md text-white`
        )}
        onSubmitEditing={submitEdit}
        placeholder={placeholder}
        placeholderTextColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
