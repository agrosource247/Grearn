import { StyleSheet } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: height * 0.05,
  },
  cancel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dontHaveAn: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
  logIn: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: height * 0.02,
    marginLeft: -260,
  },
  enterYourEmail: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: height * 0.05,
    marginLeft: -65,
  },
  inputWrapper: {
    width: "90%",
    marginBottom: height * 0.02,
  },
  inputLabel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: 5,
  },
  textInput: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_200,
  },
  logInButton: {
    width: "90%",
    height: 60,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  logInButtonText: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  forgotPwdContainer: {
    top: -50,
    width: "90%",
    alignItems: "flex-end",
  },
  forgotPwd: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
});
export default styles;
