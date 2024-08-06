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
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.investment}>
          <StatusBar style="auto" />
          <View
            style={{
              position: "absolute", // Take it out of normal flow
              left: 15, // Distance from the left edge
              top: 30, // Optional: Adjust if needed
              // alignItems: "center", // Center items vertically
              flexDirection: "row", // Align children in a row
            }}
          >
            <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
              <Image
                // top arrow
                style={styles.vuesaxlineararrowLeftIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>

            <Text style={styles.investments}>Investments</Text>
          </View>

          <Text style={styles.activePackage}>Active package</Text>

          <Image
            // maize picture
            style={styles.investmentChild}
            contentFit="cover"
            source={require("../assets/frame-47.png")}
          />

          <Text style={styles.maizeOffersA}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations
          </Text>

          <View style={styles.detailsContainer}>
            <Text style={styles.principal1}>Principal:</Text>
            <Text style={styles.geoLocation1}>Geo-location:</Text>
            <Text style={styles.harvestPeriod1}>Harvest period:</Text>
            <Text style={styles.insurance1}>Insurance:</Text>
            <Text style={styles.roi1}>ROI:</Text>
            <Text style={styles.profit1}>Profit:</Text>
            <Text style={styles.text2}>#40,000</Text>
            <Text style={styles.monthly1}>4% Monthly</Text>
            <Text style={styles.text3}>#140,000</Text>
            <Text style={styles.southWest1}>South-west</Text>
            <Text style={styles.months1}>4-Months</Text>
          </View>

          <View style={styles.additionalInfoContainer}>
            <Image
              // ginger
              style={styles.investmentItem}
              contentFit="cover"
              source={require("../assets/frame-49.png")}
            />
            <Text style={styles.maizeOffersA1}>
              Maize offers a stable and potentially lucrative opportunity for
              both seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations
            </Text>
            <Text style={styles.principal}>Principal:</Text>
            <Text style={styles.geoLocation}>Geo-location:</Text>
            <Text style={styles.harvestPeriod}>Harvest period:</Text>
            <Text style={styles.insurance}>Insurance:</Text>
            <Text style={styles.roi}>ROI:</Text>
            <Text style={styles.profit}>Profit:</Text>
            <Text style={styles.text}>#40,000</Text>
            <Text style={styles.monthly}>4% Monthly</Text>
            <Text style={styles.text1}>#140,000</Text>
            <Text style={styles.southWest}>South-west</Text>
            <Text style={styles.months}>12-Months</Text>
            <View style={styles.activeWrapper}>
              <Text style={styles.active}>Active</Text>
            </View>
          </View>

          <Pressable
            style={styles.investMoreWrapper}
            onPress={() => navigation.navigate("NewInvestment")}
          >
            <Text style={styles.investMore}>Invest more</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  investment: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
    width: "100%",
  },
  vuesaxlineararrowLeftIcon: {
    height: 24,
    width: 24,
    // top: 20,
    // left: 20,
  },
  investments: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackage: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontWeight: "500",
    // position: "relative", // Take it out of normal flow
    left: 15, // Distance from the left edge
    top: 30, // Optional: Adjust if needed
    // alignItems: "center", // Center items vertically
  },
  investmentChild: {
    height: 148,
    width: "90%",
    borderRadius: Border.br_8xs,
    marginVertical: 20,
  },
  maizeOffersA: {
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 20,
  },
  detailsContainer: {
    width: "100%",
    alignItems: "center",
  },
  principal1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  geoLocation1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  harvestPeriod1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  insurance1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  roi1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  profit1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  text2: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  monthly1: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  text3: {
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  southWest1: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
  },
  months1: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
  },
  additionalInfoContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  investmentItem: {
    height: 148,
    width: "90%",
    borderRadius: Border.br_8xs,
    marginVertical: 20,
  },
  investMoreWrapper: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    marginVertical: 20,
  },
  investMore: {
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Investment;
