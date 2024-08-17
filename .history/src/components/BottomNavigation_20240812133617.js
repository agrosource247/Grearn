import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/core";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const navigation = useNavigation();

  const tabOptions = (iconSource) => ({
    tabBarIcon: ({ focused }) => (
      <Image
        style={[
          styles.icon,
          {
            tintColor: focused
              ? Color.colorYellowgreen_100
              : Color.colorDarkslategray_100,
          },
        ]}
        source={iconSource}
      />
    ),
  });

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            backgroundColor: "white",
            borderTopColor: "transparent",
            height: 50,
          },
          tabBarActiveTintColor: Color.colorYellowgreen_100,
          tabBarInactiveTintColor: Color.colorDarkslategray_100,
          tabBarLabelStyle: { paddingBottom: 5, fontSize: FontSize.size_3xs },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={tabOptions(require("../assets/home.png"))}
        />
        <Tab.Screen
          name="Cards"
          component={MyCards}
          options={tabOptions(require("../assets/card.png"))}
        />
        <Tab.Screen
          name="Trade"
          component={Trade}
          options={tabOptions(require("../assets/Tradeicon.png"))}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={tabOptions(require("../assets/investment.png"))}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={tabOptions(require("../assets/profile.png"))}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
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
