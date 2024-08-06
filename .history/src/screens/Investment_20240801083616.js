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
    <GestureHandlerRootView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Pressable
            onPress={() => navigation.navigate("NewUserDashboard")}
            style={styles.backButton}
          >
            <Image
              style={styles.backIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>

          <Text style={styles.title}>Investments</Text>
          <Text style={styles.subtitle}>Active package</Text>

          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              contentFit="cover"
              source={require("../assets/frame-47.png")}
            />
            <Text style={styles.description}>
              Maize offers a stable and potentially lucrative opportunity for
              both seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations.
            </Text>
          </View>

          <View style={styles.investmentDetails}>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>Principal:</Text>
              <Text style={styles.value}>#40,000</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>Geo-location:</Text>
              <Text style={styles.value}>South-west</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>Harvest period:</Text>
              <Text style={styles.value}>12-Months</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>Insurance:</Text>
              <Text style={styles.value}>4% Monthly</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>ROI:</Text>
              <Text style={styles.value}>#140,000</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.label}>Profit:</Text>
              <Text style={styles.value}>#40,000</Text>
            </View>
          </View>

          <Pressable
            style={styles.investMoreButton}
            onPress={() => navigation.navigate("NewInvestment")}
          >
            <Text style={styles.investMoreText}>Invest more</Text>
          </Pressable>

          <Text style={styles.description}>
            Maize offers a stable and potentially lucrative opportunity for both
            seasoned and novice investors. As a staple crop with diverse
            applications, maize serves as a resilient investment choice amidst
            market fluctuations.
          </Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_smi,
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: 20,
    marginLeft: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 148,
    width: 370,
    borderRadius: Border.br_8xs,
    marginBottom: 10,
  },
  description: {
    width: "100%",
    color: Color.colorDimgray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    marginHorizontal: 20,
  },
  investmentDetails: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  detailsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  label: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorYellowgreen_100,
  },
  value: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkslategray_100,
  },
  investMoreButton: {
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  investMoreText: {
    fontSize: FontSize.size_xl,
    color: "#f2f2f2",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default Investment;
