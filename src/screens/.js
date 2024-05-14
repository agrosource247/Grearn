import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text } from "react-native";
import HomeIcon from "../assets/home.png";
import CardIcon from "../assets/card.png";
import InvestmentIcon from "../assets/investment.png";
import ProfileIcon from "../assets/profile.png";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Profile from "../screens/Profile";
import MyCards from "../screens/MyCards";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Home");

  const onPressTab = (tabName) => {
    setSelectedTab(tabName);
    navigation.navigate(tabName);
  };

  const renderTabBarButton = (tabName, icon, iconName) => {
    const isSelected = selectedTab === tabName;

    return (
      <TouchableOpacity
        onPress={() => onPressTab(tabName)}
        style={[
          styles.tabBarButton,
          isSelected ? { borderColor: Color.colorYellowgreen_100 } : {},
        ]}
      >
        <Image
          style={[
            styles.icon,
            isSelected ? { tintColor: Color.colorYellowgreen_100 } : {},
          ]}
          source={icon}
        />
        <Text
          style={[
            styles.iconText,
            isSelected ? { color: Color.colorYellowgreen_100 } : {},
          ]}
        >
          {iconName}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tabBarContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            display: "flex",
            backgroundColor: "white",
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: Color.colorYellowgreen_100,
          tabBarInactiveTintColor: Color.colorDarkslategray_100,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) =>
              renderTabBarButton("Home", HomeIcon, "Home"),
          }}
        />
        <Tab.Screen
          name="MyCards"
          component={MyCards}
          options={{
            tabBarIcon: ({ color }) =>
              renderTabBarButton("MyCards", CardIcon, "My Cards"),
          }}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{
            tabBarIcon: ({ color }) =>
              renderTabBarButton("Investment", InvestmentIcon, "Investment"),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) =>
              renderTabBarButton("Profile", ProfileIcon, "Profile"),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarButton: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: Border.br_8xs,
    padding: 5,
  },
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontSize: FontSize.size_xs,
    marginTop: 2,
  },
});
