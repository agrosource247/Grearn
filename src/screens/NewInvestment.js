import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const NewInvestment = () => {
  const navigation = useNavigation();
  return (
<<<<<<< HEAD
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.newInvestment}>
          <StatusBar style={styles.statusBar} contentFit="cover" />

          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                style={styles.backIcon}
=======
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.newInvestment}>
          <StatusBar
            style={[styles.upBars1, styles.frame3Layout]}
            contentFit="cover"
            // hidden
          />
          <Text style={[styles.choosePackage, styles.roiLayout]}>
            Choose package
          </Text>
          <View style={[styles.frameParent, styles.frameLayout2]}>
            <Image
              style={[styles.frameChild, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/frame-56.png")}
            />
            <Text style={[styles.pepper, styles.infoLayout]}>Pepper</Text>
            <Text style={[styles.info, styles.roiPosition]}>Info</Text>
            <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
              Harvest period:
            </Text>
            <Text
              style={[styles.minimumInvest, styles.pepperPosition]}
            >{`Minimum invest: `}</Text>
            <Text style={[styles.geoLocation, styles.pepperPosition]}>
              Geo-location:
            </Text>
            <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
            <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
            <Text style={[styles.southWest, styles.textTypo]}>South-west</Text>
            <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
            <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
            <Text
              style={[styles.pepperOffersAContainer, styles.pepperPosition]}
            >
              <Text style={styles.pepperOffersAContainer1}>
                <Text
                  style={styles.pepperOffersA}
                >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                <Text style={styles.seeMore}>See more</Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.frameGroup, styles.frameLayout2]}>
            <Image
              style={[styles.frameChild, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/frame-561.png")}
            />
            <Text style={[styles.melon, styles.infoLayout]}>Melon</Text>
            <Text style={[styles.info, styles.roiPosition]}>Info</Text>
            <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
              Harvest period:
            </Text>
            <Text
              style={[styles.minimumInvest, styles.pepperPosition]}
            >{`Minimum invest: `}</Text>
            <Text style={[styles.geoLocation, styles.pepperPosition]}>
              Geo-location:
            </Text>
            <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
            <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
            <Text style={[styles.southWest, styles.textTypo]}>South-west</Text>
            <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
            <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
            <Text
              style={[styles.pepperOffersAContainer, styles.pepperPosition]}
            >
              <Text style={styles.pepperOffersAContainer1}>
                <Text
                  style={styles.pepperOffersA}
                >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                <Text style={styles.seeMore}>See more</Text>
              </Text>
            </Text>
          </View>
          <View style={[styles.frameContainer, styles.frameLayout1]}>
            <Image
              style={[styles.frameChild, styles.frameLayout2]}
              contentFit="cover"
              source={require("../assets/frame-562.png")}
            />
            <Text style={[styles.melon, styles.infoLayout]}>Honey</Text>
            <Text style={[styles.info, styles.roiPosition]}>Info</Text>
            <Text style={[styles.harvestPeriod, styles.soyaBeansPosition]}>
              Harvest period:
            </Text>
            <Text
              style={[styles.minimumInvest, styles.pepperPosition]}
            >{`Minimum invest: `}</Text>
            <Text style={[styles.geoLocation, styles.pepperPosition]}>
              Geo-location:
            </Text>
            <Text style={[styles.roi, styles.roiPosition]}>ROI:</Text>
            <Text style={[styles.months, styles.textTypo]}>4-Months</Text>
            <Text style={[styles.southWest, styles.textTypo]}>South-west</Text>
            <Text style={[styles.text, styles.textTypo]}>#25,000</Text>
            <Text style={[styles.monthly, styles.textTypo]}>4% Monthly</Text>
            <Text
              style={[styles.pepperOffersAContainer, styles.pepperPosition]}
            >
              <Text style={styles.pepperOffersAContainer1}>
                <Text
                  style={styles.pepperOffersA}
                >{`Pepper offers a stable and potentially lucrative opportunity for both seasoned and novice investors. `}</Text>
                <Text style={styles.seeMore}>See more</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.frame}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                //top arrow
                style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investments}>Investments</Text>
          </View>
<<<<<<< HEAD
          <Text style={styles.choosePackage}>Choose package</Text>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-56.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Pepper</Text>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Harvest period:</Text>
                  <Text style={styles.optionValue}>4-Months</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Geo-location:</Text>
                  <Text style={styles.optionValue}>South-west</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Minimum invest:</Text>
                  <Text style={styles.optionValue}>#25,000</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>ROI:</Text>
                  <Text style={styles.optionValue}>4% Monthly</Text>
                </View>
                <Text style={styles.optionInfo}>Info</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Pepper offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-561.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Melon</Text>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Harvest period:</Text>
                  <Text style={styles.optionValue}>4-Months</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Geo-location:</Text>
                  <Text style={styles.optionValue}>South-west</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Minimum invest:</Text>
                  <Text style={styles.optionValue}>#25,000</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>ROI:</Text>
                  <Text style={styles.optionValue}>4% Monthly</Text>
                </View>
                <Text style={styles.optionInfo}>Info</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Melon offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-562.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Honey</Text>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Harvest period:</Text>
                  <Text style={styles.optionValue}>4-Months</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Geo-location:</Text>
                  <Text style={styles.optionValue}>South-west</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>Minimum invest:</Text>
                  <Text style={styles.optionValue}>#25,000</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.optionDetail}>ROI:</Text>
                  <Text style={styles.optionValue}>4% Monthly</Text>
                </View>
                <Text style={styles.optionInfo}>Info</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Honey offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>
=======
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollViewContent: {
    padding: 20,
  },
  newInvestment: {
    flex: 1,
    alignItems: "flex-start",
  },
  statusBar: {
    height: 37,
  },
  header: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  investments: {
    marginLeft: 10,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  choosePackage: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_xs,
    marginBottom: 20,
    marginTop: 21,
  },
  investmentOption: {
    width: "100%",
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    marginBottom: 20,
    // padding: 10,
  },
  optionContainer: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Space between the child elements
  },
  optionImage: {
    width: 140,
    // borderRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    marginRight: 5,
  },
  optionDetails: {
    flex: 1,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  optionTitle: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 5,
  },
  optionInfo: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 5,
  },
  optionDetail: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    marginRight: 5,
  },
  optionValue: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  optionDescription: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_500,
  },
  descriptionText: {
=======
  frame3Layout: {
    height: 37,
    position: "absolute",
  },
  roiLayout: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frameLayout2: {
    height: 182,
    position: "absolute",
  },
  infoLayout: {
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  roiPosition: {
    width: 28,
    left: 166,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  soyaBeansPosition: {
    width: 93,
    left: 166,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  pepperPosition: {
    left: 166,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    alignItems: "center",
    display: "flex",
    textAlign: "left",

    position: "absolute",
  },
  frameLayout1: {
    left: 29,
    height: 182,
    width: 371,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    borderStyle: "solid",
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 430,
  },
  frame2Position: {
    position: "absolute",
  },
  homeLayout: {
    width: 35,
    position: "absolute",
  },
  homeTypo: {
    color: Color.colorGray_600,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
  upBars1: {
    left: 47,
    width: 337,
    top: 0,
  },
  choosePackage: {
    top: 110,
    width: 108,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 30,

    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  frameChild: {
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 161,
    left: 0,
    top: 0,
  },
  pepper: {
    width: 51,
    fontSize: FontSize.size_sm,
    top: 12,

    left: 166,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  info: {
    top: 125,

    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  harvestPeriod: {
    top: 38,

    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    fontSize: FontSize.size_xs,
  },
  minimumInvest: {
    width: 102,
    top: 80,

    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    fontSize: FontSize.size_xs,
  },
  geoLocation: {
    width: 87,
    top: 59,

    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    fontSize: FontSize.size_xs,
  },
  roi: {
    top: 101,

    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  months: {
    left: 259,
    width: 71,
    color: Color.colorYellowgreen_100,
    top: 38,
  },
  southWest: {
    left: 251,
    width: 79,
    color: Color.colorYellowgreen_100,
    top: 59,
  },
  text: {
    left: 267,
    width: 63,
    color: Color.colorYellowgreen_100,
    top: 80,
  },
  monthly: {
    left: 193,
    width: 80,
    color: Color.colorYellowgreen_100,
    top: 101,
  },
  pepperOffersA: {
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
    color: Color.colorDimgray_500,
  },
  seeMore: {
    textDecoration: "underline",
    color: Color.colorYellowgreen_100,
<<<<<<< HEAD
=======
    position: "absolute",
  },
  pepperOffersAContainer1: {
    width: "100%",
  },
  pepperOffersAContainer: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    width: 190,
    top: 142,

    left: 166,
  },
  frameParent: {
    width: 371,
    borderColor: Color.colorYellowgreen_100,
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_3xs,
    height: 182,
    borderWidth: 1,
    borderStyle: "solid",
    left: 30,
    top: 142,
  },
  melon: {
    width: 46,
    fontSize: FontSize.size_sm,
    top: 12,

    left: 166,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  frameGroup: {
    top: 343,
    width: 371,
    borderColor: Color.colorYellowgreen_100,
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_3xs,
    height: 182,
    borderWidth: 1,
    borderStyle: "solid",
    left: 30,
  },
  frameContainer: {
    top: 544,
  },
  vuesaxlineararrowLeftIcon: {
    left: 0,
  },
  investments: {
    top: 2,
    left: 39,
    fontSize: FontSize.size_base,
    width: 104,
    height: 20,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",

    position: "absolute",
  },
  frame: {
    top: 67,
    width: 143,
    height: 24,
    left: 30,
    position: "absolute",
  },
  newInvestment: {
    borderRadius: Border.br_smi,
    flex: 1,
    height: 932,

    backgroundColor: Color.colorWhite,
    width: "100%",
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
  },
});

export default NewInvestment;
