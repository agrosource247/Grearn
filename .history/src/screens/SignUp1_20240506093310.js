import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

const SignUp1 = () => {
  return (
    <View style={styles.signUp}>
      <View style={[styles.frameCreate]}>
        <Text style={[styles.createPosition]}>Create password</Text>
        <TextInput
          style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
          placeholder="Enter password"
        />
      </View>
      <Text style={[styles.yourPasswordMust, styles.logInTypo]}>
        Your password must have a minimum of 8 characters, which should include
        an uppercase, lowercase, a number, and a special character
      </Text>
      <View style={[styles.frameConfirm]}>
        <Text style={[styles.passwordPosition]}>Confirm password</Text>
        <TextInput
          style={[styles.confirmPasswordBorder, styles.confirmPosition]}
          placeholder="Confirm password"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameConfirm: {
    top: 130,
    left: 5,
  },
  frameCreate: {
    top: 0,
  },
  groupLayout: {
    width: 16,
    backgroundColor: Color.colorYellowgreen_400,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  welcomePosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 30,
    left: "50%",
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  letsGetTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    textAlign: "left",
    left: "50%",
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
    alignItems: "center",
    justifyContent: "center",
  },
  confirmPasswordBorder: {
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 100,
    left: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  createWrapperLayout: {
    height: 48,
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: 36,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
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
  createPosition: {
    color: Color.colorGray_300,
    top: 40,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    left: 200,
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
  },
  groupChild: {
    left: 45,
    width: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 19,
  },
  frameView: {
    left: 83,
  },
  frameParent: {
    top: 135,
    left: 290,
    width: 83,
  },
  welcome: {
    marginLeft: -200,
    top: 122,
    fontSize: FontSize.size_3xl,
    width: 110,
    height: 28,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cancel: {
    marginLeft: -200,
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
  },
  haveAnAccountContainer: {
    marginLeft: 45,
  },
  letsGetYou: {
    top: 164,
    color: Color.colorDimgray_200,
  },
  yourPasswordMust: {
    top: 220,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: 332,
    marginLeft: -179,
    left: 215,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  bySigningUpyouContainer: {
    top: 330,
    width: 349,
  },

  enterPasswordWrapper: {
    top: 268,
  },

  createPassword: {
    marginTop: 150,
    width: 119,
  },

  proceed: {
    marginTop: -15,
    marginLeft: -44,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    width: 89,
    height: 30,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  proceedWrapper: {
    top: 280,
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 25,
    backgroundColor: Color.colorYellowgreen_100,
  },
  signUp: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 932,
  },
});

export default SignUp1;
