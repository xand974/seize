import CtmText from "components/core/CtmText";
import Badge from "components/UI/Badge/Badge";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { ScrollView } from "react-native";
import CtmButton from "components/UI/Buttons/ColorButton";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function LyricsOptions() {
  const navigation = useNavigation<HomeNavigationProp>();
  const options = [
    {
      placeholder: "130",
      maxLength: 3,
      text: "BPM",
    },
  ];

  const moods = [
    {
      name: "Love",
    },
    {
      name: "Emotional",
    },
    {
      name: "Dance",
    },
    {
      name: "Ego Trip",
    },
    {
      name: "Boom Bap",
    },
  ];

  const genre = [
    {
      name: "Drill",
    },
    {
      name: "Emotional",
    },
    {
      name: "Boom Bap",
    },
    {
      name: "Jersey",
    },
    {
      name: "Disco",
    },
    {
      name: "Pop",
    },
  ];

  const sendLyrics = () => {
    navigation.navigate("LoadingScreen");
  };
  return (
    <View>
      <CtmText type="MontserratBold" style="text-2xl mb-5 text-center">
        About your lyrics
      </CtmText>
      {options.map((item, id) => (
        <View style={tw`flex-row mb-5 items-center`} key={id}>
          <TextInput
            placeholder={item.placeholder}
            style={tw`text-xl bg-white text-black font-bold items-center w-15 mr-4 pb-1 rounded-md px-3`}
            maxLength={item.maxLength}
          />
          <CtmText type="MontserratRegular" style="text-xl">
            {item.text}
          </CtmText>
        </View>
      ))}

      <View style={tw` mb-5`}>
        <CtmText type="MontserratBold" style="text-2xl">
          Moods
        </CtmText>
        <ScrollView
          horizontal
          style={tw`flex-row mt-3 `}
          showsHorizontalScrollIndicator={false}
        >
          {moods.map((item, id) => (
            <TouchableOpacity style={tw`mr-2`} key={id}>
              <Badge
                content={item.name}
                style="text-xl"
                state="Default"
                textStyle="text-sm"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={tw` mb-10`}>
        <CtmText type="MontserratBold" style="text-2xl">
          Genre
        </CtmText>
        <ScrollView
          horizontal
          style={tw`flex-row mt-3 `}
          showsHorizontalScrollIndicator={false}
        >
          {genre.map((item, id) => (
            <TouchableOpacity style={tw`mr-2`} key={id}>
              <Badge
                content={item.name}
                style="text-xl"
                state="Default"
                textStyle="text-sm"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={tw``}>
        <CtmButton
          onPress={sendLyrics}
          text="SHARE"
          ctmStyle="py-2 rounded-lg"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
