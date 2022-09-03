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
import { RouteType } from "types/app.types";
import { redirect } from "helpers/utils.helpers";
import RoundedIcon from "components/UI/RoundedIcon";
import { COLORFUL_IMG } from "helpers/assets.helpers";

export default function LoginScreen({ navigation }: RouteType) {
  const login = () => {};
  return (
    <MainLayout uri={COLORFUL_IMG}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`h-[70%]`}>
        <View style={tw`w-10/12 mx-auto`}>
          <Text style={tw.style(defaultStyle.text_color, `font-bold text-2xl`)}>
            Welcome Back !
          </Text>

          <View style={tw`mt-10 w-full`}>
            <InputField title="Nom d'artiste" type="text" placeholder="sunly" />
            <InputField
              title="Mot de passe"
              type="password"
              placeholder="****"
            />
            <CtmButton
              text="Se connecter"
              onPress={login}
              ctmStyle={`w-8/12 mx-auto mt-4 h-10 rounded-xl`}
            />
          </View>
          <View style={tw`mt-7`}>
            <Text style={tw.style(defaultStyle.text_color, `font-thin `)}>
              Vous n'avez pas de compte ?{" "}
              <Text
                onPress={() => redirect(navigation, "RegisterScreen")}
                style={tw`underline`}
              >
                Créer un compte
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
                Se connecter avec Google
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
