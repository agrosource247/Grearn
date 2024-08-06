import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/NewUserDashboardStyles";
import ImageWithText from "./ImagesWithText";
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
import { Modal } from "react-native";
import { useState } from "react";
import { Button } from "react-native";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");
const imageData = [
  {
    source: require("../assets/frame-25.png"),
    text: "NGN3,200",
    text2: "Maize",
    text3: "Grains",
  },
  {
    source: require("../assets/frame-37.png"),
    text: "NGN6,405",
    text2: "Melon",
    text3: "Cucurbits",
  },
  {
    source: require("../assets/frame-36.png"),
    text: "NGN8,600",
    text2: "Honey",
    text3: "Produce section",
  },
  {
    source: require("../assets/frame-33.png"),
    text: "NGN3,200",
    text2: "Ginger",
    text3: "Herbaceous",
  },
  {
    source: require("../assets/frame-35.png"),
    text: "NGN3,200",
    text2: "Pepper",
    text3: "Vegetables",
  },
  {
    source: require("../assets/frame-34.png"),
    text: "NGN3,200",
    text2: "Soya beans",
    text3: "Legumes",
  },
];

const NewUserDashboard = ({ navigation }) => {
  const { auth, setAuth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [time, setTime] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  };
  const toggleTradeNow = () => {
    //Naviagte to the home TradingView
    // navigation.navigate("NewUserDashboard");
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  };
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
            <SlidingBar />

            <Modal visible={isModalVisible} transparent animationType="slide">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text>Hello David!</Text>
                  <Text style={styles.modalText}>
                    Welcome to <Text style={{ color: "green" }}>Grearn</Text>
                  </Text>
                  <Image source={require("../assets/close-circle.png")} />
                  <Pressable style={{ flexDirection: "row" }}>
                    <Image
                      contentFit="cover"
                      source={require("../assets/select_trade.png")}
                      style={{ marginTop: 72, width: 268, height: 165 }}
                    />
                  </Pressable>

                  {/* <View style={styles.buttonContainer}>
                      <Button title="Yes" onPress={toggleModal} />
                      <Button title="No" onPress={toggleModal} />
                    </View> */}
                  <Text
                    style={{
                      marginTop: 63.23,
                      fontSize: FontSize.size_sm,
                      fontFamily: FontFamily.poppinsMedium,
                      textAlign: "center",
                    }}
                  >
                    Trade crop price changes in the six {"\n"}
                    geopolitical zones in Nigeria, and get daily income as price
                    rises
                  </Text>
                  <Pressable
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#6CBC37",
                      width: 278,
                      height: 45,
                      marginTop: 17,
                      borderRadius: Border.br_6xs,
                      marginBottom: 19,
                    }}
                    onPress={toggleTradeNow}
                  >
                    <Text
                      style={{
                        color: "#F2F2F2",
                        fontFamily: FontFamily.poppinsSemiBold,
                        fontSize: FontSize.size_base,
                      }}
                    >
                      Trade now
                    </Text>
                  </Pressable>
                  <View
                    style={{
                      flexDirection: "row", // Arrange children in a row
                      justifyContent: "center", // Center children horizontally
                      alignItems: "center", // Center children vertically (if needed)
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#AAAAAA",
                        width: 6,
                        height: 6,
                        borderRadius: 6 / 2,
                        marginRight: 5, // Space between the circles
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: "#6CBC37",
                        width: 9,
                        height: 9,
                        borderRadius: 9 / 2,
                      }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            {/* <Pressable title="Show Modal" onPress={toggleModal} /> */}

            <View
              style={{
                marginTop: verticalScale(16.49),
                width: "90%",
                paddingBottom: 100,
              }}
            >
              {imageData.map((item, index) => (
                <ImageWithText
                  key={index}
                  imageSource={item.source}
                  text={item.text}
                  text2={item.text2}
                  text3={item.text3}
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
