import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Pressable, Dimensions, Image } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/Onboardingstyles";
import { Color, FontFamily } from "../../GlobalStyles";
//importing imageSlider
import ImageSlider from "./imageSlider";
//loading bar slider
import LoadingBarSlider from "../loadingBarSlider";
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
          <ImageSlider />

          {/* <LoadingBarSlider /> */}
          {/* this is the frame for the get started button and the login */}
          <View style={styles.frame1}>
            <LoadingBarSlider />
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
