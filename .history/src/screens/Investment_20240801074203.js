import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";

const Investment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={[styles.investment, styles.investmentBg]}>
          <StatusBar style={styles.upBars1} />
          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
              // top arrow
              style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>

          {/* Centering investments text and image */}
          <View style={styles.centeredView}>
            <Text style={styles.investments}>Investments</Text>
            <Image
              // maize picture
              style={[styles.maizeLayout, styles.centeredImage]}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
          </View>

          <Text style={[styles.activePackage, styles.activeTypo]}>
            Active package
          </Text>

          <Text style={[styles.maizeOffersA, styles.maizeTypo]}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations
          </Text>

          <View style={styles.principalView}>
            <Text style={[styles.principal1, styles.textPosition]}>
              Principal:
            </Text>
            <Text style={[styles.geoLocation1, styles.roi1Position]}>
              Geo-location:
            </Text>
            <Text style={[styles.harvestPeriod1, styles.months1Position]}>
              Harvest period:
            </Text>
            <Text style={[styles.insurance1, styles.months1Position]}>
              Insurance:
            </Text>
            <Text style={[styles.roi1, styles.roi1Position]}>ROI:</Text>
            <Text style={[styles.profit1, styles.textPosition]}>Profit:</Text>
            <Text style={[styles.text2, styles.textPosition]}>#40,000</Text>
            <Text style={[styles.monthly1, styles.roi1Position]}>
              4% Monthly
            </Text>
            <Text style={[styles.text3, styles.textPosition]}>#140,000</Text>
            <Text style={[styles.southWest1, styles.monthsTypo]}>
              South-west
            </Text>
            <Text style={[styles.months1, styles.months1Position]}>
              4-Months
            </Text>
            {/* <View style={[styles.activeContainer, styles.months1Position]}>
              <Text style={[styles.active, styles.activePosition]}>Active</Text>
            </View> */}
          </View>

          <View style={styles.centeredWrapper}>
            <Image
              // ginger
              style={[styles.investmentItem, styles.investmentLayout]}
              contentFit="cover"
              source={require("../assets/frame-49.png")}
            />
            <Text style={[styles.maizeOffersA1, styles.maizeTypo]}>
              Maize offers a stable and potentially lucrative opportunity for
              both seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations
            </Text>
            <Text style={[styles.principal, styles.principalTypo]}>
              Principal:
            </Text>
            <Text style={[styles.geoLocation, styles.geoTypo]}>
              Geo-location:
            </Text>
            <Text style={[styles.harvestPeriod, styles.monthsPosition]}>
              Harvest period:
            </Text>
            <Text style={[styles.insurance, styles.monthsPosition]}>
              Insurance:
            </Text>
            <Text style={[styles.roi, styles.roiTypo]}>ROI:</Text>
            <Text style={[styles.profit, styles.profitTypo]}>Profit:</Text>
            <Text style={[styles.text, styles.textTypo1]}>#40,000</Text>
            <Text style={[styles.monthly, styles.monthlyTypo]}>4% Monthly</Text>
            <Text style={[styles.text1, styles.textTypo]}>#140,000</Text>
            <Text style={[styles.southWest, styles.monthsTypo]}>
              South-west
            </Text>
            <Text style={[styles.months, styles.monthsTypo]}>12-Months</Text>
            <View style={[styles.activeWrapper, styles.activeLayout]}>
              <Text style={[styles.active, styles.activePosition]}>Active</Text>
            </View>
          </View>

          <Pressable
            style={styles.investMoreWrapper}
            onPress={() => navigation.navigate("NewInvestment")}
          >
            <Text style={[styles.investMore, styles.activePosition]}>
              Invest more
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  investmentBg: {
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.colorGray_600,
    lineHeight: 28,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  activeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
  },
  maizeLayout: {
    height: 148,
    width: "90%",
    borderRadius: Border.br_8xs,
  },
  investmentLayout: {
    height: 148,
    width: "90%",
    borderRadius: Border.br_8xs,
  },
  principalTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  geoTypo: {
    width: 80,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  monthsPosition: {
    position: "absolute",
  },
  roiTypo: {
    width: 23,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  profitTypo: {
    width: 33,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  textTypo1: {
    width: 62,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  monthlyTypo: {
    width: 85,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  textTypo: {
    width: 67,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  monthsTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activeLayout: {
    width: 29,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  activePosition: {
    textAlign: "left",
    position: "absolute",
  },
  maizeTypo: {
    width: "90%",
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignSelf: "center",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textPosition: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  roi1Position: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  months1Position: {
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 34,
    top: 41,
  },
  principal1: {
    top: 123,
    left: 26,
  },
  geoLocation1: {
    top: 172,
    left: 26,
  },
  harvestPeriod1: {
    top: 221,
    left: 26,
  },
  insurance1: {
    top: 270,
    left: 26,
  },
  roi1: {
    top: 319,
    left: 26,
  },
  profit1: {
    top: 368,
    left: 26,
  },
  text2: {
    top: 368,
    left: 99,
  },
  monthly1: {
    top: 319,
    left: 99,
  },
  text3: {
    top: 319,
    left: 99,
  },
  southWest1: {
    top: 270,
    left: 99,
  },
  months1: {
    top: 270,
    left: 99,
  },
  principal: {
    top: 123,
    left: 26,
  },
  geoLocation: {
    top: 172,
    left: 26,
  },
  harvestPeriod: {
    top: 221,
    left: 26,
  },
  insurance: {
    top: 270,
    left: 26,
  },
  roi: {
    top: 319,
    left: 26,
  },
  profit: {
    top: 368,
    left: 26,
  },
  text: {
    top: 368,
    left: 99,
  },
  monthly: {
    top: 319,
    left: 99,
  },
  text1: {
    top: 319,
    left: 99,
  },
  southWest: {
    top: 270,
    left: 99,
  },
  months: {
    top: 270,
    left: 99,
  },
  activeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  investMoreWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    width: 116,
    height: 34,
    marginVertical: 16,
  },
  investMore: {
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  investment: {
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: 69,
  },
  centeredImage: {
    width: "90%",
    height: 148,
  },
  principalView: {
    position: "absolute",
    top: 110,
    left: 20,
  },
  centeredWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Investment;
