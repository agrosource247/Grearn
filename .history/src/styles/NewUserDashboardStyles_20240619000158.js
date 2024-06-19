import { StyleSheet } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

const styles = StyleSheet.create({
  newUserDashboard: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: Border.br_50,
    marginTop: 20,
    marginLeft: 20,
  },
  goodMorning: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: FontSize.size_sm,
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.poppinsMedium,
  },
  userName: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 40,
    right: 20,
  },
  investmentPackageContainer: {
    marginTop: 20,
    backgroundColor: Color.colorYellowgreen_100,
    padding: 20,
    borderRadius: Border.br_8xs,
    position: "relative",
  },
  investmentPackage: {
    fontSize: FontSize.size_2xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
  },
  packageName: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 10,
  },
  totalAssetsLabel: {
    fontSize: FontSize.size_xs,
    color: Color.colorGainsboro_300,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 10,
  },
  assetAmountContainer: {
    position: "absolute",
    top: 92,
    left: 48,
  },
  assetAmount: {
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  nilWrapper: {
    position: "absolute",
    top: 56,
    right: 20,
    backgroundColor: Color.colorGreen_200,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  nilText: {
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  eyeIcon: {
    position: "absolute",
    top: 68,
    left: 86,
  },
  topRightDecoration: {
    position: "absolute",
    top: -109,
    left: 245,
  },
  bottomLeftDecoration: {
    position: "absolute",
    top: -1,
    left: 201,
  },
  topGainers: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  liveStocks: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  topLosers: {
    marginTop: 20,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  stockImage: {
    width: 72,
    height: 59,
    borderRadius: Border.br_9xs,
    marginTop: 20,
  },
  maizeImage: {
    marginLeft: 30,
  },
  guineaCornImage: {
    marginLeft: 30,
  },
  soyaBeanImage: {
    marginLeft: 30,
  },
  honeyImage: {
    marginLeft: 30,
  },
  milletImage: {
    marginLeft: 240,
  },
  gingerImage: {
    marginLeft: 240,
  },
  pepperImage: {
    marginLeft: 240,
  },
  melonImage: {
    marginLeft: 240,
  },
  stockLabel: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_100,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: 10,
  },
  maizeLabel: {
    marginLeft: 30,
  },
  guineaCornLabel: {
    marginLeft: 30,
  },
  soyaBeanLabel: {
    marginLeft: 30,
  },
  honeyLabel: {
    marginLeft: 30,
  },
  milletLabel: {
    marginLeft: 240,
  },
  gingerLabel: {
    marginLeft: 240,
  },
  pepperLabel: {
    marginLeft: 240,
  },
  melonLabel: {
    marginLeft: 240,
  },
  regionLabel: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 10,
  },
  southEastRegionLabel: {
    marginLeft: 30,
  },
  southWestRegionLabel: {
    marginLeft: 240,
  },
  stockPercentage: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: 10,
  },
  topGainersPercentage: {
    marginLeft: 30,
  },
  topLosersPercentage: {
    marginLeft: 240,
  },
  gainerIcon: {
    width: 44,
    height: 44,
    marginTop: 10,
    marginLeft: 30,
  },
  loserIcon: {
    width: 44,
    height: 44,
    marginTop: 10,
    marginLeft: 240,
  },
  bottomNavBackground: {
    width: "100%",
    height: 90,
    marginTop: 20,
  },
});

export default styles;
