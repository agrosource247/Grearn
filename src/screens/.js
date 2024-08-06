<<<<<<< HEAD
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
  // Define onPress functions for each tab

  // Navigate to Home screen
  const onPressHome = () => navigation.navigate("Home");

  // Navigate to MyCards screen
  const onPressMyCards = () => navigation.navigate("MyCards");

  // Navigate to onPressTrade screen
  const onPressTrade = () => navigation.navigate("Trade");

  // Navigate to Investment screen
  const onPressInvestment = () => navigation.navigate("Investment");

  // Navigate to Profile screen
  const onPressProfile = () => navigation.navigate("Profile");

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
            // height: 50, // Adjust the height here
          },
          tabBarActiveTintColor: Color.colorYellowgreen_100, // Set active tab color
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
              <TouchableOpacity>
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor: focused
                        ? Color.colorYellowgreen_100
                        : Color.colorDarkslategray_100,
                    },
                  ]}
                  source={require("../assets/home.png")}
                />
              </TouchableOpacity>
            ),
          }}
          initialParams={{ navigation }} // pass navigation props as initialParams
        />
        <Tab.Screen
          name="Cards"
          component={MyCards}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity onPress={onPressMyCards}>
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor: focused
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
              <TouchableOpacity onPress={onPressTrade}>
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor: focused
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
              <TouchableOpacity onPress={onPressInvestment}>
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor: focused
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
              <TouchableOpacity onPress={onPressProfile}>
                <Image
                  style={[
                    styles.widthheight,
                    {
                      tintColor: focused
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
    // Add styles for your tab bar container
  },
});
///////
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
                source={require("../../assets/homeicon.png")}
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
                source={require("../../assets/investment.png")}
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
                source={require("../../assets/tradeicon.png")}
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
=======
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
			<TouchableOpacity onPress={() => onPressTab(tabName)} style={[styles.tabBarButton, isSelected ? { borderColor: Color.colorYellowgreen_100 } : {}]}>
				<Image style={[styles.icon, isSelected ? { tintColor: Color.colorYellowgreen_100 } : {}]} source={icon} />
				<Text style={[styles.iconText, isSelected ? { color: Color.colorYellowgreen_100 } : {}]}>{iconName}</Text>
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
						tabBarIcon: ({ color }) => renderTabBarButton("Home", HomeIcon, "Home"),
					}}
				/>
				<Tab.Screen
					name="MyCards"
					component={MyCards}
					options={{
						tabBarIcon: ({ color }) => renderTabBarButton("MyCards", CardIcon, "My Cards"),
					}}
				/>
				<Tab.Screen
					name="Investment"
					component={Investment}
					options={{
						tabBarIcon: ({ color }) => renderTabBarButton("Investment", InvestmentIcon, "Investment"),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						tabBarIcon: ({ color }) => renderTabBarButton("Profile", ProfileIcon, "Profile"),
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
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
