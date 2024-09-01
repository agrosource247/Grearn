import React from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { Border, Color, FontFamily, FontSize } from "../../GlobalStyles";
import UseAuth from "../services/hooks/UseAuth";
import { AdminInvestmentCall } from "../services/api";
import {
  Image,
  Text,
  StyleSheet,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const SingleInvestment = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params || {}; // Safeguard for undefined params
  const [investments, setInvestments] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { auth } = UseAuth();

  // Fetch investments on mount and when auth.id changes
  React.useEffect(() => {
    setLoading(true);
    AdminInvestmentCall(setInvestments, new AbortController(), "get").finally(
      () => {
        setLoading(false);
      }
    );
  }, [auth.id]);

  // Refetch investments when the component is focused
  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      AdminInvestmentCall(setInvestments, new AbortController(), "get").finally(
        () => {
          setLoading(false);
        }
      );
    }, [])
  );

  // If item data is missing or investments are empty
  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No investment data available.</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={styles.vuesaxlineararrowLeftIcon}
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investments}>Investments</Text>
          </View>
          <View style={styles.activePackageContainer}>
            <Text style={styles.activePackage}>Active Package</Text>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              {item.description || "No description available."}
            </Text>
            <View style={styles.detailsContainer}>
              <View style={styles.detailsRow}>
                <Text style={styles.principal}>
                  Principal: <Text style={styles.amount}># {item.amount}</Text>
                </Text>
                <Text style={styles.profit}>
                  Profit: <Text style={styles.amount}># {item.profit}</Text>
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>{item.roi}</Text>
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:{" "}
                  <Text style={styles.location}>{item.geo_location}</Text>
                </Text>
              </View>
              <View style={styles.detailsRow}>
                <Text style={styles.harvestPeriod}>
                  Harvest period:{" "}
                  <Text style={styles.duration}>{item.duration}</Text>
                </Text>
                <View style={styles.insuranceWrapper}>
                  <Text style={styles.insurance}>
                    {item.insurance ? "Active" : "Not Active"}
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

export default SingleInvestment;

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
    alignItems: "center",
  },
  vuesaxlineararrowLeftIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
  investments: {
    fontSize: moderateScale(FontSize.size_base),
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginLeft: scale(10),
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
    marginVertical: verticalScale(10),
  },
  detailsContainer: {
    marginVertical: verticalScale(24),
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(8),
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
  duration: {
    fontSize: moderateScale(FontSize.size_sm),
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  insuranceWrapper: {
    backgroundColor: Color.colorYellowgreen_200,
    borderRadius: moderateScale(Border.br_mini),
    width: scale(29),
    height: verticalScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
  insurance: {
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
    marginTop: verticalScale(20),
  },
  investMore: {
    fontSize: moderateScale(FontSize.size_xl),
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  errorText: {
    fontSize: moderateScale(FontSize.size_base),
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    marginTop: verticalScale(20),
  },
});
