import { StyleSheet, Dimensions } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  loadingbarStyle: {
    marginTop: scale(30),
  },
  seamlessStyle: {
    fontSize: 24,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: scale(63),
  },
  imageStyles: {
    width: scale(290),
    height: verticalScale(163),
    marginTop: verticalScale(200),
    // alignItems: "center",
    // justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },

  getStartedWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    height: moderateVerticalScale(60),
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
    justifyContent: "center",
  },
  logInWrapper: {
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    marginTop: scale(28),
    justifyContent: "center",
    height: moderateVerticalScale(60),
    borderRadius: Border.br_7xs,
    width: width * 0.9, // 90% of the screen width
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: scale(150), // 5% of the screen height
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  onboarding: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
