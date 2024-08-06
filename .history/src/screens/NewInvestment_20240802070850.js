import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const NewInvestment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.newInvestment}>
          <StatusBar style={styles.statusBar} contentFit="cover" />

          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                style={styles.backIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investments}>Investments</Text>
          </View>
          <Text style={styles.choosePackage}>Choose package</Text>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-56.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Pepper</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.optionDetail}>Harvest period:</Text>
                  <Text style={styles.optionValue}>4-Months</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.optionDetail}>Geo-location:</Text>
                  <Text style={styles.optionValue}>South-west</Text>
                </View>

                <Text style={styles.optionInfo}>Info</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.optionDetail}>Minimum invest:</Text>
                  <Text style={styles.optionValue}>#25,000</Text>
                </View>

                <Text style={styles.optionDetail}>ROI:</Text>

                <Text style={styles.optionValue}>4% Monthly</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Pepper offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-561.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Melon</Text>
                <Text style={styles.optionInfo}>Info</Text>
                <Text style={styles.optionDetail}>Harvest period:</Text>
                <Text style={styles.optionDetail}>Minimum invest:</Text>
                <Text style={styles.optionDetail}>Geo-location:</Text>
                <Text style={styles.optionDetail}>ROI:</Text>
                <Text style={styles.optionValue}>4-Months</Text>
                <Text style={styles.optionValue}>South-west</Text>
                <Text style={styles.optionValue}>#25,000</Text>
                <Text style={styles.optionValue}>4% Monthly</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Melon offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.investmentOption}>
            <View style={styles.optionContainer}>
              <Image
                style={styles.optionImage}
                contentFit="cover"
                source={require("../assets/frame-562.png")}
              />
              <View style={styles.optionDetails}>
                <Text style={styles.optionTitle}>Honey</Text>
                <Text style={styles.optionInfo}>Info</Text>
                <Text style={styles.optionDetail}>Harvest period:</Text>
                <Text style={styles.optionDetail}>Minimum invest:</Text>
                <Text style={styles.optionDetail}>Geo-location:</Text>
                <Text style={styles.optionDetail}>ROI:</Text>
                <Text style={styles.optionValue}>4-Months</Text>
                <Text style={styles.optionValue}>South-west</Text>
                <Text style={styles.optionValue}>#25,000</Text>
                <Text style={styles.optionValue}>4% Monthly</Text>
                <Text style={styles.optionDescription}>
                  <Text style={styles.descriptionText}>
                    Honey offers a stable and potentially lucrative opportunity
                    for both seasoned and novice investors.
                  </Text>
                  <Text style={styles.seeMore}>See more</Text>
                </Text>
              </View>
            </View>
          </View>
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
  scrollViewContent: {
    padding: 20,
  },
  newInvestment: {
    flex: 1,
    alignItems: "flex-start",
  },
  statusBar: {
    height: 37,
  },
  header: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  investments: {
    marginLeft: 10,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  choosePackage: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_xs,
    marginBottom: 20,
    marginTop: 21,
  },
  investmentOption: {
    width: "100%",
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorYellowgreen_100,
    marginBottom: 20,
    // padding: 10,
  },
  optionContainer: {
    flexDirection: "row", // Align children horizontally
    justifyContent: "space-between", // Space between the child elements
  },
  optionImage: {
    width: 161,
    // borderRadius: Border.br_3xs,
    marginRight: 10,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
  },
  optionDetails: {
    flex: 1,
  },
  optionTitle: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 5,
  },
  optionInfo: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 5,
  },
  optionDetail: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: 5,
  },
  optionValue: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsSemiBold,
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDimgray_500,
  },
  descriptionText: {
    color: Color.colorDimgray_500,
  },
  seeMore: {
    textDecoration: "underline",
    color: Color.colorYellowgreen_100,
  },
});

export default NewInvestment;
