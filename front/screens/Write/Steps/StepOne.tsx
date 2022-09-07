import CtmText from "components/core/CtmText";
import ColorButton from "components/UI/Buttons/ColorButton";
import InputField from "components/UI/InputField";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import {
  TextInput,
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
import { RefObject, useRef, useState, useEffect } from "react";
import React from "react";
import { sleep } from "helpers/utils.helpers";

type LineType = {
  key: number;
  text: string;
};
export default function StepOne() {
  const [refs, setRefs] = useState([] as RefObject<TextInput>[]);

  const inputRef = useRef<TextInput>(null);
  const [line, setLine] = useState({
    key: 0,
    text: "",
  } as LineType);
  const [currentText, setCurrentText] = useState([{ ...line }] as LineType[]);

  // TODO HANDLE THIS
  // * the idea is whenever we press on a input, it add an index and add an empty text
  // * if the input is not empty - just edit the input
  // * when we press enter, go to the next one or add one input in between
  const nextLine = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {};

  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {};

  const submit = () => {
    renderCurrentText();
    const nextKey = getNextKey();
    const isNextLineExisting = existNextLine(nextKey);
    if (!isNextLineExisting) {
      addNextLine(nextKey);
    }

    focusNextLine(nextKey);
  };

  const getNextKey = () => line.key + 1;

  const existNextLine = (key: number) => {
    return currentText.some((item) => item.key === key);
  };

  const focusNextLine = async (key: number) => {
    const refEl = refs[key];
    if (!refEl) return;
    const inputElement = refs[key].current;
    if (!inputElement) return;
    inputElement.focus();
  };

  const renderCurrentText = () => {
    setCurrentText((prev) => {
      const newTexts = prev.map((item) => {
        if (item.key === line.key) {
          return {
            ...item,
            text: line.text,
          };
        }
        return {
          ...item,
        };
      });
      return [...newTexts];
    });
  };

  const addNextLine = (nextKey: number): void => {
    setCurrentText((prev) => [
      ...prev,
      {
        key: nextKey,
        text: "",
      },
    ]);
  };

  const addNextText = (key: number) => {
    setLine((prev) => {
      return {
        text: prev.text,
        key,
      };
    });
  };

  const changeText = (line: string, key: number) =>
    setLine({ text: line, key });

  useEffect(() => {
    console.log("hier trigger effect");

    setRefs((prev) => {
      prev = [];
      for (let i = 0; i < currentText.length; i++) {
        prev.push(React.createRef());
      }
      return prev;
    });
    console.log(refs.length);
  }, [currentText.length]);

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
            <CtmText type="MontserratBold">{refs.length}</CtmText>
            {currentText.map((_, key) => (
              <TextInput
                ref={refs[key]}
                key={key}
                onFocus={() => addNextText(key)}
                placeholder="enter text here"
                onChangeText={() => changeText(line.text, key)}
                onSubmitEditing={submit}
                blurOnSubmit={false}
              ></TextInput>
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
