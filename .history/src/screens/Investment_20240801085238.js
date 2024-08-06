import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";

const Investment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView style={styles.centeredContainer}>
      <ScrollView>
        <View style={styles.investment}>
          <StatusBar style={styles.upBars1} // hidden />
          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
              style={styles.vuesaxlineararrowLeftIcon}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft.png")}
            />
          </Pressable>

          <Text style={styles.investments}>Investments</Text>
          <Text style={[styles.activePackage, styles.activeTypo]}>Active package</Text>
          <Image
            style={styles.investmentChild}
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
            style={styles.investmentItem}
            contentFit="cover"
            source={require("../assets/frame-49.png")}
          />
          <View style={styles.investmentDetails}>
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
            <View style={styles.activeContainer}>
              <Text style={styles.active}>Active</Text>
            </View>
            <Pressable
              style={styles.investMoreWrapper}
              onPress={() => navigation.navigate("NewInvestment")}
            >
              <Text style={styles.investMore}>Invest more</Text>
            </Pressable>
            <Text style={[styles.maizeOffersA1, styles.maizeTypo]}>
              Maize offers a stable and potentially lucrative opportunity for both
              seasoned and novice investors. As a staple crop with diverse
              applications, maize serves as a resilient investment choice amidst
              market fluctuations
            </Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // ... other styles
});

export default Investment;
