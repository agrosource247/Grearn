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
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const SingleInvestment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          {/* <StatusBar style="auto" /> */}
          <View>
            <View
              style={{ flexDirection: "row", marginTop: verticalScale(32) }}
            >
              <Pressable
                onPress={() => navigation.navigate("NewUserDashboard")}
              >
                <Image
                  style={styles.vuesaxlineararrowLeftIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlineararrowleft.png")}
                />
              </Pressable>

              <Text style={styles.investments}>Investments</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(21),
                marginBottom: verticalScale(10),
              }}
            >
              <Text style={styles.activePackage}>Active package</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              Maize offers a stable and potentially lucrative opportunity for
              both seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations
            </Text>
            <View
              style={{
                marginTop: verticalScale(24),
                marginBottom: verticalScale(34),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.principal}>
                  Principal: <Text style={styles.amount}>#40,000</Text>
                </Text>
                <Text style={styles.profit}>
                  Profit:<Text style={styles.amount}>#140,000</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>4% Monthly</Text>
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:
                  <Text style={styles.location}>South-west</Text>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.harvestPeriod}>
                  Harvest period: <Text style={styles.duration}>4-Months</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.insurance}>Insurance:</Text>

                  <View style={styles.activeWrapper}>
                    <Text style={styles.active}>Active</Text>
                  </View>
                </View>
              </View>
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
    backgroundColor: Color.colorWhite,
  },
  scrollContainer: {
    padding: moderateScale(20),
  },
  investment: {
    backgroundColor: Color.colorWhite,
  },
  vuesaxlineararrowLeftIcon: {
    height: verticalScale(24),
    width: scale(24),
  },
  investments: {
    fontSize: moderateScale(FontSize.size_base),
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackage: {
    fontSize: moderateScale(FontSize.size_xs),
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  investmentImage: {
    height: verticalScale(148),
    width: "100%",
    marginBottom: verticalScale(7),
    borderRadius: moderateScale(Border.br_8xs),
  },
  description: {
    fontSize: moderateScale(FontSize.size_3xs),
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  principal: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  geoLocation: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  harvestPeriod: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  insurance: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  roi: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  profit: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: verticalScale(8),
  },
  amount: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  monthly: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  location: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  duration: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },

  active: {
    fontSize: moderateScale(FontSize.size_6xs),
    color: Color.colorGreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  investMoreWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: moderateScale(Border.br_7xs),
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(35),
  },
  activeWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: moderateScale(Border.br_mini),
    width: scale(29),
    height: verticalScale(12),
  },
  investMore: {
    fontSize: moderateScale(FontSize.size_xl),
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default SingleInvestment;
