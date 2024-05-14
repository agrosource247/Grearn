import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  const navigation = useNavigation();
  // Define onPress functions for each tab
  const onPressHome = () => {
    // Navigate to Home screen
    navigation.navigate("Home");
    console.log("Home");
  };

  const onPressMyCards = () => {
    // Navigate to MyCards screen
    navigation.navigate("MyCards");
  };

  const onPressInvestment = () => {
    // Navigate to Investment screen
    navigation.navigate("Investment");
  };

  const onPressProfile = () => {
    // Navigate to Profile screen
    navigation.navigate("Profile");
  };

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
