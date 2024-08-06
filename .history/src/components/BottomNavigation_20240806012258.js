import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = require("../assets/home.png");
            } else if (route.name === "Cards") {
              iconName = require("../assets/card.png");
            } else if (route.name === "Trade") {
              iconName = require("../assets/Tradeicon.png");
            } else if (route.name === "Investment") {
              iconName = require("../assets/investment.png");
            } else if (route.name === "Profile") {
              iconName = require("../assets/profile.png");
            }

            return (
              <Image
                style={[
                  styles.widthheight,
                  {
                    tintColor: focused
                      ? Color.colorYellowgreen_100
                      : Color.colorDarkslategray_100,
                  },
                ]}
                source={iconName}
              />
            );
          },
          tabBarActiveTintColor: Color.colorYellowgreen_100,
          tabBarInactiveTintColor: Color.colorDarkslategray_100,
          tabBarLabelStyle: { paddingBottom: 5, fontSize: FontSize.size_3xs },
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            backgroundColor: "white",
            borderTopColor: "transparent",
          },
        })}
        initialRouteName="Trade"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cards" component={MyCards} />
        <Tab.Screen name="Trade" component={Trade} />
        <Tab.Screen name="Investment" component={Investment} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  widthheight: {
    width: 24,
    height: 24,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
