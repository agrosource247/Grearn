<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "../styles/SecondSignUpstyles";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
// Component: MyCancel
const MyCancel = ({ navigation }) => (
  <View
    style={{
      justifyContent: "space-between",
      alignContent: "center",
      flexDirection: "row",
      width: width * 0.9,
    }}
  >
    <Text
      style={[styles.cancelPosition]}
      onPress={() => navigation.navigate("Onboarding")}
    >
      Cancel
    </Text>

    <View style={[styles.haveAnAccountContainer]}>
      <Text style={styles.haveAnAccount}>
        <Text style={styles.haveAnAccount1}>Have an account?</Text>
        <Text
          style={styles.logIn}
          onPress={() => navigation.navigate("SignIn")}
        >
          Log in
        </Text>
      </Text>
    </View>
  </View>
);
=======
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const MyCancel = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    // Navigate to the login page
    // Example: navigation.navigate("LoginPage");
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.frame1}>
      <Text style={[styles.cancel]}>Cancel</Text>

      <Text style={[styles.haveAnAccountContainer, styles.haveAnAccount]}>
        Have an account?
      </Text>
      <Pressable onPress={handleLoginPress}>
        <Text style={[styles.loginLink]}>LogIn</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  frame1: {
    top: 30,
    left: 40,
  },
  cancel: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    fontSize: FontSize.size_smi,
    top: 10,
    marginLeft: -235,
  },
  loginLink: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: -10,
    left: 350,
  },
  haveAnAccountContainer: {
    marginLeft: 25,
    fontSize: FontSize.size_smi,
    left: 200,
    position: "absolute",
  },
  haveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_200,
    top: 10,
  },
});
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
export default MyCancel;
