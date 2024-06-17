import React, { useState } from "react";

import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
const SignIn = ({ navigation }) => {
  const {setAuth}=UseAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  //   navigation.navigate("NewUserDashboard");
  try {
    const res = await apiRequest.post(`/auth/signin`, {
      email,
      password,
    });
    if (res.status === 200) {
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      navigation.navigate("NewUserDashboard");
    } else Alert("Error",res.data.message)
  } catch (err) {
    console.log(err);
  } 
};
  

  const handleSignUpPress = () => {
    // Navigate to the SignUp page

    navigation.navigate("SignUp1");
  };
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.signIn}>
          <StatusBar
            barStyle="default"
            translucent={true}
            contentFit="cover"
            // hidden
          />
          <View style={{ top: -30 }}>
            <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
            <Text style={[styles.dontHaveAnContainer, styles.cancelTypo]}>
              <View style={{ top: 20 }}>
                <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              </View>
              <Pressable onPress={handleSignUpPress}>
                <Text style={[styles.signUp, styles.dontHaveContainer]}>
                  Sign Up
                </Text>
              </Pressable>
            </Text>
          </View>
          <Text style={styles.logIn}>Log in</Text>
          <Text style={[styles.enterYourEmail, styles.signUpTypo]}>
            Enter your email and password to log in
          </Text>

          <View style={[styles.omitoyinayomide20gmailcomWrapper]}>
            <Text style={[styles.emailAddress, styles.passwordTypo]}>
              Email Address
            </Text>
            <TextInput
              value={email}
              style={[styles.enterPasswordPosition, styles.EmailwrapperLayout]}
              placeholder="omitoyinayomide20gmailcom"
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={[styles.enterPasswordWrapper]}>
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>

            <TextInput
              value={password}
              style={[styles.enterPasswordPosition, styles.wrapperLayout]}
              placeholder="Enter password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <Pressable style={styles.logInWrapper} onPress={handleLogin}>
            <Text style={styles.logIn1}>Log In</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  cancelTypo: {
    fontSize: FontSize.size_smi,
    left: 205,
  },
  signUpTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: -25,
  },
  EmailwrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    position: "absolute",
    left: 25,
  },
  enterPasswordPosition: {
    paddingHorizontal: 10,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    marginLeft: 0,
    marginTop: -8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  passwordTypo: {
    height: 16,
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },

  logIn: {
    marginLeft: -200,
    top: 80,
    fontSize: FontSize.size_3xl,
    left: "50%",
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  cancel: {
    top: 75,
    fontSize: FontSize.size_smi,
    marginLeft: -180,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  dontHaveAn: {
    color: Color.colorDimgray_200,
  },
  text: {
    color: Color.colorGray_700,
  },
  dontHaveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  signUp: {
    color: Color.colorYellowgreen_100,
  },
  dontHaveAnContainer: {
    marginHorizontal: 20,

    marginTop: 50,
  },
  dontHaveContainer: {
    marginHorizontal: 10,
    marginTop: 0,
  },
  enterYourEmail: {
    top: 120,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_smi,
    left: "50%",
    position: "absolute",
    marginLeft: -200,
  },
  logIn1: {
    marginTop: -15,
    marginLeft: -31,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    top: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  logInWrapper: {
    top: 500,
    backgroundColor: Color.colorYellowgreen_100,
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 25,
  },

  omitoyinayomide20gmailcomWrapper: {
    top: 150,
    left: 0,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  emailAddress: {
    marginTop: -45,
    marginLeft: -200,
    position: "absolute",
    overflow: "hidden",
  },

  enterPasswordWrapper: {
    top: 250,
    left: 50,
  },
  password: {
    marginTop: -35,
    marginLeft: -250,
  },
  signIn: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SignIn;
