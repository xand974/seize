import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import CtmIcon from "components/Icons/CtmIcon";
import { ActionType, RecordFooterType } from "types";

export default function RecordFooter({
  isRecording,
  setRecordAction,
  type,
}: RecordFooterType) {
  const recordActions = {
    record: [
      {
        icon: "play-skip-back",
        tag: "PlayBack",
      },
      {
        icon: isRecording ? "ios-stop-outline" : "play-outline",
        tag: "Play",
      },
      {
        icon: "checkmark",
        tag: "Validate",
        style: isRecording ? "bg-gray-200" : "bg-green-600",
      },
    ],
    edit: [
      {
        icon: "play-skip-back",
        tag: "PlayBack",
      },
      {
        icon: isRecording ? "ios-stop-outline" : "play-outline",
        tag: "Play",
      },
      {
        icon: "image-outline",
        tag: "UploadImage",
      },
      {
        icon: "eye-outline",
        tag: "SeePreview",
      },
      {
        icon: "checkmark",
        tag: "Validate",
        style: isRecording ? "bg-gray-200" : "bg-green-600",
      },
    ],
  } as ActionType;
  return (
    <View style={tw`absolute bottom-15 left-0 w-full h-20`}>
      <View
        style={tw`w-10/12 h-full flex-row items-center mx-auto justify-center`}
      >
        {recordActions[type].map((item, id) => (
          <CtmIcon
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
