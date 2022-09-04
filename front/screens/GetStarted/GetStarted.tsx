import { StyleSheet, View, Image } from "react-native";
import MainLayout from "components/core/MainLayout";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import CtmButton from "components/UI/Buttons/ColorButton";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { RouteType } from "types/app.types";
import CtmText from "../../components/core/CtmText";

export default function GetStarted({ navigation }: RouteType) {
  const start = () => {
    // TODO set current user to true (for first connection only)
  };
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
        <CtmText
          type="MontserratExtraLight"
          style={`text-center mt-10 text-white font-thin text-[16px] tracking-wide`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          excepturi sed assumenda
        </CtmText>

        <CtmButton
          text="Get Started"
          onPress={start}
          ctmStyle="w-8/12 h-10 rounded-md shadow-lg absolute top-[20]"
        ></CtmButton>
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
