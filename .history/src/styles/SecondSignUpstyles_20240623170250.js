import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  country: {
    width: 54,
    marginLeft: width * -0.275, // Responsive marginLeft
  },
  emailformat: {
    left: width * -0.35, // Responsive left position
    color: Color.colorGray_300,
    top: height * 0.03, // Responsive top position
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  countryPosition: {
    color: Color.colorGray_300,
    marginTop: height * 0.03, // Responsive marginTop
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: "50%",
    position: "absolute",
    marginLeft: width * -0.5, // Responsive marginLeft
  },
  ctryPosition: {
    color: Color.colorGray_300,
    marginTop: height * 0.03, // Responsive marginTop
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: width * 0.2, // Responsive left position
  },
  frame11: {
    width: width * 0.63, // Responsive width
  },
  frameLayout1: {
    width: width * 0.99, // Responsive width
  },
  frame2: {
    top: height * -0.45, // Responsive top position
    left: width * 0.05, // Responsive left position
  },
  frameConfirm: {
    top: height * 0.12, // Responsive top position
    alignSelf: "center",
  },
  yourPasswordMust: {
    top: height * 0.36, // Responsive top position
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: width * 0.53, // Responsive width
    marginLeft: width * -0.445, // Responsive marginLeft
    left: width * 0.513, // Responsive left position
  },
  frameCreate: {
    top: height * 0.26, // Responsive top position
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordWrapperLayout: {
    height: height * 0.1, // Responsive height
    width: width * 0.53, // Responsive width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: height * 0.08, // Responsive top position
    left: width * 0.063, // Responsive left position
  },
  confirmPasswordBorder: {
    width: width * 0.53, // Responsive width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: height * 0.2, // Responsive top position
    left: width * 0.05, // Responsive left position
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
    top: height * 0.2, // Responsive top position
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.4, // Responsive marginLeft
    left: width * 0.475, // Responsive left position
  },
  phonewrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: height * 0.06, // Responsive height
    borderWidth: 2,
    top: height * -0.045, // Responsive top position
    width: width * 0.65, // Responsive width
    marginHorizontal: width * 0.027, // Responsive margin horizontal
    left: width * 0.35, // Responsive left position
    borderColor: Color.colorGainsboro_100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  countrywrapperBorder: {
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    height: height * 0.1, // Responsive height
    borderWidth: 2,
    top: height * -0.045, // Responsive top position
    width: width * 0.09, // Responsive width
    left: 0,
    borderColor: Color.colorGainsboro_100,
  },
  textTypo: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: width * 0.16, // Responsive width
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
    height: height * 0.1, // Responsive height
    top: height * 0.03, // Responsive top position
    left: 0,
    width: width * 0.9, // Responsive width
    position: "absolute",
  },
  TextInput16: {
    width: width * 0.53, // Responsive width
    height: height * 0.1, // Responsive height
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    fontSize: FontSize.size_base,
    left: 0,
    paddingHorizontal: width * 0.025, // Responsive paddingHorizontal
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  letsYou: {
    top: height * 0.47, // Responsive top position
    width: width * 0.53, // Responsive width
    left: width * 0.058, // Responsive left position
    color: Color.colorDimgray_200,
  },
  TextInputAlign: {
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    width: width * 0.2, // Responsive width
  },
  frameViewLayout: {
    width: width * 0.03, // Responsive width
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: height * 0.01, // Responsive height
    position: "absolute",
  },
  focusedInput: {
    borderColor: Color.colorYellowgreen_100, // Set border color to green when focused
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: height * 0.06, // Responsive top position
    textAlign: "left",
    left: "60%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.9, // Responsive width
    marginBottom: height * 0.025, // Responsive marginBottom
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.425, // Responsive marginLeft
    left: width * 0.488, // Responsive left position
    position: "absolute",
    top: height * 0.325, // Responsive top position
  },
  nameWrapperLayout: {
    height: height * 0.1, // Responsive height
    width: width * 0.26, // Responsive width
    borderWidth: 2,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: height * 0.5, // Responsive top position
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  nameTypo: {
    height: height * 0.03, // Responsive height
    width: width * 0.09, // Responsive width
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    marginTop: height * -0.04, // Responsive marginTop
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
  },
  wrapperLayout: {
    justifyContent: "center",
    alignContent: "center",
    width: width * 0.9, // Responsive width
    height: height * 0.1, // Responsive height
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    left: width * 0.05, // Responsive left position
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  text1Position: {
    padding: 10,
    marginLeft: width * -0.41, // Responsive marginLeft
    height: height * 0.03, // Responsive height
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xs,
    top: "50%",
    marginTop: height * -0.04, // Responsive marginTop
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
    marginLeft: width * -0.275, // Responsive marginLeft
    left: "62%",
    position: "absolute",
    marginTop: height * -0.01, // Responsive marginTop
  },
  datePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.487, // Responsive marginLeft
    left: "50%",
    position: "absolute",
  },
  yourPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.425, // Responsive marginLeft
    left: "50%",
    position: "absolute",
  },
  upBars1: {
    left: width * 0.15, // Responsive left position
    width: width * 0.424, // Responsive width
    height: height * 0.048, // Responsive height
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: width * 0.038, // Responsive left position
    width: width * 0.055, // Responsive width
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: height * 0.01, // Responsive height
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: 0,
    width: width * 0.032, // Responsive width
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: height * 0.01, // Responsive height
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    left: width * 0.19, // Responsive left position
  },
  frameView: {
    left: width * 0.22, // Responsive left position
  },
  frameParent: {
    top: height * 0.22, // Responsive top position
    left: width * 0.7, // Responsive left position
    position: "absolute",
  },
  welcome: {
    marginLeft: width * -0.225, // Responsive marginLeft
    top: height * 0.15, // Responsive top position
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    color: Color.colorGray_700,
    position: "absolute",
  },
  cancel: {
    marginLeft: width * -0.275, // Responsive marginLeft
    top: height * 0.09, // Responsive top position
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
    marginRight: width * 0.05,
  },
  letsGetYou: {
    top: height * 0.18, // Responsive top position
    width: width * 0.412, // Responsive width
    color: Color.colorDimgray_200,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  firstName: {
    marginLeft: width * -0.15, // Responsive marginLeft
    paddingHorizontal: width * 0.025, // Responsive paddingHorizontal
  },
  firstNameWrapper: {
    left: width * 0.13, // Responsive left position
    width: width * 0.23, // Responsive width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  omitoyinayomide20gmailcom: {
    width: width * 0.2, // Responsive width
  },
  omitoyinayomide20gmailcomWrapper: {
    top: height * 0.48, // Responsive top position
    left: width * 0.275, // Responsive left position
  },
  text1: {
    width: width * 0.08, // Responsive width
  },
  wrapper: {
    top: height * 0.12, // Responsive top position
    left: width * 0.1, // Responsive left position
  },
  numberwrapper: {
    top: height * 0.12, // Responsive top position
    left: width * -0.125, // Responsive left position
  },
  dobwrapper: {
    top: height * 0.45, // Responsive top position
    left: width * 0.1, // Responsive left position
  },
  dee002: {
    width: width * 0.1, // Responsive width
    padding: 10,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  dee002Wrapper: {
    top: height * 0.36, // Responsive top position
  },
  lastName: {
    marginLeft: width * -0.18, // Responsive marginLeft
    paddingHorizontal: width * 0.025, // Responsive paddingHorizontal
  },
  lastNameWrapper: {
    left: width * 0.45, // Responsive left position
    width: width * 0.1, // Responsive width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: height * -0.0025, // Responsive top position
  },
  yourFullNameas: {
    marginTop: height * 0.24, // Responsive marginTop
  },
  emailAddress: {
    marginTop: height * -0.06, // Responsive marginTop
  },
  dateOfBirth: {
    marginTop: height * -0.06, // Responsive marginTop
  },
  proceed: {
    marginTop: height * -0.018, // Responsive marginTop
    marginLeft: width * -0.11, // Responsive marginLeft
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
    top: height * 0.82, // Responsive top position
    width: "90%",
    height: height * 0.075, // Responsive height
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    position: "absolute",
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    minHeight: height * 2, // Set the height to take the size of the screen
    paddingBottom: 20, // Adjust if needed
  },
});

export default styles;
