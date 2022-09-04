import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MainLayout from "components/core/MainLayout";
import tw from "twrnc";
import InputField from "components/UI/InputField";
import CtmButton from "components/Buttons/ColorButton";
import { RouteType } from "types/index";
import RoundedIcon from "components/Icons/RoundedIcon";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import CtmText from "components/core/CtmText";

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
          <CtmText type="MontserratSemiBold" style={`font-bold text-2xl`}>
            Ready to become {"\n"} the best artist !
          </CtmText>

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
            <CtmText style={`font-thin`} type="MontserratThin">
              Vous avez déjà un compte ?{" "}
              <CtmText
                onPress={() => redirect()}
                style={`underline`}
                type="MontserratMedium"
              >
                Connectez-vous
              </CtmText>
            </CtmText>
            <View style={tw`h-[500px] pt-10`}>
              <RoundedIcon iconName="google"></RoundedIcon>
              <CtmText type="MontserratThin" style={`text-center font-thin`}>
                S'inscrire avec Google
              </CtmText>
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
