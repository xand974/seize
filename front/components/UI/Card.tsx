import { StyleSheet, TouchableOpacity, Image } from "react-native";
import CtmText from "../core/CtmText";
import tw from "twrnc";

type CardType = {
  onPress?: () => void;
  image?: {
    uri: string;
    style?: string;
  };
  text: {
    style: string;
    content: string;
  };
  size: "Large" | "Small";
};
export default function Card({ onPress, image, text, size }: CardType) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw.style(
        styles[size],
        `bg-[#7D7AFF] rounded-md ${size === "Small" ? "" : "mx-[2.5%]"} `
      )}
    >
      {image ? (
        <Image
          source={{ uri: image.uri }}
          resizeMode="cover"
          blurRadius={10}
          borderRadius={6}
          style={tw`h-full w-full absolute left-0 top-0 ${image.style ?? ""}`}
        />
      ) : (
        <></>
      )}
      <CtmText
        type="MontserratSemiBold"
        style={`text-center ${text.style ?? ""}`}
      >
        {text.content}
      </CtmText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Large: {
    width: "45%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  Small: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
