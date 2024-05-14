import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import 
const Onboarding1 = () => {
  return (
    <View style={styles.onboarding}>
      <View style={[styles.frame, styles.frameLayout]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-71.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={[styles.getStartedWrapper, styles.wrapperLayout]}>
          <Text style={[styles.getStarted, styles.logInTypo]}>Get Started</Text>
        </View>
        <View style={[styles.logInWrapper, styles.wrapperLayout]}>
          <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 337,
    overflow: "hidden",
  },
  wrapperLayout: {
    justifyContent: "center",
    height: 60,
    borderRadius: Border.br_7xs,
    width: 358,
    alignItems: "center",
    overflow: "hidden",
  },
  logInTypo: {
    height: 30,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  upBars1: {
    height: 37,
  },
  frameChild: {
    width: 42,
    height: 5,
    marginTop: 450,
  },
  frame: {
    height: 618,
    alignItems: "center",
  },
  getStarted: {
    color: Color.colorGainsboro_100,
    width: 124,
  },
  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    width: 61,
  },
  logInWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    marginTop: 10,
  },
  frame1: {
    marginTop: -150,
    width: 358,
    alignItems: "center",
    overflow: "hidden",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Onboarding1;
