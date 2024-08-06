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
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: Color.colorWhite, padding: 20 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.newInvestment}>
          <StatusBar
            style={[styles.upBars1, styles.frame3Layout]}
            contentFit="cover"
          />
          <View style={styles.frame}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                //top arrow
                style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investments}>Investments</Text>
          </View>
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
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
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
    width: 27,
    color: Color.colorGray_600,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  profilePosition: {
    left: 328,
    top: 10,
    height: 43,
    width: 45,
    position: "absolute",
  },
  homePosition: {
    top: 45,
    left: 36,
    height: 27,
    width: 35,
    position: "absolute",
  },
  vuesaxlinearreceipt2Layout: {
    height: 44,
    position: "absolute",
  },
  investmentPosition: {
    left: 248,
    position: "absolute",
  },
  investmentTypo: {
    lineHeight: 25,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorYellowgreen_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  upBars1: {
    top: 0,
    left: 0,
    width: 430,
  },
  vuesaxlineararrowLeftIcon: {
    left: 0,
  },
  investments: {
    left: 0,
    fontSize: FontSize.size_6xl,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  frame: {
    top: 34,
    width: 381,
    height: 49,
    left: 30,
    position: "absolute",
  },
  choosePackage: {
    top: 96,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: 40,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    top: 0,
    width: 371,
  },
  pepper: {
    top: 13,
    left: 13,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  info: {
    top: 11,
  },
  harvestPeriod: {
    top: 74,
    fontSize: FontSize.size_xs,
  },
  minimumInvest: {
    top: 99,
    fontSize: FontSize.size_xs,
  },
  geoLocation: {
    top: 126,
    fontSize: FontSize.size_xs,
  },
  roi: {
    top: 52,
  },
  months: {
    top: 72,
  },
  southWest: {
    top: 128,
  },
  text: {
    top: 101,
  },
  monthly: {
    top: 54,
  },
  pepperOffersA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  seeMore: {
    margin: 0,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  pepperOffersAContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  pepperOffersAContainer: {
    top: 151,
    fontSize: FontSize.size_xs,
    width: 197,
    height: 20,
  },
  frameParent: {
    top: 147,
    width: 371,
    left: 30,
  },
  melon: {
    top: 12,
    left: 12,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  frameGroup: {
    top: 342,
    width: 371,
    left: 30,
  },
  frameContainer: {
    top: 538,
  },
  newInvestment: {
    width: 430,
    height: 778,
    overflow: "hidden",
    flex: 1,
  },
});

export default NewInvestment;
