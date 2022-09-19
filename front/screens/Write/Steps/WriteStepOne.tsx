import CtmText from "components/core/CtmText";
import ColorButton from "components/UI/Buttons/ColorButton";
import InputField from "components/UI/InputField";
import { DEFAULT_PERSON } from "helpers/assets.helpers";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from "react-native";
import { StyleSheet, View } from "react-native";
import tw from "twrnc";
import { RefObject, useState, useEffect } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp, LineModel } from "types";
import font from "styles/_font";
import { sampleLyrics } from "mock/data";
import ImageLayout from "components/core/ImageLayout";

interface WriteStepOneButtonType {
  status: "default" | "dark";
  tag: "draft" | "complete";
  text: string;
}

export default function WriteStepOne() {
  // TODO move this to a different component
  // TODO useReducer for clean code

  //#region Props
  const buttons = [
    {
      status: "dark",
      tag: "draft",
      text: "Enregistrer",
    },
    {
      tag: "complete",
      text: "GO",
    },
  ] as WriteStepOneButtonType[];

  const navigation = useNavigation<HomeNavigationProp>();

  // TODO handle this
  const [title, setTitle] = useState("");

  // * this keeps track of the different error that occurred
  const [error, setError] = useState(false);

  // * this keep track the TextInputs references
  const [refs, setRefs] = useState([
    React.createRef(),
  ] as RefObject<TextInput>[]);

  // * this handle whenever the focus should change
  const [canMove, setCanMove] = useState(false);

  // * this track the current line focused
  const [line, setLine] = useState({
    key: 0,
    text: "",
  } as LineModel);

  // * this corresponds to the whole text written
  const [currentText, setCurrentText] = useState([{ ...line }] as LineModel[]);
  //#endregion

  //#region Handlers
  /**
   * @name submit
   * @description
   * steps:
   *  - get the next key to check if the next input value is empty
   *  - then whether add a new line or do nothing
   *  - then focus on the next line
   * @returns {void}
   */
  const submit = (): void => {
    const nextKey = getNextKey();
    const isNextLineExisting = existNextLine(nextKey);
    if (!isNextLineExisting) {
      addNextLine(nextKey);
      return;
    }
    focusLineByKey(nextKey);
  };

  const getNextKey = (): number => line.key + 1;

  const existNextLine = (key: number): boolean =>
    currentText.some((item) => item.key === key);

  const focusLineByKey = (nextKey: number): void => {
    const refEl = refs[nextKey];
    if (!refEl) return;
    const inputElement = refs[nextKey].current;
    if (!inputElement) return;
    inputElement.focus();
  };

  const renderCurrentText = (newLine: LineModel): void => {
    setCurrentText((prev) => {
      const newTexts = prev.map((item) => {
        if (item.key === newLine.key) {
          return {
            ...item,
            text: newLine.text,
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

  const selectCurrentLine = (key: number, text: string): void => {
    setLine(() => ({
      text,
      key,
    }));
  };

  const changeText = (text: string, key: number): void => {
    setError(false);
    const newLine = { text, key } as LineModel;

    setLine(() => ({
      key,
      text: text.length === 0 ? "" : text,
    }));
    renderCurrentText(newLine);
  };

  const formatText = () => {
    setCurrentText((prev) => {
      return prev.map((item) => ({
        ...item,
        text: item.text.trim(),
      }));
    });
  };

  const saveTextAs = async (action: "draft" | "complete"): Promise<void> => {
    switch (action) {
      case "draft":
        console.log(title);
        formatText();
        await saveAsDraft();
        break;
      case "complete":
        await complete();
    }
  };

  const complete = async (): Promise<void> => {
    try {
      navigation.navigate("StepTwoScreen");
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  const removeLine = () => {
    if (line.text !== "" || currentText.length === 1) return;
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
    setCanMove(true);
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

  const saveAsDraft = async () => {
    try {
      const jsonText = JSON.stringify(currentText);
      // await AsyncStorage.setItem(`draft-${title}-v`, jsonText);
    } catch (error) {
      setError(true);
      throw error;
    }
  };

  const changeTitle = (name: string, text: string) => {
    setTitle(text);
  };
  //#endregion

  //#region  useEffects
  useEffect(() => {
    setCurrentText([...sampleLyrics]);
  }, []);

  useEffect(() => {
    if (!canMove) return;
    const key = getNextKey();
    focusLineByKey(key);
    setCanMove(false);
  }, [canMove, line.key]);

  useEffect(() => {
    setRefs((prev) => {
      prev = [];
      for (let i = 0; i < currentText.length; i++) {
        prev.push(React.createRef());
      }
      return prev;
    });
    setCanMove(true);
  }, [currentText.length]);
  //#endregion

  return (
    <ImageLayout imgUrl={DEFAULT_PERSON}>
      <View style={tw`w-11/12 mx-auto`}>
        {/* Header */}
        <View style={tw`w-8/12 mx-auto mb-5`}>
          <CtmText type="MontserratSemiBold" style="text-2xl text-center">
            pop_smoke
          </CtmText>
          <View style={tw`w-3/12 mx-auto my-4 h-[1px] bg-[#6e6e6e]`}></View>
          <InputField
            name="title"
            value={title}
            setText={changeTitle}
            title=""
            type="text"
            placeholder="Votre titre..."
          />
        </View>
        {/* Body */}
        <View style={tw`mb-5`}>
          {currentText.map((item, key) => (
            <TextInput
              style={tw.style(
                font.MontserratBold,
                `text-[20px] px-4 py-2 rounded-md text-white`
              )}
              ref={refs[key]}
              key={key}
              onFocus={() => selectCurrentLine(key, item.text)}
              placeholder="enter text here"
              onChangeText={(text) => changeText(text, key)}
              onSubmitEditing={submit}
              blurOnSubmit={false}
              value={item.text}
              onKeyPress={handleKeyPressed}
              autoCorrect={false}
            ></TextInput>
          ))}
        </View>
        {/* Footer - Buttons */}
        <View style={tw`flex-row w-10/12 mx-auto items-center justify-center`}>
          {buttons.map((item, key) => (
            <ColorButton
              key={key}
              status={item.status}
              onPress={() => {
                saveTextAs(item.tag);
              }}
              text={item.text}
              ctmStyle="w-8/12 py-3 rounded-xl"
            ></ColorButton>
          ))}
        </View>
      </View>
    </ImageLayout>
  );
}

const styles = StyleSheet.create({});
