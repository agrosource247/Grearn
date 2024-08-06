import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let tintColor;

          switch (route.name) {
            case "Home":
              iconSource = require("../assets/home.png");
              tintColor = focused
                ? Color.colorYellowgreen_100
                : Color.colorDarkslategray_100;
              break;
            case "Cards":
              iconSource = require("../assets/card.png");
              tintColor = focused
                ? Color.colorYellowgreen_100
                : Color.colorDarkslategray_100;
              break;
            case "Trade":
              iconSource = require("../assets/Tradeicon.png");
              tintColor = focused
                ? Color.colorYellowgreen_100
                : Color.colorDarkslategray_100;
              break;
            case "Investment":
              iconSource = require("../assets/investment.png");
              tintColor = focused
                ? Color.colorYellowgreen_100
                : Color.colorDarkslategray_100;
              break;
            case "Profile":
              iconSource = require("../assets/profile.png");
              tintColor = focused
                ? Color.colorYellowgreen_100
                : Color.colorDarkslategray_100;
              break;
            default:
              iconSource = require("../assets/home.png");
              tintColor = Color.colorDarkslategray_100;
          }

          return (
            <View style={styles.iconContainer}>
              <Image style={[styles.icon, { tintColor }]} source={iconSource} />
              <Text style={[styles.label, { color: tintColor }]}>
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: FontSize.size_3xs,
          marginBottom: 5,
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopColor: "transparent",
          height: 70, // Adjust the height as needed to fit text
        },
        tabBarActiveTintColor: Color.colorYellowgreen_100,
        tabBarInactiveTintColor: Color.colorDarkslategray_100,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cards" component={MyCards} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Investment" component={Investment} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: FontSize.size_3xs,
  },
});
