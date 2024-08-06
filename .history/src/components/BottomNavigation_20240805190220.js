import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
            // height: 50, // Adjust the height here if needed
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
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate("Home")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cards"
          component={MyCards}
          options={{
            tabBarIcon: ({ focused }) => (
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
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate("MyCards")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Trade"
          component={Trade}
          options={{
            tabBarIcon: ({ focused }) => (
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
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate("Trade")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{
            tabBarIcon: ({ focused }) => (
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
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate("Investment")}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
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
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={() => navigation.navigate("Profile")}
              />
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
    // Add styles for your tab bar container if needed
  },
});
