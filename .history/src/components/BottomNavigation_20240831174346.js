import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import Admin from "../screens/Admin";
import TabIcon from "../components/TabIcon";
import { FontSize, Color } from "../../GlobalStyles";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: Color.colorYellowgreen_100,
          tabBarInactiveTintColor: Color.colorDarkslategray_100,
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                source={require("../assets/home.png")}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={MyCards}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                source={require("../assets/card.png")}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Trade"
          component={Trade}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                source={require("../assets/Tradeicon.png")}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                source={require("../assets/investment.png")}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                source={require("../assets/profile.png")}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Admin"
          component={Admin}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-cog"
                size={24}
                color={
                  focused
                    ? Color.colorYellowgreen_100
                    : Color.colorDarkslategray_100
                }
                style={styles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarStyle: {
    position: "absolute",
    display: "flex",
    backgroundColor: "white",
    borderTopColor: "transparent",
  },
  tabBarLabelStyle: {
    paddingBottom: 5,
    fontSize: FontSize.size_3xs,
  },
  icon: {
    alignSelf: "center",
  },
});
