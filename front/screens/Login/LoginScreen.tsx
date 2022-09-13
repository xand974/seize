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
import { RouteType } from "types/app.types";
import { redirect } from "helpers/utils.helpers";
import RoundedIcon from "components/Icons/RoundedIcon";
import { COLORFUL_IMG } from "helpers/assets.helpers";
import CtmText from "components/core/CtmText";
import CtmButton from "components/UI/Buttons/ColorButton";
import { useNavigation } from "@react-navigation/native";
import { CredentialModel } from "types";
import { useState } from "react";

export default function LoginScreen() {
  const [credential, setCredential] = useState({
    password: "",
    artistName: "",
  } as Partial<CredentialModel>);

  const navigation = useNavigation();

  const login = () => {
    console.log(credential);

    redirect(navigation, "GetStartedScreen");
  };

  const changeText = (name: string, text: string) => {
    setCredential((prev) => ({
      ...prev,
      [name]: text,
    }));
  };

  return (
    <MainLayout uri={COLORFUL_IMG}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={tw`h-[70%]`}>
        <View style={tw`w-10/12 mx-auto`}>
          <CtmText style={`font-bold text-2xl`} type="MontserratBold">
            Welcome Back !
          </CtmText>

          <View style={tw`mt-10 w-full`}>
            <InputField
              value={credential.artistName}
              setText={changeText}
              name="artistName"
              title="Nom d'artiste"
              type="text"
              placeholder="sunly"
            />
            <InputField
              setText={changeText}
              value={credential.password}
              name="password"
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
            <CtmText type="MontserratThin">
              Vous n'avez pas de compte ?{" "}
              <CtmText
                onPress={() => redirect(navigation, "RegisterScreen")}
                style={`underline`}
                type="MontserratMedium"
              >
                Créer un compte
              </CtmText>
            </CtmText>
            <View style={tw`h-[500px] pt-10`}>
              <RoundedIcon iconName="google"></RoundedIcon>
              <CtmText style={`text-center`} type="MontserratThin">
                Se connecter avec Google
              </CtmText>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </MainLayout>
  );
}

const styles = StyleSheet.create({});
