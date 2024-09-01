import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";

const SingleInvestment = ({ route, navigation }) => {
  const { investments } = route.params; // Access the investments data

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <View>
            <View style={styles.header}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.arrowIcon}
                  source={require("../assets/vuesaxlineararrowleft.png")}
                />
              </Pressable>
              <Text style={styles.headerText}>Investment Details</Text>
            </View>
            <View style={styles.activePackageContainer}>
              <Text style={styles.activePackage}>Active Package</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              {/* {investments.description || "No description available."} */}
            </Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsRow}>
                <Text style={styles.principal}>
                  Principal:{" "}
                  {/* <Text style={styles.amount}>#{investments.principal}</Text> */}
                </Text>
                <Text style={styles.profit}>
                  Profit:{" "}
                  {/* <Text style={styles.amount}>#{investments.profit}</Text> */}
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.roi}>
                  {/* ROI: <Text style={styles.monthly}>{investments.roi}</Text> */}
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:{" "}
                  <Text style={styles.location}>{items.geo_location}</Text>
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.harvestPeriod}>
                  Harvest Period:{" "}
                  {/* <Text style={styles.duration}>{investments.duration}</Text> */}
                </Text>
                <View style={styles.insuranceWrapper}>
                  <Text style={styles.insuranceText}>
                    {/* {investments.insurance ? "Active" : "Not Active"} */}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable style={styles.investMoreWrapper}>
            <Text style={styles.investMore}>Invest More</Text>
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
  header: {
    flexDirection: "row",
    marginTop: verticalScale(32),
  },
  arrowIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
  headerText: {
    fontSize: moderateScale(FontSize.size_base),
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  activePackageContainer: {
    marginTop: verticalScale(21),
    marginBottom: verticalScale(10),
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
  detailsContainer: {
    marginTop: verticalScale(24),
    marginBottom: verticalScale(34),
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  principal: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  amount: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  roi: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  geoLocation: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  harvestPeriod: {
    fontSize: moderateScale(FontSize.size_2xs),
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  insuranceWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: moderateScale(Border.br_mini),
    width: scale(29),
    height: verticalScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
  insuranceText: {
    fontSize: moderateScale(FontSize.size_6xs),
    color: Color.colorGreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
  investMoreWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: moderateScale(Border.br_7xs),
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(35),
  },
  investMore: {
    fontSize: moderateScale(FontSize.size_xl),
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default SingleInvestment;
