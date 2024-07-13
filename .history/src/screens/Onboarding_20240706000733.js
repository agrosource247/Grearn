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
//scaling
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");
// Define the ImageSlider component
const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      source: require("../assets/undraw_invest_re_8jl5.png"),
      width: 290, // Replace with your desired width
      height: 164,
    },
    {
      source: require("../assets/undraw_finance_re_gnv2.png"),
      width: 307, // Replace with your desired width
      height: 184,
    },
    {
      source: require("../assets/undraw_online_payments_re_y8f2 1.png"),
      width: 317, // Replace with your desired width
      height: 205,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  const currentImage = images[currentImageIndex];
  return (
    <View style={styles.imageStyles}>
      <Image
        source={currentImage.source}
        style={{ width: currentImage.width, height: currentImage.height }}
        resizeMode="cover"
      />
    </View>
  );
};
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

          <View>
            <Text style={styles.seamlessStyle}>
              Make seamless <Text style={{ color: "#6CBC37" }}>Investment</Text>{" "}
              with <Text style={{ color: "#6CBC37" }}>Grearn</Text>
            </Text>
          </View>
          {/* image below is the loading bar */}
          <Image
            style={styles.loadingbarStyle}
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
