import * as React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.onboarding}>
      <StatusBar
        barStyle="default"
        translucent={true}
        contentFit="cover"
        hidden
      />
      <Image
        style={styles.untitledDesign51}
        contentFit="cover"
        source={require("../assets/untitled-design-5-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  untitledDesign51: {
    top: 180,
    left: -35,
    width: 500,
    height: 500,
    position: "absolute",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SplashScreen;
