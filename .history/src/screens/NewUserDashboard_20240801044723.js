import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
  Modal,
} from "react-native";
import FrameComponent from "../components/FrameComponent";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/NewUserDashboardStyles";
import ImageWithText from "./ImagesWithText";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import UseAuth from "../services/hooks/UseAuth";
import { User } from "../services/api";
import { useFocusEffect } from "@react-navigation/core";
import { scale, verticalScale } from "react-native-size-matters";
import SlidingBar from "./SlidingBar";

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
  const [users, setUsers] = useState([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState("");
  const [isModalVisible, setModalVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleTradeNow = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => clearTimeout(timer);
  }, [contentIndex]);

  const modalContent = [
    {
      text: "Hello David! Welcome to Grearn",
      subText:
        "Trade crop price changes in the six geopolitical zones in Nigeria, and get daily income as price rises",
      image: require("../assets/select_trade.png"),
    },
    {
      text: "Hello David! Welcome to Grearn",
      subText:
        "Discover new opportunities in the market with real-time data and insights.",
      image: require("../assets/select_invest.png"),
    },
  ];

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

  useEffect(() => {
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
      setUsers([]);
      displayGreeting();
      User(true, setUsers, new AbortController(), auth, "get");
      setLoading(false);
    }, [])
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        alignItems: "center",
        backgroundColor: Color.colorMintcream,
      }}
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
            <View style={[styles.vuesaxlinearhashtag, styles.iconChildLayout]}>
              <View style={styles.wrapper}>
                <Text style={styles.text}># {users[0].walletbalance}</Text>
              </View>
            </View>
            <Image
              style={[styles.vuesaxlineareyeIcon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxlineareye.png")}
            />
            <View style={styles.nilWrapper}>
              <Text style={[styles.nil, styles.nilFlexBox]}>NIL</Text>
            </View>

            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
            <Image
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
              flexDirection: "row",
              alignItems: "center",
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

          <Modal visible={isModalVisible} transparent animationType="fade">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text
                  style={{
                    fontSize: FontSize.size_sm,
                    fontFamily: FontFamily.poppinsMedium,
                  }}
                >
                  {modalContent[contentIndex].text}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.modalText}>
                    {contentIndex === 0 ? (
                      <>
                        Welcome to{" "}
                        <Text style={{ color: "green" }}>Grearn</Text>
                      </>
                    ) : null}
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
                  source={modalContent[contentIndex].image}
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
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#AAAAAA",
                      width: 6,
                      height: 6,
                      borderRadius: 6 / 2,
                      marginRight: 5,
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
      <BottomNavigation />
    </ScrollView>
  );
};

export default NewUserDashboard;
