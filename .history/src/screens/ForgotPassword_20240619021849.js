import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
import { Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const { setAuth } = UseAuth();

  const handleForgotPwd = async () => {
    if (!email) return alert("Email field is required!.");
    try {
      const res = await apiRequest.post("/pwd/forgot-password", { email });
      await setAuth({ id: res.data.id, token: res.data.token });
      if (res.status === 200) navigation.navigate("ResetPassword");
      else alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GestureHandlerRootView>
      <View style={[styles.background]}>
        <View style={[styles.frameCreate]}>
          <Text style={[styles.createPosition]}>
            Enter your Email address to reset password
          </Text>
        </View>

        <View style={[styles.omitoyinayomide20gmailcomWrapper]}>
          <Text>Email Address</Text>
          <TextInput
            style={[styles.text1Position, styles.wrapperLayout]}
            onChangeText={setEmail} // update email state with new value entered by user
            value={email}
            placeholder="Omitoyinayomide20@gmail.com"
            color="black"
          />
        </View>

        <Pressable style={styles.proceedWrapper} onPress={handleForgotPwd}>
          <Text style={styles.proceed}>Proceed</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.colorWhite,
    width: screenWidth,
    height: screenHeight,
    overflow: "hidden",
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
    top: 40,
    // marginTop: -8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  omitoyinayomide20gmailcomWrapper: {
    top: 470,
    left: 165,
  },

  emailAddress: {
    marginTop: -45,
    width: 102,
  },
  frameConfirm: {
    top: 130,
    left: 5,
  },
  frameCreate: {
    top: 160,
  },
  groupLayout: {
    backgroundColor: Color.colorYellowgreen_400,
    borderRadius: Border.br_2xs,
  },
  welcomePosition: {
    textAlign: "left",
    left: "50%",
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 30,
    left: "50%",
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
});

export default ForgotPassword;
