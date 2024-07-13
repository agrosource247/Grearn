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
          <View
            style={{
              width: scale(290),
              height: scale(163),
              top: verticalScale(254),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/undraw_invest_re_8jl5.png")}
              resizeMode="cover"
            />
          </View>
          //Top image
          <View>
            <Text
              style={{
                // color: "#171717",
                fontSize: 24,
                width: 340,
                height: 81,
                fontFamily: FontFamily.poppinsSemiBold,
              }}
            >
              Make seamless{" "}
              <Text style={Color.colorYellowgreen_100}>Investment</Text> with{" "}
              <Text style={Color.colorYellowgreen_100}>Grearn</Text>
            </Text>
          </View>
          <Image
            // style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-7.png")}
          />
          <View>
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
