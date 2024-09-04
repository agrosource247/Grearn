import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";
import Admin from "./Admin ";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const navigation = useNavigation();

  // Define onPress functions for each tab
  const onPressHome = () => navigation.navigate("NewUserDashboard");
  const onPressMyCards = () => navigation.navigate("MyCards");
  const onPressTrade = () => navigation.navigate("Trade");
  const onPressInvestment = () => navigation.navigate("Investment");
  const onPressProfile = () => navigation.navigate("Profile");
  const onPressAdmin = () => navigation.navigate("Admin");

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
          tabBarActiveTintColor: Color.colorYellowgreen_100,
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
                style={{
                  tintColor: focused
                    ? Color.colorYellowgreen_100
                    : Color.colorDarkslategray_100,
                }}
                onPress={onPressHome}
              >
                <Image
                  style={[styles.widthheight]}
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
        <Tab.Screen
          name="Admin"
          component={Admin}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity onPress={onPressAdmin}>
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
