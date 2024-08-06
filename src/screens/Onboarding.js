<<<<<<< HEAD
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

=======
import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const Onboarding = ({ navigation }) => {
	return (
		<GestureHandlerRootView>
			<ScrollView>
				<View style={styles.onboarding}>
					<View style={[styles.frame, styles.frameLayout]}>
						<Image style={styles.frameChild} contentFit="cover" source={require("../assets/group-7.png")} />
					</View>
					<View style={styles.frame1}>
						<Pressable style={[styles.getStartedWrapper, styles.wrapperLayout]} onPress={() => navigation.navigate("SecondSignUp")}>
							<Text style={[styles.getStarted, styles.logInTypo]}>Get Started</Text>
						</Pressable>
						<Pressable style={[styles.logInWrapper, styles.wrapperLayout]} onPress={() => navigation.navigate("SignIn")}>
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

>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
export default Onboarding;
