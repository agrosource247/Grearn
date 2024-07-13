import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  country: {
    width: 54,
    marginLeft: -110.5,
  },
  emailformat: {
    left: width * -0.31,
    color: Color.colorGray_300,
    top: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  countryPosition: {
    color: Color.colorGray_300,
    marginTop: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: "50%",
    position: "absolute",
  },
  ctryPosition: {
    color: Color.colorGray_300,
    marginTop: 15,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    left: width * 0.25,
  },
  frame11: {
    width: 230,
  },
  frameLayout1: {
    width: 370,
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
    top: height * 0.19,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: width * 0.9,
    marginLeft: -179,
    left: width * 0.45,
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
    // fontSize: FontSize.size_xl,
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    // fontSize: FontSize.size_xl,
    // fontFamily: FontFamily.poppinsMedium,
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
    borderWidth: 1,
    top: -32,
    width: width * 0.65, // 90% of the screen width
    marginHorizontal: 10,
    left: width * 0.35,
    borderColor: Color.colorGainsboro_100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  countrywrapperBorder: {
    height: 48,
    borderWidth: 1,
    top: height * -0.04,
    width: width * 0.2,

    left: 0,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  textTypo: {
    color: Color.colorGray_700,

    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 100,
  },
  RightTextTypo: {
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

  letsYou: {
    top: height * 0.78,
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
    top: 70,
    left: "50%",
    position: "absolute",
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    left: 195,
    position: "absolute",
  },
  fNWrapperLayout: {
    height: 48,
    width: 150,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 200,

    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  lNWrapperLayout: {
    height: 48,
    width: width * 0.5,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: 200,

    borderRadius: Border.br_7xs,
    position: "absolute",
    marginLeft: width * -0.1,
  },
  nameTypo: {
    height: 15,
    width: 66,
    // color: Color.colorSilver_200,
    // fontSize: FontSize.size_xs,
    marginTop: -8,
    top: "50%",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: "50%",
  },
  userNamewrapperLayout: {
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    top: height * -0.01,
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,

    left: width * 0.05,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  emailwrapperLayout: {
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
  },
  dobwrapperLayout: {
    justifyContent: "center",
    alignContent: "center",
    width: "90%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,

    left: width * 0.05,
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  text1Position: {
    padding: 10,
    marginLeft: -164,
    height: 15,
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
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

    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * -0.57,
    left: "62%",
    // position: "absolute",
    marginTop: height * -0.03,
  },
  datePosition: {
    color: Color.colorGray_300,
    top: height * 0.04,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  createPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    left: width * 0.49,
    position: "absolute",
  },
  yourPosition: {
    color: Color.colorGray_300,
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: width * 0.055,

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
    top: height * 0.12,
    left: width * 0.7,
    position: "absolute",
  },
  welcome: {
    marginLeft: width * -0.45,
    top: height * 0.12,

    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    color: Color.colorGray_700,
    position: "absolute",
  },
  cancel: {
    marginLeft: -width * 0.45,
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
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "flex-start", // Align items to the start (left) horizontally
    paddingHorizontal: width * 0.05,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    // position: "absolute",
  },
  haveAnAccountContainer: {
    marginRight: width * 0.05,
  },
  letsGetYou: {
    top: height * 0.14,

    color: Color.colorDimgray_200,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },

  firstName: {
    marginLeft: -75,
    paddingHorizontal: 10,
  },
  firstNameWrapper: {
    left: 25,
    width: 140,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
  },
  omitoyinayomide20gmailcom: {
    width: 200,
  },
  omitoyinayomide20gmailcomWrapper: {
    top: 550,
    left: 165,
  },
  text1: {
    width: 73,
  },
  wrapper: {
    top: 48,
    left: 20,
  },
  numberwrapper: {
    top: 48,
    left: -50,
  },
  dobwrapper: {
    top: 465,

    // left: width * 0.5,
  },
  dee002: {
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
    marginLeft: width * -0.18, // Adjusted marginLeft using a percentage of screen width
    paddingHorizontal: width * 0.025, // Adjusted paddingHorizontal using a percentage of screen width
  },
  lastNameWrapper: {
    left: width * 0.45, // Adjusted left position using a percentage of screen width
    width: width * 0.1, // Adjusted width using a percentage of screen width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    top: height * -0.0025, // Adjusted top position using a percentage of screen height
  },
  yourFullNameas: {
    marginTop: height * 0.18, // Adjusted marginTop using a percentage of screen height
    // width: width * 0.6,
  },
  emailAddress: {
    marginTop: height * -0.045, // Adjusted marginTop using a percentage of screen height
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
  signUp: {
    // borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    width: "100%",
    minHeight: height * 2, // Set the height to take the size of the screen
    paddingBottom: 20, // Adjust if needed
  },
});
export default styles;
