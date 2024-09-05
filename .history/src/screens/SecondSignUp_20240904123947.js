import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import styles from "../styles/SecondSignUpstyles";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import React from "react";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import MyCancel from "./MyCancel";
// Component: SecondSignUp
const SecondSignUp = ({ navigation }) => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [dob, setDob] = React.useState("");

  //to change the bordercolor of the Textinputs
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUserNameFocused, setIsUserNameFocused] = useState(false);
  const [isCountryFocused, setIsCountryFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isDobInputFocused, setIsDobInputFocused] = useState(false);
  const [isCreatePasswordFocused, setIsCreatePasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

  //Removing Zeroes
  const handlePhoneChange = (text) => {
    //removing leading zeroes
    if (text.startsWith("0")) {
      text = text.replace(/^0+/, "");
    }
    setPhone(text);
  };
  // Handle sign-up logic
  const handleSignUpData = async () => {
    if (!firstname) return alert("Firstname field is required.");
    if (!lastname) return alert("Lastname field is required.");
    if (!username) return alert("Username field is required.");
    if (!phone) return alert("Phone field is required.");
    if (!email) return alert("Email field is required.");
    if (!password) return alert("Password field is required.");
    if (!cpassword) return alert("Comfirm Password field is required.");

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

      if (res.status === 200) {
        navigation.navigate("SignIn");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <GestureHandlerRootView>
      <MyCancel navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.signUpContainer}>
          <StatusBar style={styles.upBars1} contentFit="cover" />
          <View
            style={{
              marginTop: moderateScale(20),
              justifyContent: "space-between",
              flexDirection: "row",
              width: width * 0.9,
            }}
          >
            <Text style={styles.welcome}>Welcome</Text>
            <View
              style={{
                marginTop: moderateVerticalScale(12),
                marginRight: width * 0.055,
              }}
            >
              <View style={styles.groupChild} />
              <View style={styles.groupItem} />
              <View style={[styles.frameViewLayout]} />
              <View style={[styles.frameViewLayout]} />
            </View>
          </View>

          <Text style={[styles.letsGetYouTypo]}>
            Let's get you started with your free account
          </Text>

          <View>
            <Text style={[styles.yourPosition]}>
              Your full name (as shown on your ID)
            </Text>

            <View style={styles.firstLastNameContainer}>
              <TextInput
                style={[
                  styles.firstName,
                  styles.firstNameWrapperLayout,
                  isFirstNameFocused && {
                    borderWidth: 1,
                    borderColor: Color.colorYellowgreen_100,
                  },
                ]}
                onChangeText={setFirstname}
                value={firstname}
                placeholder="First name"
                color="black"
                onFocus={() => setIsFirstNameFocused(true)}
                onBlur={() => setIsFirstNameFocused(false)}
              />
              <TextInput
                style={[
                  styles.lastName,
                  isLastNameFocused && {
                    borderWidth: 1,
                    borderColor: Color.colorYellowgreen_100,
                  },
                ]}
                onChangeText={setLastname}
                value={lastname}
                placeholder="Last name"
                color="black"
                onFocus={() => setIsLastNameFocused(true)}
                onBlur={() => setIsLastNameFocused(false)}
              />
            </View>
          </View>

          <View style={styles.omitoyinayomide20gmailcomWrapper}>
            <Text style={[styles.emailformat]}>Email Address</Text>
            <TextInput
              style={[
                styles.EmailPosition,
                isEmailFocused && {
                  borderWidth: 1,
                  borderColor: Color.colorYellowgreen_100,
                },
              ]}
              onChangeText={setEmail}
              value={email}
              placeholder="Omitoyinayomide20@gmail.com"
              color="black"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
            <Text style={styles.usernamePosition}>Username</Text>
            <TextInput
              style={[
                styles.userNameInput,
                isUserNameFocused && {
                  borderWidth: 1,
                  borderColor: Color.colorYellowgreen_100,
                },
              ]}
              onChangeText={setUsername}
              value={username}
              placeholder="UserName"
              color="black"
              onFocus={() => setIsUserNameFocused(true)}
              onBlur={() => setIsUserNameFocused(false)}
            />
            <View
              style={{
                flexDirection: "row",
                marginTop: verticalScale(30),
                width: "90%",
              }}
            >
              {/* this is the country border */}
              <View>
                <Text style={[styles.countryPosition]}>Country</Text>
                <TextInput
                  style={[
                    styles.countrywrapperBorder,
                    isCountryFocused && {
                      borderWidth: 1,
                      borderColor: Color.colorYellowgreen_100,
                    },
                  ]}
                  value={country}
                  onChangeText={setCountry}
                  placeholder="+234"
                  maxLength={4}
                  keyboardType="numeric"
                  color="black"
                  onFocus={() => setIsCountryFocused(true)}
                  onBlur={() => setIsCountryFocused(false)}
                />
              </View>
              <View style={{ justifyContent: "center", width: width * 0.9 }}>
                <Text style={styles.ctryPosition}>Phone Number</Text>
                <TextInput
                  style={[
                    styles.phonewrapperBorder,
                    isPhoneNumberFocused && {
                      borderWidth: 1,
                      borderColor: Color.colorYellowgreen_100,
                    },
                  ]}
                  placeholder="9049733613"
                  value={phone}
                  onChangeText={handlePhoneChange}
                  keyboardType="numeric"
                  color="black"
                  onFocus={() => setIsPhoneNumberFocused(true)}
                  onBlur={() => setIsPhoneNumberFocused(false)}
                />
              </View>
            </View>
            <View style={[styles.dobwrapper]}>
              <Text
                style={{
                  color: Color.colorGray_300,
                  fontFamily: FontFamily.poppinsMedium,
                  fontWeight: "500",
                  fontSize: FontSize.size_smi,
                }}
              >
                Date of Birth
              </Text>
              <TextInput
                style={[
                  styles.DobInput,
                  isDobInputFocused && {
                    borderWidth: 1,
                    borderColor: Color.colorYellowgreen_100,
                  },
                ]}
                onChangeText={setDob}
                value={dob}
                placeholder="16/09/1995"
                color="black"
                onFocus={() => setIsDobInputFocused(true)}
                onBlur={() => setIsDobInputFocused(false)}
              />
            </View>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <View style={styles.frameCreate}>
                <Text style={styles.passPosition}>Create password</Text>
                <TextInput
                  style={[
                    styles.passwordWrapperLayout,
                    isCreatePasswordFocused && {
                      borderWidth: 1,
                      borderColor: Color.colorYellowgreen_100,
                    },
                  ]}
                  placeholder="Enter password"
                  color="black"
                  onFocus={() => setIsCreatePasswordFocused(true)}
                  onBlur={() => setIsCreatePasswordFocused(false)}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <Text style={[styles.yourPasswordMust]}>
                Your password must have a minimum of 8 characters, which should
                include an uppercase, lowercase, a number, and a special
                character
              </Text>
              <View style={styles.frameConfirm}>
                <Text style={styles.passwordPosition}>Confirm password</Text>
                <TextInput
                  style={[
                    styles.confirmPasswordBorder,
                    isConfirmPasswordFocused && {
                      borderWidth: 1,
                      borderColor: Color.colorYellowgreen_100,
                    },
                  ]}
                  placeholder="Confirm password"
                  color="black"
                  onFocus={() => setIsConfirmPasswordFocused(true)}
                  onBlur={() => setIsConfirmPasswordFocused(false)}
                  onChangeText={setCPassword}
                  value={cpassword}
                />
              </View>
            </View>
            <Pressable style={styles.proceedWrapper} onPress={handleSignUpData}>
              <Text style={styles.proceed}>Proceed</Text>
            </Pressable>
          </View>
          <View style={styles.letsYou}>
            <Text>
              <Text style={styles.haveAnAccount1}>
                By signing Up, you agree to our
              </Text>
              <Text style={styles.termsAndConditions}>
                Terms and Conditions
              </Text>
              <Text style={styles.haveAnAccount1}> and </Text>
              <Text style={styles.termsAndConditions}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default SecondSignUp;
