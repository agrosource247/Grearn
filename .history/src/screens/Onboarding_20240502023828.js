import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, FontSize, Color } from "/GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
const Onboarding = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.onboarding}>
          <View style={[styles.frame, styles.frameLayout]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-7.png")}
            />
          </View>
          <View style={styles.frame1}>
            <Pressable
              style={[styles.getStartedWrapper, styles.wrapperLayout]}
              // onPress={() => navigation.navigate("FirstSignUp")}
            >
              <Text style={[styles.getStarted, styles.logInTypo]}>
                Get Started
              </Text>
            </Pressable>
            <Pressable
              style={[styles.logInWrapper, styles.wrapperLayout]}
              // onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  frameLayout: {},
  wrapperLayout: {
    justifyContent: "center",
    height: 60,
    borderRadius: Border.br_7xs,
    width: 400,
    alignItems: "center",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },

  frameChild: {
    width: 42,
    height: 5,
    marginTop: 590,
  },
  frame: {
    height: 618,
    alignItems: "center",
  },
  getStarted: {
    color: Color.colorGainsboro_100,
  },
  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
  },
  logInWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    marginTop: 30,
  },
  frame1: {
    marginTop: 0,
    width: 400,
    alignItems: "center",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",

    height: 1000,
    alignItems: "center",
  },
});

export default Onboarding;
