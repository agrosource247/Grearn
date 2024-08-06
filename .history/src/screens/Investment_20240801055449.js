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
          <StatusBar
            style={styles.upBars1}
            // hidden
          />
          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
              //top arrow
              style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>

          <Text style={styles.investments}>Investments</Text>
          <Text style={[styles.activePackage, styles.activeTypo]}>
            Active package
          </Text>
          <Image
            //maize picture
            style={[styles.investmentChild, styles.investmentLayout]}
            contentFit="cover"
            source={require("../assets/frame-47.png")}
          />
          <Text style={[styles.maizeOffersA, styles.maizeTypo]}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations
          </Text>
          <Image
            //ginger
            style={[styles.investmentItem, styles.investmentLayout]}
            contentFit="cover"
            source={require("../assets/frame-49.png")}
          />
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
          <Text style={[styles.southWest, styles.monthsTypo]}>South-west</Text>
          <Text style={[styles.months, styles.monthsTypo]}>12-Months</Text>
          <View style={[styles.activeWrapper, styles.activeLayout]}>
            <Text style={[styles.active, styles.activePosition]}>Active</Text>
          </View>

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
          <Text style={[styles.monthly1, styles.roi1Position]}>4% Monthly</Text>
          <Text style={[styles.text3, styles.textPosition]}>#140,000</Text>
          <Text style={[styles.southWest1, styles.monthsTypo]}>South-west</Text>
          <Text style={[styles.months1, styles.months1Position]}>4-Months</Text>
          <View style={[styles.activeContainer, styles.months1Position]}>
            <Text style={[styles.active, styles.activePosition]}>Active</Text>
          </View>
          <Pressable
            style={styles.investMoreWrapper}
            onPress={() => navigation.navigate("NewInvestment")}
          >
            <Text style={[styles.investMore, styles.activePosition]}>
              Invest more
            </Text>
          </Pressable>
          <Text style={[styles.maizeOffersA1, styles.maizeTypo]}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations
          </Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  investmentBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flex: 1, // Ensure the container takes up the full height
  },
  investment: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 40,
    left: 20,
  },
  homeTypo: {
    color: Color.colorGray_600,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  investmentLayout: {
    height: 148,
    width: 370,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  principalTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  geoTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  monthsPosition: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  roiTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  profitTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  textTypo1: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  monthlyTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  monthsTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  activeLayout: {
    width: 29,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  activePosition: {
    textAlign: "center",
  },
  maizeTypo: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  textPosition: {
    textAlign: "center",
  },
  roi1Position: {
    textAlign: "center",
  },
  months1Position: {
    textAlign: "center",
  },
  upBars1: {
    width: 337,
    height: 37,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    top: 40,
    left: 20,
  },
  investments: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    width: 104,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackage: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    width: 96,
    textAlign: "center",
    fontWeight: "500",
  },
  investmentChild: {
    marginTop: 20,
    alignSelf: "center",
  },
  investmentItem: {
    marginTop: 20,
    alignSelf: "center",
  },
  principal: {
    textAlign: "center",
  },
  geoLocation: {
    textAlign: "center",
  },
  harvestPeriod: {
    width: 84,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  insurance: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
    width: 59,
  },
  roi: {
    textAlign: "center",
  },
  profit: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  monthly: {
    textAlign: "center",
  },
  text1: {
    textAlign: "center",
  },
  southWest: {
    textAlign: "center",
  },
  months: {
    width: 77,
    textAlign: "center",
  },
  activeWrapper: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [{ translateX: -15 }],
  },
  investMore: {
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    width: 124,
    height: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  investMoreWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 374,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  maizeOffersA1: {
    textAlign: "center",
  },
});
const styles = StyleSheet.create({
  investmentBg: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    flex: 1, // Ensure the container takes up the full height
  },
  investment: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    top: 40,
    left: 20,
  },
  homeTypo: {
    color: Color.colorGray_600,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  investmentLayout: {
    height: 148,
    width: 370,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  principalTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  geoTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  monthsPosition: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  roiTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  profitTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  textTypo1: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  monthlyTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  monthsTypo: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  activeLayout: {
    width: 29,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  activePosition: {
    textAlign: "center",
  },
  maizeTypo: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_3xs,
  },
  textPosition: {
    textAlign: "center",
  },
  roi1Position: {
    textAlign: "center",
  },
  months1Position: {
    textAlign: "center",
  },
  upBars1: {
    width: 337,
    height: 37,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    top: 40,
    left: 20,
  },
  investments: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    width: 104,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackage: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    width: 96,
    textAlign: "center",
    fontWeight: "500",
  },
  investmentChild: {
    marginTop: 20,
    alignSelf: "center",
  },
  investmentItem: {
    marginTop: 20,
    alignSelf: "center",
  },
  principal: {
    textAlign: "center",
  },
  geoLocation: {
    textAlign: "center",
  },
  harvestPeriod: {
    width: 84,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  insurance: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    textAlign: "center",
    width: 59,
  },
  roi: {
    textAlign: "center",
  },
  profit: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  monthly: {
    textAlign: "center",
  },
  text1: {
    textAlign: "center",
  },
  southWest: {
    textAlign: "center",
  },
  months: {
    width: 77,
    textAlign: "center",
  },
  activeWrapper: {
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [{ translateX: -15 }],
  },
  investMore: {
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    width: 124,
    height: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  investMoreWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 374,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  maizeOffersA1: {
    textAlign: "center",
  },
});

export default Investment;
