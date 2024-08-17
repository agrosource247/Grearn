import { StyleSheet } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { Dimensions } from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");
const avatarSize = 65; // Adjust this to your desired size
const styles = StyleSheet.create({
  upBars1Position: {
    top: 0,
    position: "absolute",
  },
  iconChildLayout: {
    // height: 24,
    // width: 24,
  },
  nilFlexBox: {
    color: Color.colorGainsboro_300,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    display: "none",
    height: 189,
    width: 179,
    position: "absolute",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  parentLayout: {
    height: 36,
    top: 11,
  },
  cardsLayout: {
    width: 31,
    position: "absolute",
  },
  cardsTypo: {
    color: Color.colorGray_600,
    left: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  investmentLayout: {
    width: 59,
    position: "absolute",
  },
  newChildLayout: {
    height: 100,
    width: 133,
    top: 401,
    borderRadius: Border.br_9xs,
  },

  newUserDashboardChild: {
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    // left: -170,
  },

  goodMorning: {
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
  },
  omitoyinDavid: {
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    // marginTop: 50,
  },
  iconamoonnotification: {
    // top: 69,
    // right: 17,
    // position: "absolute",
  },
  investmentPackage: {
    // marginLeft: 269,
    right: scale(4),
    fontSize: FontSize.size_2xs,
    width: 118,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: moderateScale(20),
  },
  grearn: {
    left: 15,
    width: 66,
    fontSize: FontSize.size_base,
    color: Color.colorGainsboro_300,
    top: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  totalAssets: {
    // top: verticalScale(35),
    // marginTop: verticalScale(20),
    color: Color.colorGainsboro_300,
    width: moderateScale(82),
    fontSize: FontSize.size_xs,
    left: scale(12),
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text: {
    fontSize: FontSize.size_base,
    color: Color.colorGainsboro_300,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },

  vuesaxlinearhashtag: {
    height: 24,
  },
  nil: {
    left: 15,
    width: 22,
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  nilWrapper: {
    zIndex: 1, // Ensure the image is behind
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGreen_200,
    width: moderateScale(70),
    height: moderateScale(30),
    bottom: verticalScale(10),
    right: scale(7),
    position: "absolute",
  },
  frameChild: {
    top: 75,
    left: 228,
  },
  frameItem: {
    top: 104,
    left: -75,
  },
  frameInner: {
    top: 116,
    left: 60,
  },
  groupIcon: {
    top: -109,
    left: 200,
    width: 259,
    height: 257,
    position: "absolute",
  },
  frameChild1: {
    left: 150,
    width: 251,
    height: 254,
    position: "absolute",
  },
  investmentPackageParent: {
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    marginTop: verticalScale(35),
    width: "90%",
    height: 102,
    backgroundColor: Color.colorYellowgreen_100,
  },
  topGainers: {
    width: 101,
    left: 30,
    top: 531,
  },
  liveStocks: {
    marginTop: verticalScale(4),
    width: 97,
    height: 20,
    left: 20,
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    alignSelf: "flex-start",
  },
  topLosers: {
    width: 87,
    left: 230,
    top: 531,
  },
  newUserDashboardItem: {
    // left: 30,
    height: 59,
    width: 72,
    borderRadius: Border.br_9xs,
  },
  newUserDashboardInner: {
    // left: 30,
    // top: 660,
    height: 59,
    width: 72,
    borderRadius: Border.br_9xs,
    // position: "absolute",
    // overflow: "hidden",
  },
  frameIcon: {
    // left: 30,
    // top: 743,
    height: 59,
    width: 72,
    marginTop: verticalScale(15),
    borderRadius: Border.br_9xs,
    // position: "absolute",
    // overflow: "hidden",
  },
  newUserDashboardChild1: {
    // left: 30,
    // top: 826,
    marginTop: verticalScale(15),

    width: 72,
    borderRadius: Border.br_9xs,
    height: 65,
    // position: "absolute",
    // overflow: "hidden",
  },
  newUserDashboardChild2: {
    // left: 240,
  },
  newUserDashboardChild3: {
    // left: 240,
    marginTop: verticalScale(15),
  },
  newUserDashboardChild4: {
    // left: 240,
    marginTop: verticalScale(15),
  },
  newUserDashboardChild5: {
    // left: 240,
    marginTop: verticalScale(15),
  },

  newUserDashboardChild8: {
    left: 30,
  },
  newUserDashboardChild9: {
    left: 174,
  },
  newUserDashboardChild10: {
    left: 318,
  },

  newUserDashboard: {
    alignItems: "center",
    // marginBottom: 100,
  },
  /////

  Viewmodalcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
export default styles;
