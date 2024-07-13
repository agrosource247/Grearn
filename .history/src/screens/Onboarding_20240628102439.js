import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/Onboardingstyles";
import { Color, FontFamily } from "../../GlobalStyles";
//scaling
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <StatusBar />
        <View style={styles.onboarding}>
          <View
            style={{
              width: scale(289),
              height: scale(163),
              top: verticalScale(291),

              // alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/undraw_invest_re_8jl5.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            <View style={{ marginTop: 63 }}>
              <Text
                style={{
                  color: "#171717",
                  fontSize: 24,
                  width: 340,
                  height: 81,
                  fontFamily: FontFamily.poppinsSemiBold,
                }}
              >
                Make seamless{" "}
                <Text style={{ color: "#6CBC37" }}>Investment</Text> with{" "}
                <Text style={{ color: "#6CBC37" }}>Grearn</Text>
              </Text>
            </View>
          </View>

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

export default Onboarding;
