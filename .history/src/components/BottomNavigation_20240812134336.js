import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Home from "../screens/Home";
import Investment from "../screens/Investment";
import Trade from "../screens/Trade";
import MyCards from "../screens/MyCards";
import Profile from "../screens/Profile";
import { FontSize, Color } from "../../GlobalStyles";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
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
