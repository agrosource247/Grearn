import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

const TabIcon = ({ route, focused }) => {
  let iconName;
  if (route.name === "Home") {
    iconName = require("../assets/home.png");
  } else if (route.name === "Investment") {
    iconName = require("../assets/investment.png");
  } else if (route.name === "Trade") {
    iconName = require("../assets/Tradeicon.png");
  } else if (route.name === "MyCards") {
    iconName = require("../assets/cards.png");
  } else if (route.name === "Profile") {
    iconName = require("../assets/profile.png");
  }

  return (
    <Image
      source={iconName}
      style={[
        styles.icon,
        {
          tintColor: focused
            ? Color.colorYellowgreen_100
            : Color.colorDarkslategray_100,
        },
      ]}
    />
  );
};

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabIcon route={route} focused={focused} />
        ),
        tabBarShowLabel: true,
        tabBarLabel: ({ focused }) => (
          <Text
            style={[
              styles.label,
              {
                color: focused
                  ? Color.colorYellowgreen_100
                  : Color.colorDarkslategray_100,
              },
            ]}
          >
            {route.name}
          </Text>
        ),
        tabBarButton: (props) => <TouchableOpacity {...props} />,
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
  label: {
    fontSize: FontSize.size_3xs,
    paddingBottom: 5,
  },
});
