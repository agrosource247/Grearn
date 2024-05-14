import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
const AboveLimit = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.insufficientFunds}>
          <StatusBar
            style={[styles.upBars1, styles.upBars1Position]}
            contentFit="cover"
            // hidden
          />
          <Image
            style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft.png")}
          />
          <Text style={styles.investments}>Investments</Text>
          <Text style={styles.choosePackage}>Choose package</Text>
          <View style={[styles.pepperWrapper, styles.wrapperLayout]}>
            <Text style={styles.pepper}>Pepper</Text>
          </View>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textPosition]}>#137,000</Text>
          </View>
          <View style={[styles.monthlyWrapper, styles.wrapperLayout]}>
            <Text style={[styles.monthly, styles.textPosition]}>
              4% Monthly
            </Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.textPosition]}>#389,089.06</Text>
          </View>
          <View style={[styles.monthsWrapper, styles.wrapperLayout]}>
            <Text style={[styles.months, styles.textPosition]}>3 Months</Text>
          </View>
          <Text style={[styles.packageSelected, styles.roiTypo]}>
            Package selected
          </Text>
          <Text style={[styles.investmentAmount, styles.roiTypo]}>
            Investment Amount
          </Text>
          <Text
            style={[
              styles.noteinvestmentCantBe,
              styles.insufficientBalanceTypo,
            ]}
          >
            Note:Investment can’t be canceled before harvest period
          </Text>
          <Text
            style={[styles.insufficientBalance, styles.insufficientBalanceTypo]}
          >
            Exceeding Investment Limit
          </Text>
          <Text style={[styles.roi, styles.roiTypo]}>ROI</Text>
          <Text style={[styles.estimatedReturn, styles.roiTypo]}>
            Estimated Return
          </Text>
          <Text style={[styles.harvestPeriod, styles.roiTypo]}>
            Harvest Period
          </Text>
          <View style={[styles.investNowWrapper, styles.wrapperPosition]}>
            <Text style={styles.investNow}>Invest now</Text>
          </View>
          <Image
            style={[styles.icoutlineInfoIcon, styles.icoutlineIconLayout]}
            contentFit="cover"
            source={require("../assets/icoutlineinfo1.png")}
          />
          <Image
            style={[styles.icoutlineInfoIcon1, styles.icoutlineIconLayout]}
            contentFit="cover"
            source={require("../assets/icoutlineinfo.png")}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    left: 30,

    position: "absolute",
  },
  upBars1Position: {
    position: "absolute",
  },
  parentLayout: {
    height: 36,
    top: 11,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeTypo: {
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    left: 0,
  },
  cardsLayout: {
    width: 31,
    position: "absolute",
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  investmentLayout: {
    width: 59,
    position: "absolute",
  },
  wrapperLayout: {
    height: 48,
    width: 350,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textPosition: {
    color: Color.colorGray_100,
    height: 15,
    left: "50%",
    top: "50%",
    marginLeft: -164,
    marginTop: -8,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  roiTypo: {
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  insufficientBalanceTypo: {
    fontSize: FontSize.size_7xs,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  icoutlineIconLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
  },
  vuesaxlineararrowLeftIcon: {
    top: 67,
    left: 30,
  },
  investments: {
    top: 69,
    left: 69,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    width: 104,
    height: 20,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  choosePackage: {
    top: 110,
    color: Color.colorDimgray_600,
    width: 108,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    flexDirection: "row",
    left: 30,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  pepper: {
    color: Color.colorSilver_300,
    width: 46,
    height: 15,
    marginLeft: -164,
    marginTop: -8,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  pepperWrapper: {
    top: 174,
    borderColor: Color.colorSilver_400,
    width: 350,
    left: 30,
  },
  text: {
    width: 58,
  },
  wrapper: {
    top: 262,
    borderColor: "#ff5b5b",
    left: 30,
  },
  monthly: {
    width: 72,
  },
  monthlyWrapper: {
    top: 350,
    borderColor: Color.colorSilver_400,
    width: 350,
    left: 30,
  },
  text1: {
    width: 80,
  },
  container: {
    top: 438,
    borderColor: Color.colorSilver_400,
    width: 350,
    left: 30,
  },
  months: {
    width: 57,
  },
  monthsWrapper: {
    top: 526,
    left: 31,
    borderColor: Color.colorSilver_400,
    width: 350,
  },
  packageSelected: {
    marginTop: -312,
    marginLeft: -170,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  investmentAmount: {
    marginTop: -224,
    width: 135,
    marginLeft: -170,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  noteinvestmentCantBe: {
    marginTop: 115,
    marginLeft: -150,
    color: Color.colorGray_400,
    flexDirection: "row",
    position: "absolute",
    width: 350,
  },
  insufficientBalance: {
    marginTop: -157,
    marginLeft: -160,
    color: Color.colorCrimson,
  },
  roi: {
    marginTop: -136,
    marginLeft: -170,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
    width: 24,
  },
  estimatedReturn: {
    marginTop: -48,
    width: 116,
    marginLeft: -170,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  harvestPeriod: {
    marginTop: 40,
    marginLeft: -170,
  },
  investNow: {
    marginTop: -15,
    marginLeft: -55.5,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    height: 30,
    left: "50%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  investNowWrapper: {
    top: 657,
    backgroundColor: Color.colorYellowgreen_100,
    width: 350,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 31,
  },
  icoutlineInfoIcon: {
    top: 583,
    left: 31,
  },
  icoutlineInfoIcon1: {
    top: 312,
    left: 30,
  },
  insufficientFunds: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default AboveLimit;
