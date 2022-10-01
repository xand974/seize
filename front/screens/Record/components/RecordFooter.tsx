import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import CtmIcon from "components/Icons/CtmIcon";
import { ActionType, RecordFooterType } from "types";

export default function RecordFooter({
  isRecording,
  setRecordAction,
  type,
  disabled = false,
}: RecordFooterType) {
  const recordActions = {
    record: [
      {
        icon: "play-skip-back",
        tag: "playBack",
      },
      {
        icon: isRecording ? "ios-stop-outline" : "play-outline",
        tag: "play",
      },
      {
        icon: "checkmark",
        tag: "validate",
        style: isRecording ? "bg-gray-200" : "bg-green-600",
      },
    ],
    edit: [
      {
        icon: "play-skip-back",
        tag: "playBack",
      },
      {
        icon: isRecording ? "ios-stop-outline" : "play-outline",
        tag: "play",
      },
      {
        icon: "image-outline",
        tag: "uploadImage",
      },
      {
        icon: "eye-outline",
        tag: "seePreview",
      },
      {
        icon: "checkmark",
        tag: "validate",
        style: isRecording ? "bg-gray-200" : "bg-green-600",
      },
    ],
  } as ActionType;
  return (
    <View style={tw`w-full h-20`}>
      <View
        style={tw`w-10/12 h-full flex-row items-center mx-auto justify-center`}
      >
        {recordActions[type].map((item, id) => (
          <CtmIcon
            disabled={item.tag === "validate" && isRecording}
            key={id}
            onPress={() => setRecordAction(item.tag)}
            type="ionicon"
            name={item.icon}
            size={
              id % Object.keys(recordActions).length !== 0 && type !== "edit"
                ? 30
                : 20
            }
            parentStyle={[
              id % Object.keys(recordActions).length !== 0 && type !== "edit"
                ? "w-30"
                : "",
              item.style ?? "",
            ].join(" ")}
          ></CtmIcon>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
