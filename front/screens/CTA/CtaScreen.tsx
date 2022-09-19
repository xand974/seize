import { StyleSheet, View } from "react-native";
import SecondLayout from "components/core/SecondLayout";
import { useLayoutEffect } from "react";
import CtmText from "components/core/CtmText";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import StepTitle from "components/UI/StepTitle/StepTitle";
import ColorButton from "components/UI/Buttons/ColorButton";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";

export default function CtaScreen() {
  const navigation = useNavigation<HomeNavigationProp>();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const cta = [
    {
      text: "Mettre en ligne une prod",
      tag: "uploadProd",
    },
    {
      text: "Écrire un seize",
      tag: "writeLyrics",
    },
    {
      text: "Défis",
      tag: "challenge",
    },
    {
      text: "Duo",
      tag: "duo",
    },
  ];

  const handleCta = (action: string) => {
    switch (action) {
    }
  };
  return (
    <SecondLayout>
      <SafeAreaView>
        <View style={tw`mt-10 w-11/12 mx-auto`}>
          <StepTitle lightText="Choose a" purpleText="action"></StepTitle>
          <View
            style={tw`w-9/12 mx-auto mt-5 h-10/12 items-center justify-center`}
          >
            {cta.map((item, id) => (
              <ColorButton
                key={id}
                text={item.text}
                onPress={() => handleCta(item.tag)}
                ctmStyle="py-4 rounded-lg mb-5"
              ></ColorButton>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SecondLayout>
  );
}

const styles = StyleSheet.create({});
