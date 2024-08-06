import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/NewUserDashboardStyles";
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import UseAuth from "../services/hooks/UseAuth";
import { User } from "../services/api";
import { useFocusEffect } from "@react-navigation/core";
import { Dimensions } from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import SlidingBar from "./SlidingBar";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");
const NewUserDashboard = ({ navigation }) => {
  const { auth, setAuth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [time, setTime] = React.useState("");
  const [loading, setLoading] = React.useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    setAuth({});
  };

  const displayGreeting = () => {
    const timer = new Date().getHours();

    if (timer >= 1 && timer < 12) setTime("Good morning");
    else if (timer >= 12 && timer < 16) setTime("Good afternoon");
    else if (timer >= 16 && timer < 19) setTime("Good evening");
    else setTime("Good night");
  };

  // To make a get request to the users API with jsonwebtokens
  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    displayGreeting();

    User(isMounted, setUsers, controller, auth, "get");

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      setUsers([]); // Clear previous data
      displayGreeting();
      User(true, setUsers, new AbortController(), auth, "get");
      setLoading(false);
    }, [])
  );

  return (
    <GestureHandlerRootView>
      <ScrollView
        scrollViewContent={{
          flexGrow: 1,
          alignItems: "center",
        }}
        style={{ backgroundColor: Color.colorMintcream }}
      >
        {users.length > 0 ? (
          <View style={styles.newUserDashboard}>
            {/* <StatusBar /> */}
            <Image
              style={styles.newUserDashboardChild}
              contentFit="cover"
              source={{ uri: users[0].avatar }}
            />
            <Text style={styles.goodMorning}>{time}</Text>
            <Text style={styles.omitoyinDavid}>
              {users[0].firstname} {users[0].lastname}
            </Text>
            <Image
              style={[styles.iconamoonnotification, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/iconamoonnotification.png")}
            />
            <View style={[styles.investmentPackageParent]}>
              <Text style={[styles.investmentPackage, styles.nilFlexBox]}>
                Investment package
              </Text>
              <Text style={styles.grearn}>Grearn</Text>
              <Text style={styles.totalAssets}>Total Assets</Text>
              <View
                style={[styles.vuesaxlinearhashtag, styles.iconChildLayout]}
              >
                <View style={styles.wrapper}>
                  <Text style={styles.text}># {users[0].walletbalance}</Text>
                </View>
              </View>
              <Image
                // This is the eye on the card
                style={[styles.vuesaxlineareyeIcon, styles.iconChildLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineareye.png")}
              />
              <View style={styles.nilWrapper}>
                <Text style={[styles.nil, styles.nilFlexBox]}>NIL</Text>
              </View>

              <Image
                /* This is for the white lineimage you are seeing above on the card */
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-23.png")}
              />
              <Image
                /* This is for the white lineimage you are seeing below on the card */
                style={styles.frameChild1}
                contentFit="cover"
                source={require("../assets/group-241.png")}
              />
            </View>
            <View
              style={{
                width: 20,
                height: 9,
                marginTop: 10,
                flexDirection: "row", // Horizontal layout
                alignItems: "center", // Center children vertically
              }}
            >
              <View
                style={{
                  width: scale(9),
                  height: scale(9),
                  borderRadius: scale(9 / 2),
                  backgroundColor: Color.colorYellowgreen_100,
                  marginRight: scale(5),
                }}
              ></View>
              <View
                style={{
                  width: scale(6),
                  height: scale(6),
                  borderRadius: scale(6 / 2),
                  backgroundColor: Color.colorA,
                }}
              ></View>
            </View>
            <FrameComponent navigation={navigation} />
            <Text style={[styles.liveStocks]}>Live stocks</Text>
            <SlideScreen />
            <SlidingBar />
            <View style={{ marginTop: verticalScale(16.49), width: "90%" }}>
              <Image
                //Thsi the Zmaize image
                style={[styles.newUserDashboardItem]}
                contentFit="cover"
                source={require("../assets/frame-25.png")}
              />
              <Image
                //This is the melon image
                style={[styles.newUserDashboardChild5]}
                contentFit="cover"
                source={require("../assets/frame-37.png")}
              />
              <Image
                //This is the honey Image
                style={[styles.newUserDashboardChild1]}
                contentFit="cover"
                source={require("../assets/frame-36.png")}
              />
              <Image
                //This is the ginger image
                style={[styles.newUserDashboardChild3]}
                contentFit="cover"
                source={require("../assets/frame-33.png")}
              />
              <Image
                //This is the pepper image
                style={[styles.newUserDashboardChild4]}
                contentFit="cover"
                source={require("../assets/frame-35.png")}
              />
              <Image
                //This is the Soya bean Image
                style={[styles.frameIcon]}
                contentFit="cover"
                source={require("../assets/frame-34.png")}
              />
              <Image
                //This is the Guinea corn image
                style={[styles.newUserDashboardInner]}
                contentFit="cover"
                source={require("../assets/frame-38.png")}
              />

              <Image
                //This is the millet image
                style={[styles.newUserDashboardChild2]}
                contentFit="cover"
                source={require("../assets/frame-26.png")}
              />
            </View>
          </View>
        ) : loading ? (
          <View style={styles.newUserDashboard}>
            <Text style={styles.omitoyinDavid}>Loading...</Text>
          </View>
        ) : (
          <View style={styles.newUserDashboard}>
            <Text style={styles.omitoyinDavid}>Loading...</Text>
          </View>
        )}
      </ScrollView>
      <BottomNavigation />
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;
