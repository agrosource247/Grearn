import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
// Component: MyCancel
const MyCancel = ({ navigation }) => (
  <View style={{ justifyContent: "center", alignContent: "center" }}>
    <Text
      style={[styles.cancel, styles.cancelPosition]}
      onPress={() => navigation.navigate("Onboarding")}
    >
      Cancel
    </Text>
    <View style={[styles.haveAnAccountContainer, styles.cancelPosition]}>
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
export default MyCancel;
