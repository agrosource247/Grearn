import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from "react-native-size-matters";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  frame: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },

  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    height: moderateVerticalScale(60),
    borderRadius: Border.br_7xs,
    width: moderateVerticalScale(358),
    alignItems: "center",
  },
  logInWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    marginTop: scale(28),
    justifyContent: "center",
    height: moderateVerticalScale(60),
    borderRadius: Border.br_7xs,
    width: moderateVerticalScale(358),
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
