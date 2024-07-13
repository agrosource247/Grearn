import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  emailformat: {
    paddingTop: 20,
    marginLeft: width * 0.055,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  countryPosition: {
    color: Color.colorGray_300,

    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: "50%",
  },
  ctryPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: width * 0.38,
  },
  frame11: {
    width: 230,
  },

  frame2: {
    top: -140,
    left: 19,
  },

  frameConfirm: {
    top: 90,
    alignSelf: "center",
  },
  yourPasswordMust: {
    top: 180,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: width * 0.95,
    marginLeft: -179,
    left: width * 0.55,
  },
  frameCreate: {
    top: 130,
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordWrapperLayout: {
    justifyContent: "center",
    alignContent: "center",
    height: 48,
    width: width * 0.89,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 40,
    left: 20,
  },
  confirmPasswordBorder: {
    justifyContent: "center",
    alignContent: "center",
    width: width * 0.89,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 100,
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
  },

  phonewrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: height * 0.06,
    borderWidth: 2,
    top: -27,
    width: width * 0.65, // 90% of the screen width
    marginHorizontal: 10,
    left: width * 0.35,
    borderColor: Color.colorGainsboro_100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  countrywrapperBorder: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    padding: 5,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 1,
    top: -100,
    width: 70,
    left: 0,
    borderColor: Color.colorGainsboro_100,
  },

  container: {
    justifyContent: "center",
    alignContent: "center",
  },
  RightTextTypo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    padding: 5,

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
    top: 700,
    width: width * 0.91,
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
    left: 50,
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
    top: moderateScale(70),
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  letsGetYouTypo: {
    marginTop: moderateVerticalScale(164),
    marginLeft: moderateScale(20),
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    color: Color.colorDimgray_200,
  },
  fNWrapperLayout: {
    height: 48,
    width: 150,
    borderWidth: 2,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 200,
    fontSize: FontSize.size_3xl,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  lNWrapperLayout: {
    height: 48,
    width: 170,
    borderWidth: 2,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 200,
    fontSize: FontSize.size_3xl,
    borderRadius: Border.br_7xs,
    position: "absolute",
    marginLeft: width * -0.1,
  },

  text1Position: {
    // marginLeft: width * 0.055,
    width: scale(356),
    paddingHorizontal: scale(10),
    height: 48,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    borderWidth: 1,
    borderRadius: Border.br_7xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  usernamePosition: {
    color: Color.colorGray_300,

    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.57,
    left: "62%",
    // position: "absolute",
    marginTop: height * -0.05,
  },
  datePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    left: width * 0.54,
    position: "absolute",
  },
  createPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    left: width * 0.61,
    position: "absolute",
  },
  yourPosition: {
    marginTop: scale(50),
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * 0.055,
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    // top: 0,
    // position: "absolute",
    // overflow: "hidden",
  },
  groupChild: {
    left: 19,
    width: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
  },
  groupItem: {
    width: 16,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: 5,

    position: "absolute",
  },

  frameView: {
    left: 70,
  },

  welcome: {
    alignSelf: "flex-start",
    marginHorizontal: moderateScale(20),
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorGray_700,
  },
  cancel: {
    marginLeft: -width * 0.45,

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
    justifyContent: "center",
    alignContent: "center",
  },

  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },

  firstName: {
    paddingHorizontal: moderateScale(10),
  },
  firstLastNameWrapper: {
    marginTop: moderateVerticalScale(4),
    left: 25,
    width: 140,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  omitoyinayomide20gmailcom: {
    // width: "90%",
  },
  omitoyinayomide20gmailcomWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    top: 48,
    left: 20,
  },
  numberwrapper: {
    left: -50,
  },
  dobwrapper: {
    top: 465,
    // left: width * 0.5,
  },
  dee002: {
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,

    left: width * 0.05,
    position: "absolute",
    fontSize: FontSize.size_base,
    // width: width * 0.5,
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
    paddingHorizontal: scale(10),
    borderRadius: Border.br_7xs,
    height: 48,
    width: scale(155),
    borderWidth: 1,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  firstNameWrapperLayout: {
    borderRadius: Border.br_7xs,
    height: 48,
    width: scale(155),
    borderWidth: 1,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  lastNameWrapper: {
    left: width * 0.45, // Adjusted left position using a percentage of screen width
    width: width * 0.1, // Adjusted width using a percentage of screen width
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    // top: height * -0.0025, // Adjusted top position using a percentage of screen height
  },

  dateOfBirth: {
    marginTop: -height * 0.06, // Adjusted marginTop using percentage of screen height
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
    top: 850,
    width: "90%",
    height: 60,
    borderRadius: Border.br_7xs,

    backgroundColor: Color.colorYellowgreen_100,
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  signUpContainer: {
    backgroundColor: Color.colorWhite,
    alignContent: "center",
    width: "100%",
    minHeight: moderateScale(height * 2), // Set the height to take the size of the screen
    paddingBottom: 20, // Adjust if needed
  },
});
export default styles;
