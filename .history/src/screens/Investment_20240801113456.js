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
        <View style={[styles.investment]}>
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
  investmentLayout: {
    height: 148,
    width: 370,
    borderRadius: Border.br_8xs,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  principalTypo: {
    // width: 50,
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
    top: 700,

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
    top: 346,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  roi1Position: {
    top: 372,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  months1Position: {
    top: 398,

    position: "absolute",
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
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  activePackage: {
    top: 110,
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    width: 96,
    left: 30,
    textAlign: "left",
    fontWeight: "500",
    position: "absolute",
  },
  investmentChild: {
    top: 132,
  },
  investmentItem: {
    top: 430,
  },
  principal: {
    left: 31,
    top: 648,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  geoLocation: {
    left: 237,
    top: 674,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  harvestPeriod: {
    width: 84,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 31,
  },
  insurance: {
    left: 310,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    width: 59,
  },
  roi: {
    top: 674,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
    left: 31,
  },
  profit: {
    left: 301,
    top: 648,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 82,
    top: 648,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  monthly: {
    left: 53,
    top: 674,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    left: 334,
    top: 648,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  southWest: {
    top: 673,
    left: 317,
    width: 84,

    position: "absolute",
  },
  months: {
    left: 118,
    width: 77,
    top: 700,

    position: "absolute",
  },
  active: {
    marginTop: -3,
    marginLeft: -11.5,
    fontSize: FontSize.size_6xs,
    color: Color.colorGreen_100,
    width: 22,
    height: 5,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
  },
  activeWrapper: {
    left: 371,
    top: 700,

    position: "absolute",
  },
  maizeOffersA: {
    top: 287,
    left: 29,
  },
  principal1: {
    left: 27,
    width: 50,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  geoLocation1: {
    left: 233,
    width: 80,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  harvestPeriod1: {
    left: 27,
    width: 84,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  insurance1: {
    left: 306,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    width: 59,
  },
  roi1: {
    left: 27,
    width: 23,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  profit1: {
    left: 297,
    width: 33,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  text2: {
    left: 78,
    width: 62,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  monthly1: {
    left: 49,
    width: 85,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text3: {
    left: 330,
    width: 67,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  southWest1: {
    top: 371,
    left: 313,
    width: 84,

    position: "absolute",
  },
  months1: {
    left: 114,
    width: 71,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activeContainer: {
    left: 367,
    width: 29,
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: Border.br_mini,
    overflow: "hidden",
  },
  investMore: {
    marginTop: -15,
    marginLeft: -62,
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    width: 124,
    height: 30,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
  },
  investMoreWrapper: {
    top: 802,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: 374,
    height: 60,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  maizeOffersA1: {
    top: 585,
    left: 30,
  },
  investment: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,

    backgroundColor: Color.colorWhite,
  },
});

export default Investment;
