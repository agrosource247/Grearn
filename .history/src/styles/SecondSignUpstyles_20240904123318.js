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
    paddingTop: verticalScale(20),
    width: "90%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  countryPosition: {
    color: Color.colorGray_300,
    justifyContent: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
  },
  ctryPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    // left: width * 0.38,
  },

  frameConfirm: {
    marginTop: scale(30),
    justifyContent: "center",
  },
  yourPasswordMust: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: width * 0.9,
  },
  frameCreate: {
    marginTop: verticalScale(20),
    width: "90%",
  },

  passwordWrapperLayout: {
    height: 48,
    borderWidth: 1,
    width: width * 0.9,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    paddingHorizontal: scale(10),
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  confirmPasswordBorder: {
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 48,
    paddingHorizontal: scale(10),
    width: width * 0.9,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },

  passwordPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },

  phonewrapperBorder: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 1,
    width: width * 0.675, // 90% of the screen width
    paddingHorizontal: scale(10),
    borderColor: Color.colorLightgray_100,
  },
  countrywrapperBorder: {
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_7xs,
    height: 48,
    borderWidth: 1,
    width: width * 0.225,
    paddingHorizontal: scale(10),
    borderColor: Color.colorLightgray_100,
  },

  DobInput: {
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    fontSize: FontSize.size_base,
    paddingHorizontal: 10,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },

  letsYou: {
    marginTop: verticalScale(20),
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: width * 0.9,
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

  letsGetYouTypo: {
    marginTop: moderateVerticalScale(14),
    marginLeft: width * 0.055,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
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

  EmailPosition: {
    borderColor: Color.colorLightgray_100,
    width: width * 0.9, // 90% of the screen width
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
    paddingTop: verticalScale(20),
    width: "90%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  passPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    width: "90%",
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
    marginTop: scale(20),
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

  welcome: {
    // marginHorizontal: moderateScale(20),
    marginLeft: width * 0.055,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorGray_700,
  },
  cancelPosition: {
    marginTop: moderateScale(33),
    marginLeft: width * 0.055,
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
    fontSize: FontSize.size_smi,
    marginTop: moderateScale(33),
    marginRight: width * -0.055,
  },

  termsAndConditions: {
    textDecorationLine: "underline",
    color: Color.colorYellowgreen_100,
  },
  firstLastNameContainer: {
    flexDirection: "row",
    justifyContent: "center",
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
    // width: "90%",
  },

  wrapper: {
    top: 48,
    left: 20,
  },

  dobwrapper: {
    width: "90%",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },
  userNameInput: {
    width: "90%",
    height: 48,
    paddingHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
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
    borderColor: Color.colorLightgray_100,
  },
  firstNameWrapperLayout: {
    borderRadius: Border.br_7xs,
    height: 48,
    width: scale(155),
    marginRight: scale(5),
    borderWidth: 1,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    borderColor: Color.colorLightgray_100,
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

  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,

    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  proceedWrapper: {
    marginTop: verticalScale(30),
    alignItems: "center",
    width: "90%",
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
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
