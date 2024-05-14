import * as React from "react";
import { Image } from "expo-image";
import { signIn } from "../services/api";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { FontFamily, Color, Border, FontSize, Input } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MyCancel from "../../src/screens/MyCancel";
import LoadingBar from "../../src/screens/LoadingBar";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const FirstSignUp = ({ phone }) => {
  // Function to check if both input fields are filled

  return (
    <View style={styles.signUp}>
      <View style={[styles.frame2, styles.frameLayout1]}>
        <View>
          <View>
            <View style={[styles.frame11]}>
              <Text style={[styles.country, styles.countryPosition]}>
                Country
              </Text>
              <Text style={[styles.countryPosition]}>Phone Number</Text>
            </View>

            <View style={styles.frame12}>
              <View style={[styles.wrapper]}>
                <TextInput
                  style={[styles.text1, styles.RightTextTypo]}
                  placeholder="9049733613"
                  value={phone}
                  maxLength={Input.phone_}
                  keyboardType="numeric" // Use keyboardType prop instead of type
                />
              </View>
              <View style={[styles.container]}>
                <TextInput
                  style={[styles.text2, styles.textTypo, styles.wrapperBorder]}
                  placeholder="+234"
                  value={""}
                  maxLength={Input.country}
                  keyboardType="numeric" // Use keyboardType prop instead of type
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp: {
    // borderRadius: Border.br_smi,
    // backgroundColor: Color.colorWhite,
    flex: 1,

    position: "absolute",
  },
  frame: {
    left: 36,
    height: 89,
    width: 360,
  },
  framePosition3: {
    top: 0,
    position: "absolute",
  },
  containerFlexBox: {
    textAlign: "left",
    left: "50%",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameLayout1: {
    width: 370,
  },
  framePosition2: {
    //welxome position
    height: 28,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 16,
    backgroundColor: Color.colorYellowgreen_400,

    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
    position: "absolute",
  },
  framePosition1: {
    left: 3,
    width: 360,
    position: "absolute",
  },
  countryPosition: {
    color: Color.colorGray_300,
    marginTop: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: "50%",
    position: "absolute",
  },
  wrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 2,
    top: -27,
    width: 140,
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
  RightTextTypo: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    paddingTop: 10,
    // paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  frame14Layout: {
    height: 39,
    position: "absolute",
  },
  frame15Position: {
    height: 60,
  },
  frameIcon: {
    left: 11,
    height: 37,
    width: 349,
  },
  cancel: {
    width: 51,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    left: "50%",
    fontSize: FontSize.size_smi,
    top: 0,
    marginLeft: -180,
    height: 19,
    position: "absolute",
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
    marginLeft: 19,
    width: 161,
    fontSize: FontSize.size_smi,
    top: 0,
    left: "50%",
    textAlign: "left",
    height: 19,
    position: "absolute",
  },
  frame1: {
    top: 30,
    height: 19,
    left: 0,
    width: 360,
    position: "absolute",
  },

  frameChild: {
    left: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    top: 0,
  },
  frameItem: {
    left: 45,
  },
  frameInner: {
    left: 64,
  },
  frameView: {
    left: 83,
  },
  frameParent: {
    height: 5,
    width: 83,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame6: {
    left: 276,
    height: 10,
    width: 83,
    top: 20,
  },
  welcome: {
    marginLeft: -179.5,
    fontSize: FontSize.size_3xl,
    width: 110,
    textAlign: "left",
    left: "50%",
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frame5: {
    width: 359,
    left: 0,
    // overflow: "hidden",
  },
  frame4: {
    width: 363,
    // overflow: "hidden",
    left: 0,
  },
  letsGetYou: {
    width: 300,
    color: Color.colorDimgray_200,
    textAlign: "left",
    left: "50%",
    fontSize: FontSize.size_smi,
    top: 0,
    marginLeft: -180,
    height: 19,
    position: "absolute",
  },
  frame7: {
    top: 42,
    height: 19,
  },
  frame3: {
    height: 61,
    left: 0,
    top: 0,
  },
  country: {
    width: 54,
    marginLeft: -110.5,
  },

  frame11: {
    width: 230,
  },
  frame10: {
    width: 400,
  },
  text1: {
    marginLeft: -110.5,
  },
  wrapper: {
    left: 150,
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 2,
    width: 250,
    top: 20,
    height: 48,
    borderRadius: Border.br_7xs,
  },
  text2: {
    marginLeft: -47.5,
  },
  container: {
    width: 100,
  },
  frame12: {
    height: 48,
    top: 18,
    left: 0,
    width: 360,
    position: "absolute",
  },

  termsAndConditions: {
    //color to terms and conditions

    color: Color.colorYellowgreen_100,
  },
  bySigningUpyouContainer: {
    //styling to the text above PROCEED
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
    fontSize: FontSize.size_smi,

    marginLeft: -180,
    width: 400,
  },
  frame14: {
    top: 100,
    left: -15,
    width: 400,
    // overflow: "hidden",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  proceedWrapper: {
    width: 400,

    borderRadius: Border.br_7xs,
    paddingVertical: 10,
    paddingHorizontal: 150,
    backgroundColor: Color.colorYellowgreen_100,
  },

  frame13: {
    top: 400,
  },
  frame8: {
    top: 100,
    height: 640,
  },
  frame2: {
    top: -140,
    left: 19,
  },
});

export default FirstSignUp;
