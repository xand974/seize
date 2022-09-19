import { sampleLyrics } from "mock/data";
import { StyleSheet, View } from "react-native";
import tw from "twrnc";
import CtmText from "components/core/CtmText";
import { useMemo, useState } from "react";

interface LyricsTextProp {
  shrink?: boolean;
}
export default function LyricsText({ shrink = false }: LyricsTextProp) {
  const THRESHOLD = useMemo(() => 3, []);
  const [expand, setExpand] = useState(shrink);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <View style={tw``}>
      {sampleLyrics.map((item, id) => (
        <View key={id}>
          {shrink && expand ? (
            <>
              {id <= THRESHOLD ? (
                <View style={tw`mb-5`}>
                  <CtmText type="MontserratBold" style="text-xl">
                    {item.text}
                  </CtmText>
                </View>
              ) : (
                <>
                  {id === sampleLyrics.length - 1 && (
                    <CtmText
                      type="MontserratBold"
                      style="text-xl mb-5"
                      onPress={toggleExpand}
                    >
                      ...
                    </CtmText>
                  )}
                </>
              )}
            </>
          ) : (
            <View style={tw`mb-5`}>
              <CtmText type="MontserratBold" style="text-xl">
                {item.text}
              </CtmText>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
