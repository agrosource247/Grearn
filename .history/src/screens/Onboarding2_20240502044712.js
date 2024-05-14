import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

import { FontFamily, FontSize, Color } from "../../GlobalStyles";

const Onboarding2 = () => {
  return (
    <View style={styles.onboarding}>
      <View style={styles.frame}>
        <View style={[styles.getStartedWrapper, styles.wrapperLayout]}>
          <Text style={[styles.getStarted, styles.logInTypo]}>Get Started</Text>
        </View>
        <View style={[styles.logInWrapper, styles.wrapperLayout]}>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frame1Position]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-72.png")}
        />
        <Image
          style={[styles.upBars1, styles.frame1Position]}
          contentFit="cover"
          source={require("../assets/up-bars-11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 60,
    borderRadius: Border.br_7xs,
    left: 0,
    width: 358,
    position: "absolute",
    overflow: "hidden",
  },
  logInTypo: {
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: "50%",
    top: "50%",
    marginTop: -15,
    position: "absolute",
  },
  frame1Position: {
    width: 337,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  getStarted: {
    marginLeft: -62,
    color: Color.colorGainsboro_100,
    width: 124,
  },
  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    top: 0,
    borderRadius: Border.br_7xs,
  },
  logIn: {
    marginLeft: -30,
    color: Color.colorYellowgreen_100,
    width: 61,
  },
  logInWrapper: {
    top: 88,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
  },
  frame: {
    top: 654,
    left: 36,
    height: 148,
    width: 358,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 613,
    left: 151,
    width: 42,
    height: 5,
    position: "absolute",
  },
  upBars1: {
    height: 37,
    left: 0,
    width: 337,
  },
  frame1: {
    left: 47,
    height: 618,
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

export default Onboarding2;
