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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  activeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
  },
  investmentLayout: {
    height: 148,
    width: 370,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
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
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  maizeTypo: {
    width: 375,
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  textPosition: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  roi1Position: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  months1Position: {
    position: "absolute",
  },
  upBars1: {
    width: 337,
    height: 37,
    top: 0,
    position: "absolute",
  },
  activeWrapper: {
    top: 244,
    left: 159,
  },
  principal1: {
    top: 346,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  geoLocation1: {
    top: 373,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  harvestPeriod1: {
    top: 401,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  insurance1: {
    top: 428,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  roi1: {
    top: 456,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  profit1: {
    top: 486,
    left: 158,
    fontSize: FontSize.size_2xs,
  },
  text2: {
    top: 485,
    left: 232,
    fontSize: FontSize.size_sm,
  },
  monthly1: {
    top: 456,
    left: 232,
    fontSize: FontSize.size_sm,
  },
  text3: {
    top: 425,
    left: 232,
    fontSize: FontSize.size_sm,
  },
  southWest1: {
    top: 401,
    left: 232,
    fontSize: FontSize.size_sm,
  },
  months1: {
    top: 373,
    left: 232,
    fontSize: FontSize.size_sm,
  },
  investMoreWrapper: {
    top: 535,
    left: 136,
    width: 137,
    height: 29,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorYellowgreen_200,
    position: "absolute",
  },
  investMore: {
    top: 7,
    left: 22,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  activeContainer: {
    width: 29,
    height: 16,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  maizeOffersA1: {
    top: 612,
  },
  investment: {
    flex: 1, // Adjust to allow growth
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Optional: add some padding if needed
  },
});

export default Investment;
