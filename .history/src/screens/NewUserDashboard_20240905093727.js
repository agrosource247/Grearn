import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Alert,
} from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
  FlatList,
} from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { scale, verticalScale } from "react-native-size-matters";
import UseAuth from "../services/hooks/UseAuth";
import FrameComponent from "../components/FrameComponent";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import SlidingBar from "./SlidingBar";
import styles from "../styles/NewUserDashboardStyles";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import ImagesWithText from "./ImagesWithText";
import ImageSelector from "./ImageSelector"; // Import the new component
import { User } from "../services/api";

const NewUserDashboard = ({ navigation }) => {
  const { auth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [time, setTime] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [isModalVisible, setModalVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);

  const toggleModal = () => setModalVisible(!isModalVisible); // Function to toggle the modal visibility

  const handleButtonPress = () => {
    if (contentIndex === 0) navigation.navigate("TradePage");
    else navigation.navigate("InvestmentPage");
    setModalVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => clearTimeout(timer);
  }, [contentIndex]);

  const modalContent = [
    {
      subText:
        "Trade crop price changes in the six geopolitical zones in Nigeria, and get daily income as price rises",
      image: require("../assets/select_trade.png"),
      buttonText: "Trade now",
    },
    {
      subText:
        "Invest with us and don’t worry about price changes. Get fixed crop savings for 2% monthly and 24% yearly.",
      image: require("../assets/select_invest.png"),
      buttonText: "Invest now",
    },
  ];


  const displayGreeting = () => {
    const timer = new Date().getHours();

    if (timer >= 1 && timer < 12) setTime("Good morning");
    else if (timer >= 12 && timer < 16) setTime("Good afternoon");
    else if (timer >= 16 && timer < 19) setTime("Good evening");
    else setTime("Good night");
  };

  useFocusEffect(
    React.useCallback(() => {
      let isMounted = true;
      const controller = new AbortController();
      displayGreeting();

      User(isMounted, setUsers, controller, auth, "get")
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
      console.log(users);
      return () => {
        isMounted = false;
        controller.abort();
      };
    }, [auth.id])
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          scrollViewContent={{
            flexGrow: 1,
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          {users.length > 0 ? (
            <View style={styles.newUserDashboard}>
              {/* <StatusBar /> */}
              <View
                style={{
                  top: 50,
                  flexDirection: "row",
                  flex: 1,
                  width: "90%",
                  height: verticalScale(65),
                }}
              >
                <Image
                  style={[styles.avatar]}
                  source={{ uri: users[0].avatar }}
                />

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      marginLeft: verticalScale(10),
                      marginTop: verticalScale(10),
                    }}
                  >
                    <Text style={styles.goodMorning}>{time}</Text>
                    <Text style={styles.omitoyinDavid}>
                      {users[0].firstname} {users[0].lastname}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      navigation.navigate("UserNotifications");
                    }}
                  >
                    <Image
                      style={[
                        styles.iconamoonnotification,
                        styles.iconChildLayout,
                      ]}
                      contentFit="cover"
                      source={require("../assets/iconamoonnotification.png")}
                    />
                  </Pressable>
                </View>
              </View>

              <View style={[styles.investmentPackageParent]}>
                <Text style={[styles.investmentPackage, styles.nilFlexBox]}>
                  Investment package
                </Text>
                <Text style={styles.grearn}>Grearn</Text>
                <Text style={styles.totalAssets}>Total Assets</Text>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    marginTop: 50,
                    left: 12,
                  }}
                >
                  <View style={{}}>
                    <Text style={styles.text}>
                      #00000000 {users[0].walletbalance}
                    </Text>
                  </View>
                  <View>
                    <Image
                      // This is the eye on the card
                      style={[styles.iconChildLayout]}
                      contentFit="cover"
                      source={require("../assets/vuesaxlineareye.png")}
                    />
                  </View>
                </View>

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
                />
              </View>
              <FrameComponent navigation={navigation} />
              <Text style={[styles.liveStocks]}>Live stocks</Text>
              <SlideScreen />
              <SlidingBar />
              <Modal visible={isModalVisible} transparent animationType="fade">
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text
                      style={{
                        fontSize: FontSize.size_sm,
                        fontFamily: FontFamily.poppinsMedium,
                      }}
                    >
                      Hello David! Welcome to Grearn
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.modalText}>
                        Welcome to{" "}
                        <Text style={{ color: "green" }}>Grearn</Text>
                      </Text>
                      <Pressable
                        style={{
                          position: "absolute",
                          top: -18,
                          right: -70,
                        }}
                        onPress={toggleModal}
                      >
                        <Image source={require("../assets/close-circle.png")} />
                      </Pressable>
                    </View>

                    <Image
                      contentFit="cover"
                      source={require("../assets/select_trade.png")}
                      style={{ marginTop: 72, width: 268, height: 165 }}
                    />

                    <Text
                      style={{
                        marginTop: 63.23,
                        fontSize: FontSize.size_sm,
                        fontFamily: FontFamily.poppinsMedium,
                        textAlign: "center",
                      }}
                    >
                      {modalContent[contentIndex].subText}
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
                      onPress={handleButtonPress}
                    >
                      <Text
                        style={{
                          color: "#F2F2F2",
                          fontFamily: FontFamily.poppinsMedium,
                          fontSize: FontSize.size_sm,
                        }}
                      >
                        {modalContent[contentIndex].buttonText}
                      </Text>
                    </Pressable>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <View
                        style={{
                          width: scale(9),
                          height: scale(9),
                          borderRadius: scale(9 / 2),
                          backgroundColor:
                            contentIndex === 0
                              ? Color.colorYellowgreen_100
                              : Color.colorA,
                          marginRight: scale(5),
                        }}
                      ></View>
                      <View
                        style={{
                          width: scale(9),
                          height: scale(9),
                          borderRadius: scale(9 / 2),
                          backgroundColor:
                            contentIndex === 1
                              ? Color.colorYellowgreen_100
                              : Color.colorA,
                        }}
                      ></View>
                    </View>
                  </View>
                </View>
              </Modal>

              <View
                style={{
                  marginTop: verticalScale(16.49),
                  width: "90%",
                  paddingBottom: 50,
                }}
              >
                <ImagesWithText />
              </View>
            </View>
          ) : (
            <View style={styles.newUserDashboard}>
              <Text style={styles.loadingDashboard}>Loading...</Text>
            </View>
          )}
        </ScrollView>
        <BottomNavigation
          navigation={navigation}
          style={styles.bottomNavigation}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;
