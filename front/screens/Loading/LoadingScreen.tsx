import MainLayout from "components/core/MainLayout";
import { LinearGradient } from "expo-linear-gradient";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { useState, useEffect } from "react";
import CtmIcon from "components/Icons/CtmIcon";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "types";
import { sleep } from "helpers/utils.helpers";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<HomeNavigationProp>();

  useEffect(() => {
    setTimeout(async () => {
      setLoading(false);
      await sleep(2000);
      navigation.navigate("FeedScreen");
    }, 3000);
  }, []);

  return (
    <MainLayout>
      <View style={tw`h-8/12 relative bottom-20`}>
        <Image
          source={{ uri: COLORFUL_IMG }}
          style={tw.style(styles.img, `h-full relative `)}
          resizeMode="cover"
          blurRadius={10}
        ></Image>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          colors={[
            "transparent",
            "#21212139",
            "#21212155",
            "#2121218b",
            "#212121e6",
            "#212121",
          ]}
          style={styles.container__img__layer}
        ></LinearGradient>
      </View>
      <View style={tw`w-10/12 mx-auto flex-1`}>
        <CtmText
          type="MontserratBold"
          style={`text-center text-white font-bold text-[30px] tracking-wide`}
        >
          Seize
        </CtmText>
        {loading ? (
          <View>
            <CtmText
              type="MontserratExtraLight"
              style={`text-center my-10 text-white font-thin text-[16px] tracking-wide`}
            >
              Your masterpiece is being shared
            </CtmText>
            <ActivityIndicator />
          </View>
        ) : (
          <View>
            <CtmText
              type="MontserratLight"
              style={`text-center mt-10 mb-5 text-white font-thin text-[16px] tracking-wide`}
            >
              Success ! Redirecting to the feeds..
            </CtmText>
            <View style={tw`flex-row justify-center`}>
              <CtmIcon
                name="checkmark-circle"
                size={30}
                type="ionicon"
                color="#23ff4b"
              />
            </View>
          </View>
        )}
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  img: {},
  container__img: {},
  container__img__layer: {
    position: "absolute",
    bottom: "0%",
    width: "100%",
    height: "100%",
    zIndex: 10,
    linearGradient: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      height: 200,
      width: 350,
    },
  },
});
