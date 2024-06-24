import * as React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "./path/to/your/styles"; // Update the path to your styles

const SignIn = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signIn}>
          <View style={styles.topContainer}>
            <Text style={styles.cancel}>Cancel</Text>
            <View style={styles.signUpContainer}>
              <Text style={styles.dontHaveAn}>Don't have an account?</Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUp}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.logIn}>Log In</Text>
          <Text style={styles.enterYourEmail}>Enter your email</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <Pressable
            style={styles.logInButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.logInButtonText}>Log In</Text>
          </Pressable>
          <View style={styles.forgotPwdContainer}>
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <Text style={styles.forgotPwd}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default SignIn;
