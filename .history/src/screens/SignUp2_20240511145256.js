import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const SignUp2 = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.signUp}>
          <Text style={[styles.verifyYourPhone, styles.clickResendIfPosition]}>
            Verify your phone
          </Text>

          <Text
            style={[styles.pleaseEnterThe, styles.pleaseEnterTheTypo]}
          >{`Please enter the 6 digit code sent to 
+2349049733613`}</Text>
          <Text style={[styles.clickResendIf, styles.resendTypo]}>
            Click resend if you dont get a code in 30secs
          </Text>
          <GestureHandlerRootView>
            <View style={{ left: 0, width: 400 }}>
              <TextInput
                placeholder="x"
                style={[styles.signUpChild, styles.signChildLayout]}
              />
              <TextInput
                placeholder="x"
                style={[styles.signUpItem, styles.signChildLayout]}
              />
              <TextInput
                placeholder="x"
                style={[styles.signUpInner, styles.signChildLayout]}
              />
              <TextInput
                placeholder="x"
                style={[styles.signUpChild1, styles.signChildLayout]}
              />
              <TextInput
                placeholder="x"
                style={[styles.signUpChild2, styles.signChildLayout]}
              ></TextInput>
              <TextInput
                placeholder="x"
                style={[styles.signUpChild3, styles.signChildLayout]}
              />
            </View>
          </GestureHandlerRootView>
          <Text style={[styles.enterThe6, styles.text1Position]}>
            Enter the 6 digit code
          </Text>
          <Text style={[styles.resendCode, styles.text1Position]}>
            Resend code
          </Text>
          <Text style={[styles.text1, styles.text1Position]}>0:17</Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 16,
    backgroundColor: Color.colorYellowgreen_400,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
  },
  clickResendIfPosition: {
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 70,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  resendTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  pleaseEnterTheTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -190,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  signChildLayout: {
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 273,
    borderRadius: Border.br_7xs,
    width: 51,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text1Position: {
    top: "50%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },

  groupChild: {
    left: 57,
    width: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 19,
  },
  frameView: {
    left: 38,
  },
  frameParent: {
    top: 140,
    left: 335,
    position: "absolute",
  },
  verifyYourPhone: {
    top: 122,
    fontSize: FontSize.size_3xl,

    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: "50%",
    marginLeft: -190,
  },
  cancel: {
    width: 51,
    height: 19,
    fontSize: FontSize.size_smi,
    top: 70,
    marginLeft: -190,
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
    fontSize: FontSize.size_smi,
    top: 70,
  },
  pleaseEnterThe: {
    top: 164,

    color: Color.colorDimgray_200,
  },
  clickResendIf: {
    top: 349,
    fontSize: FontSize.size_5xs,
    color: Color.colorGray_500,
    width: 181,
    height: 11,
    marginLeft: -170,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    fontWeight: "500",
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  bySigningUpyouContainer: {
    top: 600,
    width: 349,
  },
  signUpChild: {
    left: 30,
  },
  signUpItem: {
    left: 96,
  },
  signUpInner: {
    left: 158,
  },
  signUpChild1: {
    left: 230,
  },
  signUpChild2: {
    left: 300,
  },
  signUpChild3: {
    left: 370,
  },
  enterThe6: {
    marginTop: -100,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginLeft: -170,
  },
  resendCode: {
    marginTop: 50,
    color: Color.colorYellowgreen_300,
    width: 92,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginLeft: -170,
    height: 16,
  },
  text1: {
    marginTop: 80,
    marginLeft: -170,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
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
    top: 500,
    left: 25,
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    position: "absolute",
  },
  signUp: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,

    // width: "100%",

    // top: 400,
  },
});

export default SignUp2;
