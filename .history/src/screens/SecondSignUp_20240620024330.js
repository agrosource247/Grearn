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
            <Text
              style={[
                styles.emailAddress,
                (style = {
                  left: -140,
                  color: Color.colorGray_300,
                  top: 15,
                  fontFamily: FontFamily.poppinsMedium,
                  fontWeight: "500",
                  fontSize: FontSize.size_smi,
                }),
              ]}
            >
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
            <Text style={[styles.username, styles.usernamePosition]}>
              Username
            </Text>
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

          <View style={[styles.wrapper, styles.wrapperLayout]}>
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
            <Text style={[styles.letsYou]}>
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
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  country: {
    width: 54,
    marginLeft: -110.5,
  },
  countryPosition: {
    color: Color.colorGray_300,
    marginTop: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: "50%",
    position: "absolute",
  },
  ctryPosition: {
    color: Color.colorGray_300,
    marginTop: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: 150,
  },
  frame11: {
    width: 230,
  },
  frameLayout1: {
    width: 370,
  },
  frame2: {
    top: -140,
    left: 19,
  },

  frameConfirm: {
    top: 130,
    left: 5,
  },
  yourPasswordMust: {
    top: 220,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: 332,
    marginLeft: -179,
    left: 215,
  },
  frameCreate: {
    top: 160,
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordWrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 40,
    left: 25,
  },
  confirmPasswordBorder: {
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 100,
    left: 20,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    padding: 10,
  },
  passwordPosition: {
    color: Color.colorGray_300,
    top: 100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -160,
    left: 190,
  },

  phonewrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 2,
    top: -27,
    width: 200,
    marginHorizontal: 10,
    left: 120,
    borderColor: Color.colorGainsboro_100,
  },
  countrywrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 2,
    top: -27,
    width: 70,
    left: 0,
    borderColor: Color.colorGainsboro_100,
  },
  textTypo: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 100,
  },
  RightTextTypo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    paddingTop: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  frame12: {
    height: 48,
    top: 18,
    left: 0,
    width: 360,
    position: "absolute",
  },

  TextInput16: {
    width: 400,
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    fontSize: FontSize.size_base,
    left: 0,
    paddingHorizontal: 10,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },

  letsYou: {
    top: 350,
    width: 400,
    left: 27,
    color: Color.colorDimgray_200,
  },
  TextInputAlign: {
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    width: 100,
  },
  frameViewLayout: {
    width: 16,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: 5,
    position: "absolute",
  },
  focusedInput: {
    borderColor: Color.colorYellowgreen_100, // Set border color to green when focused
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 30,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    left: 195,
    position: "absolute",
  },
  nameWrapperLayout: {
    height: 48,
    width: 200,
    borderWidth: 2,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 200,
    fontSize: FontSize.size_3xl,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  nameTypo: {
    height: 15,
    width: 66,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    marginTop: -8,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
  },
  wrapperLayout: {
    width: 400,
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,

    left: 25,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  text1Position: {
    padding: 10,
    marginLeft: -164,
    height: 15,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    top: "50%",
    marginTop: -8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  usernamePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -200,
    left: "50%",
    position: "absolute",
  },
  datePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    left: "50%",
    position: "absolute",
  },
  yourPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    left: "50%",
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: 19,
    width: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: 0,
    width: 16,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    left: 50,
  },
  frameView: {
    left: 70,
  },
  frameParent: {
    top: 137,
    left: 335,
    width: 83,
    height: 5,
    position: "absolute",
  },
  welcome: {
    marginLeft: -200,
    top: 122,
    fontSize: FontSize.size_3xl,
    width: 110,
    height: 28,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    color: Color.colorGray_700,
    position: "absolute",
  },
  cancel: {
    marginLeft: -200,
    fontSize: FontSize.size_smi,
    top: 70,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  haveAnAccount1: {
    color: Color.colorDimgray_200,
  },
  text: {
    color: Color.colorGray_700,
  },
  haveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  haveAnAccountContainer: {
    marginLeft: 30,
  },
  letsGetYou: {
    top: 110,
    width: 275,

    color: Color.colorDimgray_200,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },

  firstName: {
    marginLeft: -75,
    paddingHorizontal: 10,
  },
  firstNameWrapper: {
    left: 25,
    width: 140,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  omitoyinayomide20gmailcom: {
    width: 200,
  },
  omitoyinayomide20gmailcomWrapper: {
    top: 470,
    left: 165,
  },
  text1: {
    width: 73,
  },
  wrapper: {
    top: 48,
    left: 20,
  },
  dee002: {
    width: 50,
    padding: 10,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  dee002Wrapper: {
    top: 380,
  },
  lastName: {
    marginLeft: -70,
    paddingHorizontal: 10,
  },
  lastNameWrapper: {
    left: 215,
    width: 100,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: -1,
  },
  yourFullNameas: {
    marginTop: 170,
    width: 245,
  },
  emailAddress: {
    marginTop: -45,
    width: 102,
  },
  dateOfBirth: {
    marginTop: -45,
    width: 87,
  },
  username: {
    marginTop: -20,
    width: 72,
  },
  proceed: {
    marginTop: -15,
    marginLeft: -44,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,

    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  proceedWrapper: {
    top: 450,
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 25,
    backgroundColor: Color.colorYellowgreen_100,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 1100, // Set the height to take the size of the screen
    paddingBottom: 20, // Adjust if needed
  },
});

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

const MyCancel2 = () => {
  return (
    <View>
      <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
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
