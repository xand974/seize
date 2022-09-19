import { Keyboard, ScrollView, StyleSheet, View } from "react-native";
import SecondLayout from "components/core/SecondLayout";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputField from "components/UI/InputField";
import tw from "twrnc";
import { HomeNavigationProp } from "types";
import DetailCard from "components/UI/Cards/DetailCard/DetailCard";
import CtmText from "components/core/CtmText";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<HomeNavigationProp>();
  const [searchResult, setSearchResult] = useState([1, 2, 3, 4, 5, 5, 8, 9]);

  const changeText = (text: string) => {
    setSearchText(text);
  };

  const touchStart = () => {
    Keyboard.dismiss;
  };

  return (
    <SecondLayout>
      <View style={tw`w-11/12 mx-auto mt-5`}>
        <InputField
          textStyle="text-xl text-center"
          name="search"
          title="What are you looking for ?"
          type="text"
          placeholder="search for lyrics, artist,.."
          setText={changeText}
          value={searchText}
        />
      </View>
      {searchText.length > 3 && (
        <ScrollView
          style={tw`w-11/12 mx-auto flex-4`}
          onTouchStart={touchStart}
        >
          <CtmText type="MontserratRegular" style="mb-5 text-xl">
            Top des résultats pour {searchText}
          </CtmText>
          {searchResult.map((item, id) => (
            <DetailCard state="Lyrics" key={id} />
          ))}
        </ScrollView>
      )}
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
