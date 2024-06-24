import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  // Global layout adjustments for responsiveness
  frameParent: {
    top: height * 0.2,
    left: width * 0.7,
    position: "absolute",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    width: "100%",
    minHeight: height * 2,
    paddingBottom: 20,
  },
  welcome: {
    marginLeft: width * -0.45,
    top: height * 0.1,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    color: Color.colorGray_700,
    position: "absolute",
  },
  cancel: {
    marginLeft: -width * 0.55,
    top: 70,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cancelPosition: {
    left: "50%",
    position: "absolute",
  },
  haveAnAccountContainer: {
    marginLeft: width * -0.37,
    top: height * 0.13,
    position: "absolute",
  },
  haveAnAccount: {
    width: "100%",
  },
  haveAnAccount1: {
    color: Color.colorGray_700,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
  },
  logIn: {
    color: Color.red_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  letsGetYou: {
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray_700,
    fontWeight: "600",
    top: height * 0.25,
    left: width * 0.2,
    position: "absolute",
  },
  yourFullNameas: {
    left: width * 0.07,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  nameWrapperLayout: {
    height: 45,
    width: "100%",
  },
  nameTypo: {
    textAlign: "center",
    lineHeight: 19,
    letterSpacing: 1.3,
    fontSize: FontSize.size_base,
  },
  firstNameWrapper: {
    top: height * 0.32,
    width: "85%",
    left: width * 0.1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstName: {
    width: "48%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  lastNameWrapper: {
    width: "48%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  omitoyinayomide20gmailcomWrapper: {
    top: height * 0.42,
    left: width * 0.07,
    position: "absolute",
  },
  emailAddress: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  text1Position: {
    top: height * 0.05,
    width: "100%",
    height: 45,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  dee002Wrapper: {
    top: height * 0.52,
    left: width * 0.07,
    position: "absolute",
  },
  usernamePosition: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  dee002: {
    top: height * 0.05,
    height: 45,
    width: "100%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  frame2: {
    top: height * 0.62,
    left: width * 0.07,
    position: "absolute",
  },
  frame11: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  countryPosition: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  frame12: {
    top: height * 0.04,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  numberwrapper: {
    width: "70%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  container: {
    width: "25%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  dobswrapper: {
    top: height * 0.72,
    left: width * 0.07,
    position: "absolute",
  },
  dateOfBirth: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  TextInput16: {
    top: height * 0.05,
    height: 45,
    width: "100%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  frameCreate: {
    top: height * 0.82,
    left: width * 0.07,
    position: "absolute",
  },
  frameConfirm: {
    top: height * 0.92,
    left: width * 0.07,
    position: "absolute",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    fontSize: FontSize.size_base,
  },
  passwordWrapperLayout: {
    height: 45,
    width: "100%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  confirmPasswordBorder: {
    height: 45,
    width: "100%",
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_2xs,
    padding: 10,
  },
  proceedWrapper: {
    top: height * 1.02,
    left: width * 0.2,
    position: "absolute",
    backgroundColor: Color.red_100,
    borderRadius: Border.br_2xs,
    width: "60%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  proceed: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_base,
  },
  letsYou: {
    top: height * 1.12,
    left: width * 0.07,
    position: "absolute",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_700,
    fontSize: FontSize.size_base,
  },
  termsAndConditions: {
    color: Color.red_100,
  },
});

export default styles;
