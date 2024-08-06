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

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: verticalScale(60),
          backgroundColor: Color.blue_300,
          paddingBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../assets/home.png")}
                style={[styles.tabIcon, focused && styles.focusedTabIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../assets/investment.png")}
                style={[styles.tabIcon, focused && styles.focusedTabIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../assets/Tradeicon.png")}
                style={[styles.tabIcon, focused && styles.focusedTabIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyCards"
        component={MyCards}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../../assets/cardsicon.png")}
                style={[styles.tabIcon, focused && styles.focusedTabIcon]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={require("../../assets/profileicon.png")}
                style={[styles.tabIcon, focused && styles.focusedTabIcon]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: verticalScale(20),
    height: verticalScale(20),
    tintColor: Color.gray_300,
  },
  focusedTabIcon: {
    tintColor: Color.blue_300,
  },
});

export default BottomNavigation;
