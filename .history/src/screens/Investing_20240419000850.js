import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const Investing = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.investing}>
          <StatusBar
            style={[styles.upBars1, styles.iconPosition]}
            contentFit="cover"
          />
          <Image
            style={[styles.vuesaxlineararrowLeftIcon, styles.wrapperPosition1]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft.png")}
          />
          <Text style={styles.investments}>Investments</Text>
          <Text style={styles.choosePackage}>Choose package</Text>
          <View style={[styles.pepperWrapper, styles.wrapperLayout]}>
            <TextInput style={styles.pepper}>Pepper</TextInput>
          </View>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <TextInput style={[styles.text, styles.textPosition]}>
              #137,000
            </TextInput>
          </View>
          <View style={[styles.monthlyWrapper, styles.wrapperLayout]}>
            <TextInput style={[styles.monthly, styles.textPosition]}>
              4% Monthly
            </TextInput>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <TextInput style={[styles.text1, styles.textPosition]}>
              #389,089.06
            </TextInput>
          </View>
          <View style={[styles.monthsWrapper, styles.wrapperPosition]}>
            <TextInput style={[styles.months, styles.textPosition]}>
              3 Months
            </TextInput>
          </View>
          <Text style={[styles.packageSelected, styles.roiTypo]}>
            Package selected
          </Text>
          <Text style={[styles.investmentAmount, styles.roiTypo]}>
            Investment Amount
          </Text>
          <Text
            style={[styles.min25000Max300000, styles.min25000Max300000Typo]}
          >
            Min-#25,000 Max-#300,000
          </Text>
          <Text
            style={[styles.noteinvestmentCantBe, styles.min25000Max300000Typo]}
          >
            Note:Investment can’t be canceled before harvest period
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
            style={[styles.icoutlineInfoIcon, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/icoutlineinfo1.png")}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 36,
    top: 11,
  },
  iconLayout: {
    height: 24,
    width: 24,
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
  wrapperPosition1: {
    left: 30,
    position: "absolute",
  },
  wrapperLayout: {
    height: 48,
    width: 350,
    borderColor: Color.colorSilver_400,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  textPosition: {
    color: Color.colorGray_100,
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
  wrapperPosition: {
    left: 30,
    position: "absolute",
  },
  roiTypo: {
    height: 16,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  min25000Max300000Typo: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_4xs,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    top: 67,
    height: 24,
    width: 24,
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
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    width: 58,
  },
  wrapper: {
    top: 262,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  monthly: {
    width: 72,
  },
  monthlyWrapper: {
    top: 350,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  text1: {
    width: 80,
  },
  container: {
    top: 438,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  months: {
    width: 57,
  },
  monthsWrapper: {
    top: 526,
    height: 48,
    width: 350,
    borderColor: Color.colorSilver_400,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  packageSelected: {
    marginTop: -312,
    width: 120,
    marginLeft: -175,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  investmentAmount: {
    marginTop: -224,
    width: 135,
    marginLeft: -175,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  min25000Max300000: {
    marginTop: -156,

    marginLeft: -175,
  },
  noteinvestmentCantBe: {
    marginTop: 118,
    marginLeft: -155,
  },
  roi: {
    marginTop: -136,
    marginLeft: -175,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
    width: 24,
  },
  estimatedReturn: {
    marginTop: -48,
    width: 116,
    marginLeft: -175,
    color: Color.colorDimgray_1000,
    fontSize: FontSize.size_smi,
  },
  harvestPeriod: {
    marginTop: 40,
    width: 97,
    marginLeft: -175,
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
    width: 369,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 31,
  },
  icoutlineInfoIcon: {
    top: 583,
    width: 14,
    height: 14,
  },
  investing: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Investing;
