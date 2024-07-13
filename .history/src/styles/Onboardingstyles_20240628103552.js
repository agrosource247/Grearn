import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  frame: {
    height: height * 0.618, // 61.8% of the screen height
    alignItems: "center",
    justifyContent: "center",
  },
  frameChild: {
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
    marginTop: scale(28),
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
    marginTop: scale(56), // 5% of the screen height
    width: "100%", // 90% of the screen width
    marginBottom: 130,
    alignItems: "center",
  },
  onboarding: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
