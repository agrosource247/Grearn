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
    <GestureHandlerRootView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.investment, styles.investmentBg]}>
          <StatusBar style="auto" />

          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
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
            style={[styles.investmentItem, styles.investmentLayout]}
            contentFit="cover"
            source={require("../assets/frame-49.png")}
          />

          <View style={styles.detailsContainer}>
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
          </View>

          <View style={styles.activeWrapper}>
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
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  investmentBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_smi,
    width: "90%", // Adjust width as needed
    maxWidth: 400, // Optional: Max width for larger screens
  },
  investment: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_smi,
    width: "100%",
  },
  vuesaxlineararrowLeftIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  investments: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginTop: 50,
  },
  activePackage: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginVertical: 10,
  },
  investmentChild: {
    height: 148,
    width: "100%",
    borderRadius: Border.br_8xs,
    marginBottom: 20,
  },
  maizeOffersA: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  investmentItem: {
    height: 148,
    width: "100%",
    borderRadius: Border.br_8xs,
    marginBottom: 20,
  },
  detailsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  principal: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  geoLocation: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  harvestPeriod: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  insurance: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  roi: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  profit: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    marginBottom: 10,
  },
  text: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  monthly: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  text1: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  southWest: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  months: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  activeWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  active: {
    fontSize: FontSize.size_6xs,
    color: Color.colorGreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  investMoreWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  investMore: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  maizeOffersA1: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default Investment;
