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

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

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

  const imageSets = [
    [
      require("../assets/frame-25.png"),
      require("../assets/frame-37.png"),
      require("../assets/frame-36.png"),
      require("../assets/frame-33.png"),
      require("../assets/frame-35.png"),
      require("../assets/frame-34.png"),
    ],
    [
      require("../assets/frame-34.png"),
      require("../assets/frame-33.png"),
      require("../assets/frame-35.png"),
      require("../assets/frame-36.png"),
      require("../assets/frame-37.png"),
      require("../assets/frame-25.png"),
    ],
    [
      require("../assets/frame-33.png"),
      require("../assets/frame-34.png"),
      require("../assets/frame-35.png"),
      require("../assets/frame-25.png"),
      require("../assets/frame-37.png"),
      require("../assets/frame-36.png"),
    ],
    // Add more sets if needed
  ];

  const images = imageSets[currentSlideIndex % imageSets.length];

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
            <StatusBar />
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
            <SlideScreen onIndexChanged={setCurrentSlideIndex} />
            <SlidingBar />
            <View style={{ marginTop: verticalScale(16.49), width: "90%" }}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  style={[
                    index === 0 && styles.newUserDashboardItem,
                    index === 1 && styles.newUserDashboardChild5,
                    index === 2 && styles.newUserDashboardChild1,
                    index === 3 && styles.newUserDashboardChild3,
                    index === 4 && styles.newUserDashboardChild4,
                    index === 5 && styles.frameIcon,
                  ]}
                  contentFit="cover"
                  source={image}
                />
              ))}
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
