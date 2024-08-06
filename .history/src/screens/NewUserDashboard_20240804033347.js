import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Dimensions,
} from "react-native";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import UseAuth from "../services/hooks/UseAuth";
import { User } from "../services/api";
import FrameComponent from "../components/FrameComponent";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import SlidingBar from "./SlidingBar";
import ImageWithText from "./ImagesWithText";
import styles from "../styles/NewUserDashboardStyles";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";

// Get the dimensions of the screen
const { width } = Dimensions.get("window");

const imageData = [
  {
    source: require("../assets/frame-25.png"),
    text: "NGN3,200",
    text2: "Maize",
    text3: "Grains",
  },
  // Other imageData items...
];

const NewUserDashboard = ({ navigation }) => {
  const { auth, setAuth } = UseAuth();
  const [users, setUsers] = useState([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);

  const toggleModal = () => setModalVisible(!isModalVisible);

  const handleButtonPress = () => {
    navigation.navigate(contentIndex === 0 ? "TradePage" : "InvestmentPage");
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
        "Trade crop price changes in the six geopolitical zones in Nigeria...",
      image: require("../assets/select_trade.png"),
      buttonText: "Trade now",
    },
    {
      subText:
        "Invest with us and get fixed crop savings for 2% monthly and 24% yearly.",
      image: require("../assets/select_invest.png"),
      buttonText: "Invest now",
    },
  ];

  const displayGreeting = () => {
    const hour = new Date().getHours();
    setTime(
      hour >= 1 && hour < 12
        ? "Good morning"
        : hour >= 12 && hour < 16
        ? "Good afternoon"
        : hour >= 16 && hour < 19
        ? "Good evening"
        : "Good night"
    );
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    displayGreeting();

    User(isMounted, setUsers, controller, auth, "get").finally(() =>
      setLoading(false)
    );

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        style={{ backgroundColor: Color.colorMintcream }}
      >
        {loading ? (
          <View style={styles.newUserDashboard}>
            <Text style={styles.omitoyinDavid}>Loading...</Text>
          </View>
        ) : users.length > 0 ? (
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
            <View style={styles.investmentPackageParent}>
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
            <View style={styles.dotContainer}>
              <View
                style={[
                  styles.dot,
                  { backgroundColor: Color.colorYellowgreen_100 },
                ]}
              />
              <View style={[styles.dot, { backgroundColor: Color.colorA }]} />
            </View>
            <FrameComponent navigation={navigation} />
            <Text style={styles.liveStocks}>Live stocks</Text>
            <SlideScreen />
            <SlidingBar />
            <Modal visible={isModalVisible} transparent animationType="fade">
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalGreeting}>
                    Hello David! Welcome to Grearn
                  </Text>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalText}>
                      Welcome to <Text style={{ color: "green" }}>Grearn</Text>
                    </Text>
                    <Pressable style={styles.closeButton} onPress={toggleModal}>
                      <Image source={require("../assets/close-circle.png")} />
                    </Pressable>
                  </View>
                  <Image
                    style={styles.modalImage}
                    contentFit="cover"
                    source={modalContent[contentIndex].image}
                  />
                  <Text style={styles.modalSubText}>
                    {modalContent[contentIndex].subText}
                  </Text>
                  <Pressable
                    style={styles.modalButton}
                    onPress={handleButtonPress}
                  >
                    <Text style={styles.modalButtonText}>
                      {modalContent[contentIndex].buttonText}
                    </Text>
                  </Pressable>
                  <View style={styles.pagination}>
                    <View
                      style={[
                        styles.paginationDot,
                        {
                          backgroundColor:
                            contentIndex === 0
                              ? Color.colorYellowgreen_100
                              : Color.colorA,
                        },
                      ]}
                    />
                    <View
                      style={[
                        styles.paginationDot,
                        {
                          backgroundColor:
                            contentIndex === 1
                              ? Color.colorYellowgreen_100
                              : Color.colorA,
                        },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </Modal>
            <View style={styles.imageDataContainer}>
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
        ) : (
          <View style={styles.newUserDashboard}>
            <Text style={styles.omitoyinDavid}>No data available</Text>
          </View>
        )}
      </ScrollView>
      <BottomNavigation />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  // Add styles for new components or adjust existing styles
  dotContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: scale(9),
    height: scale(9),
    borderRadius: scale(9 / 2),
    marginRight: scale(5),
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
  },
  paginationDot: {
    width: scale(9),
    height: scale(9),
    borderRadius: scale(9 / 2),
    marginRight: scale(5),
  },
  modalGreeting: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    padding: 10,
  },
  modalImage: {
    width: width * 0.8,
    height: width * 0.5,
    resizeMode: "cover",
    marginVertical: 10,
  },
  modalButton: {
    backgroundColor: Color.colorYellowgreen_100,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  modalButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
  },
  imageDataContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default NewUserDashboard;
