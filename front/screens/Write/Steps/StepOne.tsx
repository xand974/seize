import CtmText from "components/core/CtmText";
import ColorButton from "components/UI/Buttons/ColorButton";
import InputField from "components/UI/InputField";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import {
  TextInputChangeEventData,
  TextInputSubmitEditingEventData,
} from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
} from "react-native";
import tw from "twrnc";
import LyricsInputs from "components/UI/Inputs/LyricsInputs";
import { useState } from "react";

export default function StepOne() {
  const [line, setLine] = useState("");
  const [text, setText] = useState([line] as string[]);

  // TODO HANDLE THIS
  // * the idea is whenever we press on a input, it add an index and add an empty text
  // * if the input is not empty - just edit the input
  // * when we press enter, go to the next one or add one input in between
  // *
  const nextLine = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    setText((prev) => {
      return [...prev, line];
    });
    setLine("");
  };

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {};

  return (
    <SafeAreaView>
      <Image
        source={{ uri: DEFAULT_PERSON }}
        resizeMode="cover"
        blurRadius={20}
        style={tw`absolute w-full h-[${
          Dimensions.get("window").height
        }px] top-0 left-0 opacity-90`}
      />
      <ScrollView horizontal={false} style={tw`h-full mt-10`}>
        <View style={tw`w-11/12 mx-auto`}>
          <View style={tw`w-8/12 mx-auto mb-5`}>
            <CtmText type="MontserratSemiBold" style="text-2xl text-center">
              pop_smoke
            </CtmText>
            <View style={tw`w-3/12 mx-auto my-4 h-[1px] bg-[#6e6e6e]`}></View>
            <InputField title="" type="text" placeholder="Votre titre..." />
          </View>
          <View style={tw`mb-5`}>
            {text.map((item, key) => (
              <LyricsInputs
                key={key}
                onChange={onChange}
                setLine={setLine}
                value={item}
                submitEdit={nextLine}
                placeholder="enter your lyrics here"
              ></LyricsInputs>
            ))}
          </View>
          <View
            style={tw`flex-row w-10/12 mx-auto items-center justify-center`}
          >
            <ColorButton
              onPress={() => {}}
              text="GO"
              ctmStyle="w-8/12 py-3 rounded-xl"
            ></ColorButton>
            <ColorButton
              status="dark"
              onPress={() => {}}
              text="Enregistrer"
              ctmStyle="w-8/12 py-3 rounded-xl"
            ></ColorButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
