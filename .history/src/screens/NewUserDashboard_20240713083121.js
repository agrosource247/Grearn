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
      <ScrollView scrollViewContent={{ flexGrow: 1 }}>
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
            <SlideScreen />
            <View>
              <Text>Southwest</Text>
              <Text>Northwest</Text>
              <Text>Southeast</Text>
            </View>
            {/* <Text style={[styles.topGainers, styles.topTypo]}>Top Gainers</Text>
        
            <Text style={[styles.topLosers, styles.topTypo]}>Top Losers</Text> */}
            {/* <Image
              //Thsi the Zmaize image
              style={[styles.newUserDashboardItem, styles.newLayout1]}
              contentFit="cover"
              source={require("../assets/frame-25.png")}
            /> */}
            {/* <Image
              //This is the Guinea corn image
              style={[styles.newUserDashboardInner, styles.newLayout]}
              contentFit="cover"
              source={require("../assets/frame-38.png")}
            /> */}
            {/* <Image
              //This is the Soya bean Image
              style={[styles.frameIcon, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame-34.png")}
            /> */}
            {/* <Image
              //This is the honey Image
              style={[styles.newUserDashboardChild1, styles.newChildLayout1]}
              contentFit="cover"
              source={require("../assets/frame-36.png")}
            /> */}
            {/* <Image
              //This is the millet image
              style={[styles.newUserDashboardChild2, styles.newLayout1]}
              contentFit="cover"
              source={require("../assets/frame-26.png")}
            /> */}
            {/* <Image
              //This is the ginger image
              style={[styles.newUserDashboardChild3, styles.newLayout]}
              contentFit="cover"
              source={require("../assets/frame-33.png")}
            /> */}
            {/* <Image
              //This is the pepper image
              style={[styles.newUserDashboardChild4, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame-35.png")}
            /> */}
            {/* <Image
              //This is the melon image
              style={[styles.newUserDashboardChild5, styles.newChildLayout1]}
              contentFit="cover"
              source={require("../assets/frame-37.png")}
            /> */}
            {/* <Text style={[styles.maize, styles.maizeLayout]}>Maize</Text>
            <Text style={[styles.guineaCorn, styles.soyaBeansTypo]}>
              Guinea corn
            </Text>
            <Text style={[styles.soyaBeans, styles.pepperPosition]}>
              Soya Beans
            </Text>
            <Text style={[styles.honey, styles.honeyLayout]}>Honey</Text>
            <Text style={[styles.millet, styles.melonTypo]}>Millet</Text>
            <Text style={[styles.ginger, styles.honeyTypo]}>Ginger</Text>
            <Text style={[styles.pepper, styles.honeyTypo]}>Pepper</Text>
            <Text style={[styles.melon, styles.melonTypo]}>Melon</Text>
            <Text style={[styles.southEastRegion, styles.southLayout]}>
              South-east region
            </Text> */}
            {/* <Text style={[styles.southEastRegion1, styles.southTypo2]}>
              South-east region
            </Text>
            <Text style={[styles.southEastRegion2, styles.southTypo1]}>
              South-east region
            </Text>
            <Text style={[styles.southEastRegion3, styles.southTypo]}>
              South-east region
            </Text>
            <Text style={[styles.southWestRegion, styles.southTypo3]}>
              South-west region
            </Text>
            <Text style={[styles.southWestRegion1, styles.southTypo2]}>
              South-west region
            </Text>
            <Text style={[styles.southWestRegion2, styles.southTypo1]}>
              South-west region
            </Text>
            <Text style={[styles.southWestRegion3, styles.southTypo]}>
              South-west region
            </Text>
            <Text style={[styles.text1, styles.textTypo1]}>+59%</Text>
            <Text style={[styles.text2, styles.textPosition2]}>+59%</Text>
            <Text style={[styles.text3, styles.textPosition1]}>+59%</Text>
            <Text style={[styles.text4, styles.textPosition]}>+59%</Text>
            <Text style={[styles.text5, styles.textLayout]}>-45%</Text>
            <Text style={[styles.text6, styles.textLayout]}>-45%</Text>
            <Image
              style={[styles.newUserDashboardChild6, styles.newChildLayout2]}
              contentFit="cover"
              source={require("../assets/frame-30.png")}
            />
            <Text style={[styles.text7, styles.textLayout]}>-45%</Text>
            <Text style={[styles.text8, styles.textLayout]}>-45%</Text>
            <Image
              style={[styles.newUserDashboardChild7, styles.newChildLayout2]}
              contentFit="cover"
              source={require("../assets/frame-31.png")}
            />

            <Image
              style={styles.newUserDashboardChild11}
              contentFit="cover"
              source={require("../assets/group-26.png")}
            /> */}
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
      {/* <BottomNavigation /> */}
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;
