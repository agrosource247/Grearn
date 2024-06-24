import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  usernamePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.55,
    left: "62%",
    position: "absolute",
    marginTop: height * -0.05,
  },
  datePosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -width * 0.48,
    left: "50%",
    position: "absolute",
  },
  yourPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -width * 0.42,
    left: "50%",
    position: "absolute",
  },
  upBars1: {
    left: width * 0.12,
    width: width * 0.75,
    height: height * 0.045,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    left: width * 0.03,
    width: width * 0.04,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: height * 0.007,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupItem: {
    left: 0,
    width: width * 0.02,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: Border.br_2xs,
    height: height * 0.007,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    left: width * 0.14,
  },
  frameView: {
    left: width * 0.16,
  },
  frameParent: {
    top: height * 0.13,
    left: width * 0.68,
    position: "absolute",
  },
  welcome: {
    marginLeft: -width * 0.45,
    top: height * 0.17,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    color: Color.colorGray_700,
    position: "absolute",
  },
  cancel: {
    marginLeft: -width * 0.55,
    top: height * 0.09,
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
    top: height * 0.13,
    width: width * 0.6,
    color: Color.colorDimgray_200,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  firstName: {
    marginLeft: -width * 0.2,
    paddingHorizontal: width * 0.025,
  },
  firstNameWrapper: {
    left: width * 0.06,
    width: width * 0.35,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  omitoyinayomide20gmailcom: {
    width: width * 0.4,
  },
  omitoyinayomide20gmailcomWrapper: {
    top: height * 0.72,
    left: width * 0.37,
  },
  text1: {
    width: width * 0.17,
  },
  wrapper: {
    top: height * 0.12,
    left: width * 0.06,
  },
  numberwrapper: {
    top: height * 0.12,
    left: -width * 0.13,
  },
  dobwrapper: {
    top: height * 0.58,
    left: width * 0.06,
  },
  dee002: {
    width: width * 0.13,
    padding: width * 0.025,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  dee002Wrapper: {
    top: height * 0.48,
  },
  lastName: {
    marginLeft: -width * 0.19,
    paddingHorizontal: width * 0.025,
  },
  lastNameWrapper: {
    left: width * 0.4,
    width: width * 0.2,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: -1,
  },
  yourFullNameas: {
    marginTop: height * 0.22,
    width: width * 0.3,
  },
  emailAddress: {
    marginTop: -height * 0.1,
    width: width * 0.13,
  },
  dateOfBirth: {
    marginTop: -height * 0.1,
    width: width * 0.12,
  },
  proceed: {
    marginTop: -height * 0.05,
    marginLeft: -width * 0.13,
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
    top: height * 0.9,
    width: "90%",
    height: height * 0.07,
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
    minHeight: height * 2, // Adjust the minHeight according to your design requirements
    paddingBottom: height * 0.04, // Adjust padding if needed
  },
});

export default styles;
