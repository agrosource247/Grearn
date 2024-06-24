import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.onboarding}>
          <View style={styles.frame}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-7.png")}
            />
          </View>
          <View style={styles.frame1}>
            <Pressable
              style={styles.getStartedWrapper}
              onPress={() => navigation.navigate("SecondSignUp")}
            >
              <Text style={styles.getStarted}>Get Started</Text>
            </Pressable>
            <Pressable
              style={styles.logInWrapper}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={styles.logIn}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  frame: {
    height: height * 0.618, // 61.8% of the screen height
    alignItems: "center",
  },
  frameChild: {
    width: width * 0.1, // 10% of the screen width
    height: height * 0.005, // 0.5% of the screen height
    marginTop: height * 0.59, // 59% of the screen height
  },
  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    height: height * 0.06, // 6% of the screen height
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  logInWrapper: {
    borderStyle: "solid",
    // borderColor: Color.colorYellowgreen_100,
    borderWidth: 1 / 2,
    marginTop: height * 0.03, // 3% of the screen height
    justifyContent: "center",
    height: height * 0.06, // 6% of the screen height
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  getStarted: {
    color: Color.colorGainsboro_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  frame1: {
    marginTop: 0,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default Onboarding;
