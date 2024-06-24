import { StyleSheet, Dimensions } from "react-native";
import { Color, FontSize, FontFamily } from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  upBars1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 37,
  },
  frameParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: width * 0.05,
    marginTop: height * 0.03,
  },
  groupChild: {
    width: width * 0.07,
    height: height * 0.006,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: 2,
  },
  groupItem: {
    width: width * 0.04,
    height: height * 0.006,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: 2,
  },
  groupInner: {
    width: width * 0.06,
    height: height * 0.006,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: 2,
  },
  frameView: {
    width: width * 0.06,
    height: height * 0.006,
    backgroundColor: Color.colorYellowgreen_500,
    borderRadius: 2,
  },
  cancel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    position: "absolute",
    top: height * 0.09,
    right: width * 0.05,
  },
  haveAnAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: width * 0.05,
    marginTop: height * 0.02,
  },
  haveAnAccount1: {
    color: Color.colorDimgray_200,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  welcome: {
    fontSize: FontSize.size_3xl,
    fontWeight: "600",
    textAlign: "center",
    marginTop: height * 0.12,
  },
  letsGetYou: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorDimgray_200,
  },
  yourFullNameas: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorGray_300,
  },
  firstNameWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
  },
  firstName: {
    flex: 1,
    marginRight: width * 0.03,
    paddingHorizontal: 10,
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: 7,
  },
  lastNameWrapper: {
    flex: 1,
    marginLeft: width * 0.03,
    paddingHorizontal: 10,
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: 7,
  },
  emailformat: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorGray_300,
  },
  emailAddress: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorGray_300,
  },
  usernamePosition: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorGray_300,
  },
  frame2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: height * 0.02,
  },
  frame11: {
    flex: 1,
    marginRight: width * 0.03,
    paddingHorizontal: 10,
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: 7,
  },
  numberwrapper: {
    flex: 1,
    marginLeft: width * 0.03,
    paddingHorizontal: 10,
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: 7,
  },
  dee002Wrapper: {
    marginVertical: height * 0.02,
  },
  usernamePosition: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    marginTop: height * 0.02,
    color: Color.colorGray_300,
  },
  dobwrapper: {
    marginVertical: height * 0.02,
  },
  TextInput16: {
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: 7,
    paddingHorizontal: 10,
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
  },
  frameCreate: {
    marginVertical: height * 0.02,
  },
  frameConfirm: {
    marginVertical: height * 0.02,
  },
  proceedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    paddingVertical: 15,
    borderRadius: 7,
    alignItems: "center",
    marginVertical: height * 0.04,
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontWeight: "600",
  },
  letsYou: {
    textAlign: "center",
    marginTop: height * 0.04,
    color: Color.colorDimgray_200,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
    textDecorationLine: "underline",
  },
});

export default styles;
