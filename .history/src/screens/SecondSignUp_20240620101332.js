import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";

import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import FirstSignUp from "./FirstSignUp";
import SignUp1 from "./SignUp1";
import styles from "../styles/SecondSignUpstyles";
import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";
const SecondSignUp = ({ navigation }) => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [dob, setDob] = React.useState("");

  const handleSignUpData = async () => {
    if (!firstname) return alert("Firstname field is required.");
    if (!lastname) return alert("Lastname field is required.");
    if (!username) return alert("Username field is required.");
    if (!phone) return alert("Phone field is required.");
    if (!email) return alert("Email field is required.");
    if (!password) return alert("Username field is required.");

    try {
      const res = await apiRequest.post("/auth/signup", {
        firstname,
        lastname,
        username,
        phone,
        email,
        password,
        cpassword,
        country,
        dob,
      });

      if (res.status === 200) navigation.navigate("SignIn");
      else alert(res.data.message);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <GestureHandlerRootView>
      <ScrollView scrollContainer={{ flexGrow: 1 }}>
        <View style={styles.signUp}>
          <StatusBar style={styles.upBars1} contentFit="cover" />
          <MyCancel2 />

          <View style={{ top: -60 }}>
            <LoadingBar2 />
            <Text style={styles.welcome}>Welcome</Text>
          </View>

          <Text style={[styles.letsGetYou, styles.letsGetYouTypo]}>
            Lets get you started with your free account
          </Text>
          <View style={{ left: -30 }}>
            <Text style={[styles.yourFullNameas, styles.yourPosition]}>
              Your full name(as shown on your ID)
            </Text>
          </View>

          <View style={[styles.firstNameWrapper]}>
            <TextInput
              style={[
                styles.firstName,
                styles.nameTypo,
                styles.nameWrapperLayout,
              ]}
              onChangeText={setFirstName}
              value={firstname}
              placeholder="First name"
              color="black"
            />

            <View style={[styles.lastNameWrapper]}>
              <TextInput
                style={[
                  styles.lastName,
                  styles.nameTypo,
                  styles.nameWrapperLayout,
                ]}
                onChangeText={setLastName}
                value={lastname}
                placeholder="Last name"
                color="black"
              />
            </View>
          </View>

          <View style={[styles.omitoyinayomide20gmailcomWrapper]}>
            <Text style={[styles.emailAddress, styles.emailformat]}>
              Email Address
            </Text>
            <TextInput
              style={[styles.text1Position, styles.wrapperLayout]}
              onChangeText={setEmail} // update email state with new value entered by user
              value={email}
              placeholder="Omitoyinayomide20@gmail.com"
              color="black"
            />
          </View>

          <View style={[styles.dee002Wrapper]}>
            <Text style={[styles.usernamePosition]}>Username</Text>
            <TextInput
              style={[styles.dee002, styles.wrapperLayout]}
              onChangeText={setUserName}
              value={username}
              placeholder="Dee002"
              color="black"
            />

            <View style={[styles.frame2, styles.frameLayout1]}>
              <View>
                <View>
                  <View style={[styles.frame11]}>
                    <Text style={[styles.country, styles.countryPosition]}>
                      Country
                    </Text>
                    <Text style={[styles.ctryPosition]}>Phone Number</Text>
                  </View>

                  <View style={styles.frame12}>
                    <View style={[styles.wrapper]}>
                      <TextInput
                        style={[
                          styles.text1,
                          styles.RightTextTypo,
                          styles.phonewrapperBorder,
                        ]}
                        placeholder="9049733613"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="numeric"
                        color="black"
                      />
                    </View>
                    <View style={[styles.container]}>
                      <TextInput
                        style={[
                          styles.text1,
                          styles.textTypo,
                          styles.countrywrapperBorder,
                        ]}
                        value={country}
                        onChangeText={setCountry}
                        placeholder="+234"
                        maxLength={4}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.dobwrapper, styles.wrapperLayout]}>
            <Text style={[styles.dateOfBirth, styles.datePosition]}>
              Date of Birth
            </Text>
            <TextInput
              style={[styles.TextInput16]}
              onChangeText={setDob}
              value={dob}
              placeholder="16/09/1995"
              color="black"
            />
          </View>

          <View style={{ top: 410 }}>
            <View>
              <View style={[styles.frameCreate]}>
                <Text style={[styles.datePosition]}>Create password</Text>
                <TextInput
                  style={[
                    styles.passwordWrapperLayout,
                    styles.passwordPosition1,
                  ]}
                  placeholder="Enter password"
                  color="black"
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <Text style={[styles.yourPasswordMust, styles.logInTypo]}>
                Your password must have a minimum of 8 characters, which should
                include an uppercase, lowercase, a number, and a special
                character
              </Text>
              <View style={[styles.frameConfirm]}>
                <Text style={[styles.passwordPosition]}>Confirm password</Text>
                <TextInput
                  style={[styles.confirmPasswordBorder, styles.confirmPosition]}
                  placeholder="Confirm password"
                  color="black"
                  onChangeText={setCPassword}
                  value={cpassword}
                />
              </View>
            </View>
            <Pressable style={styles.proceedWrapper} onPress={handleSignUpData}>
              <Text style={styles.proceed}>Proceed</Text>
            </Pressable>
            <View style={[styles.letsYou]}>
              <Text>
                <Text
                  style={styles.haveAnAccount1}
                >{`By signing Up,you agree to our `}</Text>
                <Text style={styles.termsAndConditions}>
                  Terms and Conditions
                </Text>
                <Text style={styles.haveAnAccount1}>{` and `}</Text>
                <Text style={styles.termsAndConditions}>Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const LoadingBar2 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.groupChild} />
      <View style={styles.groupItem} />
      <View style={[styles.groupInner, styles.frameViewLayout]} />
      <View style={[styles.frameView, styles.frameViewLayout]} />
    </View>
  );
};

const MyCancel2 = ({ navigation }) => {
  return (
    <View>
      <Text
        style={[styles.cancel, styles.cancelPosition]}
        onPress={() => navigation.navigate("Onboarding")}
      >
        Cancel
      </Text>
      <Text style={[styles.haveAnAccountContainer, styles.cancelPosition]}>
        <Text style={styles.haveAnAccount}>
          <Text style={styles.haveAnAccount1}>Have an account?</Text>
        </Text>
        <Text style={styles.logIn}>Log in</Text>
      </Text>
    </View>
  );
};

export default SecondSignUp;
