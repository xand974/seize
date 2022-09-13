import CtmText from "components/core/CtmText";
import ColorButton from "components/UI/Buttons/ColorButton";
import InputField from "components/UI/InputField";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
  TextInputKeyPressEventData,
  TextInputSubmitEditingEventData,
} from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
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
  const [canRender, setCanRender] = useState(false);
  const [line, setLine] = useState({
    key: 0,
    text: "",
  } as LineType);
  const [currentText, setCurrentText] = useState([{ ...line }] as LineType[]);

  // TODO remove input when pressing remove and when text input value is empty
  // TODO handle go next line pressing enter

  const submit = (): void => {
    const nextKey = getNextKey();
    const isNextLineExisting = existNextLine(nextKey);
    if (!isNextLineExisting) {
      addNextLine(nextKey);
    }
    focusNextLine(nextKey);
  };

  const getNextKey = (): number => line.key + 1;

  const existNextLine = (key: number): boolean =>
    currentText.some((item) => item.key === key);

  const focusNextLine = async (nextKey: number): Promise<void> => {
    const refEl = refs[nextKey];
    if (!refEl) return;
    const inputElement = refs[nextKey].current;
    if (!inputElement) return;
    inputElement.focus();
  };

  const renderCurrentText = (): void => {
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

  useEffect(() => {
    // only for logs
    console.log("current line", line);
  }, [line.key]);

  const addNextLine = (nextKey: number): void => {
    setCurrentText((prev) => [
      ...prev,
      {
        key: nextKey,
        text: "",
      },
    ]);
  };

  const selectCurrentLine = (key: number, text: string): void => {
    setLine(() => ({
      text,
      key,
    }));
  };

  const changeText = (text: string, key: number): void => {
    renderCurrentText();
    setLine(() => ({
      key,
      text,
    }));
  };

  useEffect(() => {
    setRefs((prev) => {
      prev = [];
      for (let i = 0; i < currentText.length; i++) {
        prev.push(React.createRef());
      }
      return prev;
    });
  }, [currentText.length]);

  const saveTextAs = (action: "draft" | "completed"): void => {
    console.log(currentText);
  };

  const removeLine = () => {
    if (line.text !== "") return;
    setCurrentText((prev) => {
      const newText = prev.filter((item) => item.key !== line.key);

      const formatted = newText.map((item, index) => {
        return {
          ...item,
          key: index,
        };
      });

      return [...formatted];
    });
    setCanRender(true);
    const nextKey = getNextKey();
    focusNextLine(nextKey);
  };

  const handleKeyPressed = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    const keyPressed = e.nativeEvent.key;
    switch (keyPressed) {
      case "Backspace":
        removeLine();
    }
  };

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
            {currentText.map((item, key) => (
              <TextInput
                ref={refs[key]}
                key={key}
                onFocus={() => selectCurrentLine(key, item.text)}
                placeholder="enter text here"
                onChangeText={(text) => changeText(text, key)}
                onSubmitEditing={submit}
                blurOnSubmit={false}
                onKeyPress={handleKeyPressed}
              ></TextInput>
            ))}
          </View>
          <View
            style={tw`flex-row w-10/12 mx-auto items-center justify-center`}
          >
            <ColorButton
              onPress={() => {
                saveTextAs("completed");
              }}
              text="GO"
              ctmStyle="w-8/12 py-3 rounded-xl"
            ></ColorButton>
            <ColorButton
              status="dark"
              onPress={() => {
                saveTextAs("draft");
              }}
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
