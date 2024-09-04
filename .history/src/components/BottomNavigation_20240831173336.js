import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/core";
import React, { useState } from "react";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";
import Admin from "./Admin";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Home");

  // Update the selected tab and navigate to the corresponding screen
  const handleTabPress = (tabName, routeName) => {
    setSelectedTab(tabName);
    navigation.navigate(routeName);
  };

  useFocusEffect(
    React.useCallback(() => {
      // Reset to Home tab when not focused on a specific tab
      return () => setSelectedTab("Home");
    }, [])
  );

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            backgroundColor: "white",
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: Color.colorYellowgreen_100, // Active tab color
          tabBarInactiveTintColor: Color.colorDarkslategray_100,
          tabBarLabelStyle: { paddingBottom: 5, fontSize: FontSize.size_3xs },
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Home", "NewUserDashboard")}
              >
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor:
                        focused || selectedTab === "Home"
                          ? Color.colorYellowgreen_100
                          : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/home.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={MyCards}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Cards", "MyCards")}
              >
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor:
                        focused || selectedTab === "Cards"
                          ? Color.colorYellowgreen_100
                          : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/card.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Trade"
          component={Trade}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Trade", "Trade")}
              >
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor:
                        focused || selectedTab === "Trade"
                          ? Color.colorYellowgreen_100
                          : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/Tradeicon.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Investment", "Investment")}
              >
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor:
                        focused || selectedTab === "Investment"
                          ? Color.colorYellowgreen_100
                          : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/investment.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Profile", "Profile")}
              >
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor:
                        focused || selectedTab === "Profile"
                          ? Color.colorYellowgreen_100
                          : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/profile.png")}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name="Admin"
          component={Admin}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity
                onPress={() => handleTabPress("Admin", "Admin")}
              >
                <FontAwesome5
                  name="user-cog"
                  size={24}
                  color={
                    focused || selectedTab === "Admin"
                      ? Color.colorYellowgreen_100
                      : Color.colorDarkslategray_100
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
            ),
          }}
        />
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
  icon: {
    alignSelf: "center",
  },
});
