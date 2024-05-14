import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const SignUp1 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.signUp}>
        <View style={[styles.frameCreate]}>
          <Text style={[styles.createPosition]}>Create password</Text>
          <TextInput
            style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
            placeholder="Enter password"
          />
        </View>
        <Text style={[styles.yourPasswordMust, styles.logInTypo]}>
          Your password must have a minimum of 8 characters, which should
          include an uppercase, lowercase, a number, and a special character
        </Text>
        <View style={[styles.frameConfirm]}>
          <Text style={[styles.passwordPosition]}>Confirm password</Text>
          <TextInput
            style={[styles.confirmPasswordBorder, styles.confirmPosition]}
            placeholder="Confirm password"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  signUp: {
    paddingBottom: 20, // Add padding to the bottom to prevent cut-off content
  },
  // Your other styles remain unchanged
});

export default SignUp1;
