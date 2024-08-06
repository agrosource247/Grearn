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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.investment}>
          <StatusBar style="auto" />
          <View>
            <View style={{ flexDirection: "row", marginTop: 32 }}>
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
            <View>
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
            <Text style={styles.principal}>Principal:</Text>
            <Text style={styles.geoLocation}>Geo-location:</Text>
            <Text style={styles.harvestPeriod}>Harvest period:</Text>
            <Text style={styles.insurance}>Insurance:</Text>
            <Text style={styles.roi}>ROI:</Text>
            <Text style={styles.profit}>Profit:</Text>
            <Text style={styles.amount}>#40,000</Text>
            <Text style={styles.monthly}>4% Monthly</Text>
            <Text style={styles.amount}>#140,000</Text>
            <Text style={styles.location}>South-west</Text>
            <Text style={styles.duration}>4-Months</Text>
          </View>
          <View>
            <Image
              style={styles.investmentImage}
              contentFit="cover"
              source={require("../assets/frame-49.png")}
            />
            <Text style={styles.description}>
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
            <Text style={styles.amount}>#40,000</Text>
            <Text style={styles.monthly}>4% Monthly</Text>
            <Text style={styles.amount}>#140,000</Text>
            <Text style={styles.location}>South-west</Text>
            <Text style={styles.duration}>12-Months</Text>
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
    padding: 20,
  },
  investment: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
  },
  vuesaxlineararrowLeftIcon: {
    height: 24,
    width: 24,
    marginBottom: 16,
  },
  investments: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 16,
  },
  activePackage: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  investmentImage: {
    height: 148,
    width: "100%",
    borderRadius: Border.br_8xs,
    marginBottom: 16,
  },
  description: {
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginBottom: 16,
  },
  principal: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  geoLocation: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  harvestPeriod: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  insurance: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  roi: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  profit: {
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 8,
  },
  amount: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 8,
  },
  monthly: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 8,
  },
  location: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 8,
  },
  duration: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 8,
  },

  active: {
    fontSize: FontSize.size_6xs,
    color: Color.colorGreen_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  investMoreWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  investMore: {
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default Investment;
