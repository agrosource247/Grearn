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

const { width, height } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StatusBar />

        <View style={styles.onboarding}>
          <View
            style={{
              width: 289,
              height: 163,
              top: 291,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/undraw_invest_re_8jl5.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.frame}>
            <Image
              style={styles.frameChild}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
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
