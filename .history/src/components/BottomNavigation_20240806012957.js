import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? require("../assets/home_active.png")
              : require("../assets/home_inactive.png");
          } else if (route.name === "Investment") {
            iconName = focused
              ? require("../assets/investment_active.png")
              : require("../assets/investment_inactive.png");
          } else if (route.name === "Trade") {
            iconName = focused
              ? require("../assets/trade_active.png")
              : require("../assets/trade_inactive.png");
          } else if (route.name === "MyCards") {
            iconName = focused
              ? require("../assets/cards_active.png")
              : require("../assets/cards_inactive.png");
          } else if (route.name === "Profile") {
            iconName = focused
              ? require("../assets/profile_active.png")
              : require("../assets/profile_inactive.png");
          }

          return <Image source={iconName} style={styles.icon} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, backgroundColor: Color.white },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Investment" component={Investment} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="MyCards" component={MyCards} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
