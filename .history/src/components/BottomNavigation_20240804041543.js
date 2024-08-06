import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View } from "react-native";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { Color } from "../../GlobalStyles";
import { verticalScale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconSource;

          switch (route.name) {
            case "Home":
              iconSource = require("../assets/home.png");
              break;
            case "Cards":
              iconSource = require("../assets/card.png");
              break;
            case "Trade":
              iconSource = require("../assets/Tradeicon.png");
              break;
            case "Investment":
              iconSource = require("../assets/investment.png");
              break;
            case "Profile":
              iconSource = require("../assets/profile.png");
              break;
            default:
              iconSource = require("../assets/home.png");
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                style={[styles.icon, { tintColor: color }]}
                source={iconSource}
              />
            </View>
          );
        },
        tabBarShowLabel: true, // Hide labels
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopColor: "transparent",
          height: verticalScale(56),
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
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
