import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../GlobalStyles";
import { signIn } from "../services/api";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import FirstSignUp from "./FirstSignUp";
import { useNavigation } from "@react-navigation/core";
import SignUp1 from "./SignUp1";

const SecondSignUp = ({ navigation }) => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");

  return (
    <GestureHandlerRootView>
      <ScrollView scrollContainer={{ flexGrow: 1 }}>
        <View style={styles.signUp}>
          <StatusBar
            style={styles.upBars1}
            contentFit="cover"
            //  hidden
          />
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
              onChangeText={(text) => setFirstName(text)}
              value={firstname}
              placeholder="First name"
            />

            <View style={[styles.lastNameWrapper]}>
              <TextInput
                style={[
                  styles.lastName,
                  styles.nameTypo,
                  styles.nameWrapperLayout,
                ]}
                onChangeText={(text) => setLastName(text)}
                value={lastname}
                placeholder="Last name"
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
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Omitoyinayomide20@gmail.com"
            />
          </View>
          <View style={[styles.dee002Wrapper]}>
            <Text style={[styles.username, styles.usernamePosition]}>
              Username
            </Text>

            <FirstSignUp />
            <TextInput
              style={[styles.dee002, styles.wrapperLayout]}
              onChangeText={(text) => setUserName(text)}
              value={username}
              placeholder="Dee002"
            />
          </View>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.dateOfBirth, styles.datePosition]}>
              Date of Birth
            </Text>
            <TextInput style={[styles.TextInput16]}>16/09/1995</TextInput>
          </View>

          <View style={{ top: 400 }}>
            <SignUp1 />
            <Pressable
              style={styles.proceedWrapper}
              onPress={async () => {
                try {
                  // Call signIn function with state variables
                  const userData = await signIn(
                    firstname,
                    lastname,
                    username,
                    email,
                    phone,
                    password,
                    cpassword
                  );
                  // Handle successful sign-in (e.g., navigate to another screen)
                  navigation.navigate("SignUp2");
                  console.log("User signed up:", userData);
                } catch (error) {
                  // Handle sign-in error
                  console.error("Error signing up:", error.message);
                }
              }}
            >
              <Text style={styles.proceed}>Proceed</Text>
            </Pressable>
            <Text style={[styles.bySigningUpyouContainer, styles.letsYou]}>
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
    top: 600,
    width: 275,
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
    fontSize: FontSize.size_base,
    borderRadius: Border.br_7xs,
    position: "absolute",
    overflow: "hidden",
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
  bySigningUpyouContainer: {
    top: 630,
    width: 349,
  },
  firstName: {
    marginLeft: -75,
    paddingHorizontal: 10,
  },
  firstNameWrapper: {
    left: 20,
    width: 155,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 0,
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
    top: 550,
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
    left: 220,
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
    top: 530,
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
    height: 1500, // Set the height to take the size of the screen
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
