import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const scaleWidth = (size) => (width / 375) * size;
const scaleHeight = (size) => (height / 812) * size;
const scaleFont = (size) => size * PixelRatio.getFontScale();

const styles = StyleSheet.create({
  frameParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scaleWidth(20),
    marginTop: scaleHeight(20),
  },
  groupChild: {
    width: scaleWidth(75),
    height: scaleHeight(5),
    backgroundColor: "#D3D3D3",
  },
  groupItem: {
    width: scaleWidth(75),
    height: scaleHeight(5),
    backgroundColor: "#D3D3D3",
  },
  groupInner: {
    width: scaleWidth(75),
    height: scaleHeight(5),
    backgroundColor: "#D3D3D3",
  },
  frameView: {
    width: scaleWidth(75),
    height: scaleHeight(5),
    backgroundColor: "#D3D3D3",
  },
  cancel: {
    fontSize: scaleFont(16),
    color: "#000",
    alignSelf: "flex-end",
    marginRight: scaleWidth(20),
    marginTop: scaleHeight(10),
  },
  haveAnAccountContainer: {
    fontSize: scaleFont(14),
    color: "#000",
    alignSelf: "flex-end",
    marginRight: scaleWidth(20),
    marginTop: scaleHeight(5),
  },
  haveAnAccount1: {
    color: "#000",
  },
  logIn: {
    color: "#00f",
    textDecorationLine: "underline",
  },
  signUp: {
    flex: 1,
    paddingHorizontal: scaleWidth(20),
  },
  welcome: {
    fontSize: scaleFont(24),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: scaleHeight(20),
  },
  letsGetYou: {
    fontSize: scaleFont(16),
    textAlign: "center",
    marginVertical: scaleHeight(10),
  },
  firstNameWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: scaleHeight(10),
  },
  firstName: {
    flex: 1,
    marginRight: scaleWidth(10),
    padding: scaleWidth(10),
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  lastNameWrapper: {
    flex: 1,
    marginLeft: scaleWidth(10),
    padding: scaleWidth(10),
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  omitoyinayomide20gmailcomWrapper: {
    marginVertical: scaleHeight(10),
  },
  emailAddress: {
    fontSize: scaleFont(14),
    marginBottom: scaleHeight(5),
  },
  dee002Wrapper: {
    marginVertical: scaleHeight(10),
  },
  usernamePosition: {
    fontSize: scaleFont(14),
    marginBottom: scaleHeight(5),
  },
  frame2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: scaleHeight(10),
  },
  frame11: {
    flex: 1,
    marginRight: scaleWidth(10),
    padding: scaleWidth(10),
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  numberwrapper: {
    flex: 1,
    marginLeft: scaleWidth(10),
    padding: scaleWidth(10),
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  dobswrapper: {
    marginVertical: scaleHeight(10),
  },
  TextInput16: {
    padding: scaleWidth(10),
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
  frameCreate: {
    marginVertical: scaleHeight(10),
  },
  frameConfirm: {
    marginVertical: scaleHeight(10),
  },
  proceedWrapper: {
    backgroundColor: "#00f",
    padding: scaleWidth(15),
    borderRadius: 5,
    alignItems: "center",
    marginVertical: scaleHeight(20),
  },
  proceed: {
    fontSize: scaleFont(18),
    color: "#fff",
  },
  letsYou: {
    textAlign: "center",
    marginVertical: scaleHeight(10),
  },
  termsAndConditions: {
    color: "#00f",
    textDecorationLine: "underline",
  },
});

export default styles;
