import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import CtmText from "../core/CtmText";

type ToggleButtonType = {
  setSection: (section: string) => void;
};
export default function ToggleButton({ setSection }: ToggleButtonType) {
  const [buttonItems, setButtonItems] = useState([
    {
      title: "Top Lyrics",
      contentDisplayed: "topLyrics",
      isActive: true,
    },
    {
      title: "Top Interpretations",
      contentDisplayed: "topInterpretations",
      isActive: false,
    },
  ]);

  const setSectionSelected = (section: string) => {
    setButtonItems((prev) => {
      const mapped = prev.map((item) => {
        if (item.contentDisplayed === section) {
          return {
            ...item,
            isActive: true,
          };
        }
        return {
          ...item,
          isActive: false,
        };
      });

      return [...mapped];
    });
    setSection(section);
  };

  return (
    <View style={tw`flex-row w-11/12 mx-auto bg-black h-8 rounded-xl`}>
      {buttonItems.map((item, id) => (
        <TouchableOpacity
          onPress={() => setSectionSelected(item.contentDisplayed)}
          key={id}
          style={tw.style(
            item.isActive ? styles.active : styles.inactive,
            `flex-1 items-center justify-center`
          )}
        >
          <CtmText type="MontserratLight">{item.title}</CtmText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#7D7AFF",
    height: "100%",
    borderRadius: 10,
  },
  inactive: {},
});
