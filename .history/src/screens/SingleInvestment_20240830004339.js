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

const SingleInvestment = ({ route }) => {
  const navigation = useNavigation();
  const { investment } = route.params; // Destructure investment from route.params

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
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
              <Text style={styles.activePackage}>{investment.product}</Text>{" "}
              {/* Dynamic Product Name */}
            </View>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              contentFit="cover"
              source={require("../assets/frame-47.png")} // Dynamic image can be set if available
            />
            <Text style={styles.description}>
              {investment.info} {/* Dynamic description */}
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
                  Principal: <Text style={styles.amount}>#40,000</Text>{" "}
                  {/* Dynamic data */}
                </Text>
                <Text style={styles.profit}>
                  Profit: <Text style={styles.amount}>#140,000</Text>{" "}
                  {/* Dynamic data */}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.roi}>
                  ROI: <Text style={styles.monthly}>{investment.roi}</Text>{" "}
                  {/* Dynamic ROI */}
                </Text>
                <Text style={styles.geoLocation}>
                  Geo-location:{" "}
                  <Text style={styles.location}>{investment.geo_location}</Text>{" "}
                  {/* Dynamic location */}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.harvestPeriod}>
                  Harvest period:{" "}
                  <Text style={styles.duration}>{investment.duration}</Text>{" "}
                  {/* Dynamic duration */}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.insurance}>Insurance:</Text>
                  <View style={styles.activeWrapper}>
                    <Text style={styles.active}>Active</Text>{" "}
                    {/* Assuming this is static */}
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

// Define the styles as you have before
const styles = StyleSheet.create({
  // Styles remain unchanged
});

export default SingleInvestment;
