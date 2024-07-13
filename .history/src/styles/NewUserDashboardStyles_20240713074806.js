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
    height: 24,
    width: 24,
    position: "absolute",
  },

  nilFlexBox: {
    color: Color.colorWhite,
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
  topTypo: {
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  newLayout1: {
    height: 59,
    width: 72,
    borderRadius: Border.br_9xs,
    top: 577,
    position: "absolute",
    overflow: "hidden",
  },
  newLayout: {
    top: 660,
    height: 59,
    width: 72,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  frameIconLayout: {
    top: 743,
    height: 59,
    width: 72,
    borderRadius: Border.br_9xs,
    position: "absolute",
    overflow: "hidden",
  },
  newChildLayout1: {
    top: 826,
    width: 72,
    borderRadius: Border.br_9xs,
    height: 65,
    position: "absolute",
    overflow: "hidden",
  },
  maizeLayout: {
    height: 17,
    top: 581,
  },
  soyaBeansTypo: {
    width: 91,
    fontSize: FontSize.size_sm,
    left: 107,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  pepperPosition: {
    top: 747,
    height: 17,
  },
  honeyLayout: {
    height: 19,
    top: 830,
  },
  melonTypo: {
    width: 46,
    left: 320,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  honeyTypo: {
    width: 55,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  southLayout: {
    width: 85,
    left: 107,
  },
  southTypo2: {
    top: 680,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  southTypo1: {
    top: 763,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  southTypo: {
    top: 848,
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_4xs,
    height: 19,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  southTypo3: {
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_4xs,
    top: 597,
    height: 17,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    width: 37,
    color: Color.colorLimegreen_100,
    left: 107,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textPosition2: {
    top: 700,
    height: 14,
  },
  textPosition1: {
    top: 783,
    height: 14,
  },
  textPosition: {
    top: 870,
    height: 15,
  },
  textLayout: {
    width: 35,
    position: "absolute",
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
    top: 69,
    width: avatarSize,
    height: avatarSize,
    borderRadius: avatarSize / 2,
    left: 20,
    position: "absolute",
  },
  goodMorning: {
    marginTop: 70,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: scale(-50),
  },
  omitoyinDavid: {
    top: 97,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 89,
    position: "absolute",
  },
  iconamoonnotification: {
    top: 69,
    right: 17,
    position: "absolute",
  },
  investmentPackage: {
    // marginLeft: 269,
    right: scale(4),
    fontSize: FontSize.size_2xs,
    width: 118,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: moderateScale(20),
    color: Color.colorWhite,
  },
  grearn: {
    left: 15,
    width: 66,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    top: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  totalAssets: {
    top: verticalScale(44),
    color: Color.colorGainsboro_300,
    width: moderateScale(82),
    fontSize: FontSize.size_xs,
    left: scale(16),
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text: {
    top: 4,
    width: 54,
    left: 0,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  wrapper: {
    top: -24,
    left: -33,
    width: 107,
    height: 24,
    position: "absolute",
  },
  vuesaxlinearhashtag: {
    top: 92,
    left: 48,
    height: 24,
    position: "absolute",
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
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGreen_200,
    width: moderateScale(70),
    height: moderateScale(30),
    bottom: verticalScale(17),
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
  vuesaxlineareyeIcon: {
    top: 68,
    left: 86,
    height: 24,
    position: "absolute",
  },
  investmentPackageParent: {
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    marginTop: verticalScale(60),
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
    top: 365,
    width: 97,
    left: 30,
  },
  topLosers: {
    width: 87,
    left: 230,
    top: 531,
  },
  newUserDashboardItem: {
    left: 30,
  },
  newUserDashboardInner: {
    left: 30,
  },
  frameIcon: {
    left: 30,
  },
  newUserDashboardChild1: {
    left: 30,
  },
  newUserDashboardChild2: {
    left: 240,
  },
  newUserDashboardChild3: {
    left: 240,
  },
  newUserDashboardChild4: {
    left: 240,
  },
  newUserDashboardChild5: {
    left: 240,
  },
  maize: {
    width: 49,
    fontSize: FontSize.size_sm,
    left: 107,
    top: 581,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  guineaCorn: {
    top: 664,
  },
  soyaBeans: {
    width: 91,
    fontSize: FontSize.size_sm,
    left: 107,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  honey: {
    width: 55,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    left: 107,
    top: 830,
  },
  millet: {
    top: 581,
  },
  ginger: {
    left: 320,
    top: 664,
  },
  pepper: {
    left: 320,
    top: 747,
  },
  melon: {
    top: 830,
    left: 320,
  },
  southEastRegion: {
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_4xs,
    top: 597,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  southEastRegion1: {
    width: 85,
    left: 107,
  },
  southEastRegion2: {
    width: 85,
    left: 107,
  },
  southEastRegion3: {
    width: 85,
    left: 107,
  },
  southWestRegion: {
    left: 320,
    width: 87,
  },
  southWestRegion1: {
    left: 320,
    width: 87,
  },
  southWestRegion2: {
    left: 320,
    width: 87,
  },
  southWestRegion3: {
    left: 320,
    width: 87,
  },
  text1: {
    top: 617,
  },
  text2: {
    width: 37,
    color: Color.colorLimegreen_100,
    left: 107,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text3: {
    width: 37,
    color: Color.colorLimegreen_100,
    left: 107,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text4: {
    width: 37,
    color: Color.colorLimegreen_100,
    left: 107,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  text5: {
    color: Color.colorRed_100,
    width: 35,
    left: 320,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 617,
  },
  text6: {
    color: Color.colorRed_100,
    width: 35,
    left: 320,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 700,
  },
  newUserDashboardChild6: {
    left: 144,
    top: 531,
    height: 24,
    width: 24,
  },
  text7: {
    color: Color.colorRed_100,
    width: 35,
    left: 320,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 783,
  },
  text8: {
    color: Color.colorRed_100,
    width: 35,
    left: 320,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 870,
  },
  newUserDashboardChild7: {
    left: 376,
    top: 531,
    height: 24,
    width: 24,
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
  newUserDashboardChild11: {
    top: 272,
    left: 205,
    width: 20,
    height: 9,
    position: "absolute",
  },
  newUserDashboard: {
    // borderRadius: Border.br_smi,
    backgroundColor: Color.colorMintcream,
    alignItems: "center",
    height: "100%",
    flex: 1,
    padding: 10,
  },
});
export default styles;
