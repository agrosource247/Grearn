import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  signUp: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: height,
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  upBars1: {
    height: height * 0.03,
  },
  cancelPosition: {
    marginTop: height * 0.02,
  },
  frameParent: {
    marginTop: height * 0.04,
  },
  frameViewLayout: {
    height: height * 0.01,
  },
  frameView: {
    marginTop: height * 0.01,
  },
  welcome: {
    fontSize: width * 0.08,
    marginTop: height * 0.05,
  },
  letsGetYouTypo: {
    fontSize: width * 0.05,
    marginTop: height * 0.03,
  },
  yourPosition: {
    fontSize: width * 0.04,
    marginTop: height * 0.02,
  },
  firstNameWrapper: {
    marginTop: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameTypo: {
    fontSize: width * 0.04,
    width: width * 0.42,
  },
  nameWrapperLayout: {
    padding: width * 0.02,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  emailAddress: {
    fontSize: width * 0.04,
    marginTop: height * 0.02,
  },
  wrapperLayout: {
    width: "100%",
  },
  text1Position: {
    fontSize: width * 0.04,
    padding: width * 0.02,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: height * 0.01,
  },
  usernamePosition: {
    fontSize: width * 0.04,
    marginTop: height * 0.02,
  },
  frameLayout1: {
    marginTop: height * 0.02,
  },
  countryPosition: {
    fontSize: width * 0.04,
  },
  ctryPosition: {
    marginTop: height * 0.01,
  },
  numberwrapper: {
    width: "60%",
  },
  phonewrapperBorder: {
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  container: {
    width: "35%",
  },
  countrywrapperBorder: {
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textTypo: {
    fontSize: width * 0.04,
    padding: width * 0.02,
    marginTop: height * 0.01,
  },
  dobsposition: {
    fontSize: width * 0.04,
  },
  dobwrapper: {
    marginTop: height * 0.02,
  },
  datePosition: {
    fontSize: width * 0.04,
  },
  TextInput16: {
    fontSize: width * 0.04,
    padding: width * 0.02,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: height * 0.01,
  },
  frameCreate: {
    marginTop: height * 0.04,
  },
  passwordWrapperLayout: {
    padding: width * 0.02,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: height * 0.01,
  },
  logInTypo: {
    fontSize: width * 0.04,
    marginTop: height * 0.01,
  },
  frameConfirm: {
    marginTop: height * 0.02,
  },
  confirmPasswordBorder: {
    padding: width * 0.02,
    borderRadius: width * 0.01,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: height * 0.01,
  },
  createAccount: {
    fontSize: width * 0.05,
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
