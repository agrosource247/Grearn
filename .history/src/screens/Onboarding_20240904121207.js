import React from "react";
import { View, Text, Pressable, SafeAreaView } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/Onboardingstyles";
import ImageSlider from "./imageSlider";
import LoadingBarSlider from "../loadingBarSlider";

const Onboarding = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          {/* <StatusBar /> */}
          <View style={styles.onboarding}>
            <ImageSlider />
            <View style={styles.frame1}>
              <LoadingBarSlider />
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
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Onboarding;
