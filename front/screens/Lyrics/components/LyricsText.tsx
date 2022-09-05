import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import CtmText from "../../../components/core/CtmText";

export default function LyricsText() {
  const lyrics = [
    "Le jour ou",
    "Qu'est-ce qu'une ombre dans la nuit (dans la nuit)",
    "Qu'est-ce que la nuit pour la mort (pour la mort)",
    "Qu'est-ce que la mort pour un Homme libre",
    `Une arme libre en dehors de son corps, J'me demande où ça nous mène`,
    `Quand j'aime, j'y mets toute mon âme`,
    `J'ai vu le grand feu s'allumer`,
    "J'ai la flamme, j'y mets toute mon âme (mon âme)",
    "J'ai la flamme, j'y mets toute mon âme (mon âme)",
    "J'ai la flamme, j'y mets toute mon âme (mon âme)",
    `Jolies courbes, elle était tellement belle nue`,
    `Amour bestial durant la pleine lune`,
    `On l'a fait dans tout l'appart' en renversant les cendars`,
  ];
  return (
    <View style={tw``}>
      {lyrics.map((item, id) => (
        <View key={id} style={tw`mb-5`}>
          <CtmText type="MontserratBold" style="text-xl">
            {item}
          </CtmText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
