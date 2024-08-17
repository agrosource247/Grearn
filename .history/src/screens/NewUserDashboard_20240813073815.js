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
import { User } from "../services/api";
import FrameComponent from "../components/FrameComponent";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import SlidingBar from "./SlidingBar";
import ImageWithText from "./ImagesWithText";
import styles from "../styles/NewUserDashboardStyles";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
import * as ImagePicker from "expo-image-picker";
import ImagesWithText from "./ImagesWithText";

// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");

const NewUserDashboard = ({ navigation }) => {
  const { auth, setAuth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [time, setTime] = React.useState("");
  const [loading, setLoading] = React.useState("true");
  const [isModalVisible, setModalVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const [avatar, setAvatar] = useState("");
  ////////////////////
  useFocusEffect(
    React.useCallback(() => {
      let isMounted = true;
      const controller = new AbortController();

      User(isMounted, setUsers, controller, auth, "get")
        .then(() => {
          setLoading(false);
          setAvatar(users[0]?.avatar || "");
        })
        .catch(() => setLoading(false));

      return () => {
        isMounted = false;
        controller.abort();
      };
    }, [auth.id])
  );

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.uri);
    }
  };

  const handleDeleteImage = () => {
    Alert.alert(
      "Delete Image",
      "Are you sure you want to delete this image?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => setAvatar(""), // Clear the avatar
        },
      ],
      { cancelable: true }
    );
  };

  const handleImagePress = () => {
    Alert.alert(
      "Change Profile Picture",
      "Choose an option",
      [
        { text: "Select Image", onPress: handleSelectImage },
        { text: "Delete Image", onPress: handleDeleteImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };
  ////////////////////////
  const toggleModal = () => {
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  };
  // const toggleTradeNow = () => {
  //   //Naviagte to the home TradingView
  //   // navigation.navigate("NewUserDashboard");
  //   setModalVisible(!isModalVisible); // Function to toggle the modal visibility
  // };
  const handleButtonPress = () => {
    if (contentIndex === 0) {
      navigation.navigate("TradePage");
    } else {
      navigation.navigate("InvestmentPage");
    }
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
  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   setAuth({});
  // };

  const displayGreeting = () => {
    const timer = new Date().getHours();

    if (timer >= 1 && timer < 12) setTime("Good morning");
    else if (timer >= 12 && timer < 16) setTime("Good afternoon");
    else if (timer >= 16 && timer < 19) setTime("Good evening");
    else setTime("Good night");
  };

  // To make a get request to the users API with jsonwebtokens
  useFocusEffect(
    React.useCallback(() => {
      let isMounted = true;
      const controller = new AbortController();
      displayGreeting();

      User(isMounted, setUsers, controller, auth, "get")
        .then(() => setLoading(false))
        .catch(() => setLoading(false));

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
              <StatusBar />
              <View
                style={{
                  top: 33,
                  flexDirection: "row",
                  flex: 1,
                  width: "90%",
                  height: verticalScale(65),
                }}
              >
                <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
                  <Image
                    style={[
                      styles.newUserDashboardChild,
                      { alignSelf: "flex-start" },
                    ]}
                    source={
                      avatar
                        ? { uri: avatar }
                        : require("../assets/adaptive-icon.png")
                    }
                  />
                </Pressable>

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      marginLeft: verticalScale(-90),
                      marginTop: verticalScale(12),
                    }}
                  >
                    <Text style={styles.goodMorning}>{time}</Text>
                    <Text style={styles.omitoyinDavid}>
                      {users[0].firstname} {users[0].lastname}
                    </Text>
                  </View>
                  <Image
                    style={[
                      styles.iconamoonnotification,
                      styles.iconChildLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconamoonnotification.png")}
                  />
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
                    left: 15,
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
                    backgroundColor: contentIndex === 0 ? "#000" : "#ccc",
                    marginHorizontal: 4,
                    borderRadius: 8,
                  }}
                />
                <View
                  style={{
                    width: scale(9),
                    height: scale(9),
                    backgroundColor: contentIndex === 1 ? "#000" : "#ccc",
                    marginHorizontal: 4,
                    borderRadius: 8,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 200,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SlideScreen />
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 170,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SlidingBar />
              </View>
              <View style={{ marginTop: 10 }}>
                <ImagesWithText />
              </View>

              <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Image
                      source={modalContent[contentIndex].image}
                      style={styles.modalImage}
                    />
                    <Text style={styles.modalText}>
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
                  </View>
                </View>
              </Modal>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
        <BottomNavigation />
      </View>
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;