import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  frame: {
    height: height * 0.618, // 61.8% of the screen height
    alignItems: "center",
    justifyContent: "center",
  },
  frameChild: {
    width: width * 0.1, // 10% of the screen width
    height: height * 0.005, // 0.5% of the screen height
    marginTop: height * 0.59, // 59% of the screen height
  },
  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    height: height * 0.06, // 6% of the screen height
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  logInWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    marginTop: height * 0.03, // 3% of the screen height
    justifyContent: "center",
    height: height * 0.06, // 6% of the screen height
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  getStarted: {
    color: Color.colorGainsboro_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  frame1: {
    marginTop: height * 0.05, // 5% of the screen height
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    // flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
