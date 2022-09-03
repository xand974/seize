import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MainLayout from "components/core/MainLayout";
import tw from "twrnc";
import defaultStyle from "styles/_globals";
import InputField from "components/UI/InputField";
import CtmButton from "components/UI/Button";
import { RouteType } from "types/index";
import RoundedIcon from "components/UI/RoundedIcon";
import { COLORFUL_IMG } from "helpers/assets.helpers";

export default function RegisterScreen({ navigation }: RouteType) {
  const register = (e: Event) => {
    console.log("here");
  };

  const redirect = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <MainLayout uri={COLORFUL_IMG}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`h-[70%]`}>
        <View style={tw`w-10/12 mx-auto`}>
          <Text
            style={tw.style(
              styles.text,
              defaultStyle.text_color,
              `font-bold text-2xl`
            )}
          >
            Ready to become {"\n"} the best artist !
          </Text>

          <View style={tw`mt-10 w-full`}>
            <InputField title="Email" type="email" placeholder="je@gmail.fr" />
            <InputField title="Nom d'artiste" type="text" placeholder="sunly" />
            <InputField
              title="Mot de passe"
              type="password"
              placeholder="****"
            />
            <CtmButton
              text="Créer un compte"
              onPress={register}
              ctmStyle={`w-8/12 mx-auto mt-4 h-10 rounded-xl`}
            />
          </View>
          <View style={tw`mt-7`}>
            <Text style={tw.style(defaultStyle.text_color, `font-thin `)}>
              Vous avez déjà un compte ?{" "}
              <Text onPress={() => redirect()} style={tw`underline`}>
                Connectez-vous
              </Text>
            </Text>
            <View style={tw`h-[500px] pt-10`}>
              <RoundedIcon iconName="google"></RoundedIcon>
              <Text
                style={tw.style(
                  defaultStyle.text_color,
                  `text-center font-thin`
                )}
              >
                S'inscrire avec Google
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "MontserratBold",
  },
});
