import React from "react";
import { View, Text, Pressable, Dimensions, Image } from "react-native";
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
          <View style={styles.imageStyles}>
            <Image
              source={require("../assets/undraw_invest_re_8jl5.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            {/* Top image */}
          </View>

          <View>
            <Text style={styles.seamlessStyle}>
              Make seamless <Text style={{ color: "#6CBC37" }}>Investment</Text>{" "}
              with <Text style={{ color: "#6CBC37" }}>Grearn</Text>
            </Text>
          </View>
          {/* image below is the loading bar */}
          <Image
            style={{}}
            contentFit="cover"
            source={require("../assets/group-7.png")}
          />
          {/* this is the frame for the get started button and the login */}
          <View style={styles.frame1}>
            {/* the getStarted button */}
            <Pressable
              style={styles.getStartedWrapper}
              onPress={() => navigation.navigate("SecondSignUp")}
            >
              <Text style={styles.getStarted}>Get Started</Text>
            </Pressable>
            {/* bellow i the login button */}
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
