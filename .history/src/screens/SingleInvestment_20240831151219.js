import React from "react";
import UseAuth from "../services/hooks/UseAuth"; // Authentication hook
import {
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native"; // Required components
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Gesture handling library
import { moderateScale, scale, verticalScale } from "react-native-size-matters"; // For responsive design

// SingleInvestment component
const SingleInvestment = ({ route, navigation }) => {
  const { investments } = route.params;
  const item = route?.params?.item || {}; // Safeguard for undefined params
  const [loading, setLoading] = React.useState(true);
  const { auth } = UseAuth();

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <View>
            {/* Back button and header */}
            <View
              style={{ flexDirection: "row", marginTop: verticalScale(32) }}
            >
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  style={styles.vuesaxlineararrowLeftIcon}
                  source={require("../assets/vuesaxlineararrowleft.png")}
                />
              </Pressable>
              <Text style={styles.investments}>Investments</Text>
            </View>

            {/* Active package text */}
            <View
              style={{
                marginTop: verticalScale(21),
                marginBottom: verticalScale(10),
              }}
            >
              <Text style={styles.activePackage}>Active package</Text>
            </View>
          </View>

          {/* Investment details */}
          <View>
            <Image
              style={styles.investmentImage}
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              {item.description || "No description available."}
            </Text>

            <View
              style={{
                marginTop: verticalScale(24),
                marginBottom: verticalScale(34),
              }}
            >
              {/* Principal and Profit */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.principal}>
                  Principal: <Text style={styles.amount}>#{item.amount}</Text>
                </Text>
                <Text style={styles.profit}>
                  Profit:<Text style={styles.amount}>#{item.profit}</Text>
                </Text>
              </View>

              {/* ROI and Geo-location */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>{item.roi}</Text>
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:
                  <Text style={styles.location}>{item.location}</Text>
                </Text>
              </View>

              {/* Harvest period and Insurance */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.harvestPeriod}>
                  Harvest period:{" "}
                  <Text style={styles.duration}>{item.duration}</Text>
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.insurance}>Insurance:</Text>
                  <View style={styles.activeWrapper}>
                    <Text style={styles.active}>
                      {item.insurance ? "Active" : "Not Active"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Invest more button */}
          <Pressable style={styles.investMoreWrapper}>
            <Text style={styles.investMore}>Invest more</Text>
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
    backgroundColor: "#FFF", // Replaced Color.colorWhite with plain hex value
  },
  scrollContainer: {
    padding: moderateScale(20),
  },
  investment: {
    backgroundColor: "#FFF", // Replaced Color.colorWhite
  },
  vuesaxlineararrowLeftIcon: {
    height: verticalScale(20),
    width: scale(20),
  },
  investments: {
    fontSize: moderateScale(14), // Removed FontSize.size_base and used plain value
    color: "#4F4F4F", // Replaced Color.colorDarkslategray_500 with hex value
    fontFamily: "Poppins-SemiBold", // Removed FontFamily constant
    fontWeight: "600",
  },
  activePackage: {
    fontSize: moderateScale(12), // Removed FontSize.size_xs and used plain value
    color: "#6E6E6E", // Replaced Color.colorDimgray_600 with hex value
    fontFamily: "Poppins-Medium", // Removed FontFamily constant
    fontWeight: "500",
  },
  investmentImage: {
    height: verticalScale(148),
    width: "100%",
    marginBottom: verticalScale(7),
    borderRadius: moderateScale(8), // Removed Border.br_8xs and used plain value
  },
  description: {
    fontSize: moderateScale(10), // Removed FontSize.size_3xs
    color: "#757575", // Replaced Color.colorDimgray_500 with hex value
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  geoLocation: {
    fontSize: moderateScale(12), // Removed FontSize.size_2xs
    color: "#9ACD32", // Replaced Color.colorYellowgreen_100 with hex value
    fontFamily: "Poppins-Regular",
    marginBottom: verticalScale(8),
  },
  insurance: {
    fontSize: moderateScale(12), // Removed FontSize.size_2xs
    color: "#9ACD32",
    fontFamily: "Poppins-Regular",
    marginBottom: verticalScale(8),
  },
  roi: {
    fontSize: moderateScale(12), // Removed FontSize.size_2xs
    color: "#9ACD32",
    fontFamily: "Poppins-Regular",
    marginBottom: verticalScale(8),
  },
  profit: {
    fontSize: moderateScale(12), // Removed FontSize.size_2xs
    color: "#9ACD32",
    fontFamily: "Poppins-Regular",
    marginBottom: verticalScale(8),
  },
  amount: {
    fontSize: moderateScale(14), // Removed FontSize.size_sm
    color: "#333333", // Replaced Color.colorDarkslategray_100 with hex value
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  monthly: {
    fontSize: moderateScale(14),
    color: "#333333",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  location: {
    fontSize: moderateScale(14),
    color: "#333333",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  duration: {
    fontSize: moderateScale(14),
    color: "#333333",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
    marginBottom: verticalScale(8),
  },
  active: {
    fontSize: moderateScale(8), // Removed FontSize.size_6xs
    color: "#32CD32", // Replaced Color.colorGreen_100 with hex value
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    textAlign: "center",
  },
  investMoreWrapper: {
    backgroundColor: "#9ACD32", // Replaced Color.colorYellowgreen_100
    borderRadius: moderateScale(4), // Removed Border.br_7xs
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(35),
  },
  activeWrapper: {
    backgroundColor: "#ADFF2F", // Replaced Color.colorYellowgreen_200
    borderRadius: moderateScale(6), // Removed Border.br_mini
    width: scale(29),
    height: verticalScale(12),
  },
  investMore: {
    fontSize: moderateScale(16), // Removed FontSize.size_xl
    color: "#f2f2f2",
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
  },
});
