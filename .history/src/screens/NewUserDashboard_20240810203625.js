import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Alert,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
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
  const [users, setUsers] = useState([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const [avatar, setAvatar] = useState("");

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

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        setAvatar(selectedImage);
      }
    });
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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 1 && currentHour < 12) setTime("Good morning");
    else if (currentHour >= 12 && currentHour < 16) setTime("Good afternoon");
    else if (currentHour >= 16 && currentHour < 19) setTime("Good evening");
    else setTime("Good night");
  }, []);

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

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        style={{ backgroundColor: Color.colorMintcream }}
      >
        {users.length > 0 ? (
          <View style={styles.newUserDashboard}>
            <StatusBar />
            <Pressable onPress={handleImagePress}>
              <Image
                style={styles.newUserDashboardChild}
                source={
                  avatar
                    ? { uri: avatar }
                    : require("../assets/default-avatar.png")
                }
              />
            </Pressable>
            <Text style={styles.goodMorning}>{time}</Text>
            <Text style={styles.omitoyinDavid}>
              {users[0].firstname} {users[0].lastname}
            </Text>
            <Image
              style={[styles.iconamoonnotification, styles.iconChildLayout]}
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
                source={require("../assets/vuesaxlineareye.png")}
              />
              <View style={styles.nilWrapper}>
                <Text style={[styles.nil, styles.nilFlexBox]}>NIL</Text>
              </View>
              <Image
                style={styles.groupIcon}
                source={require("../assets/group-23.png")}
              />
              <Image
                style={styles.frameChild1}
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
              />
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
                      Welcome to <Text style={{ color: "green" }}>Grearn</Text>
                    </Text>
                    <Pressable
                      style={{ position: "absolute", top: -18, right: -70 }}
                      onPress={toggleModal}
                    >
                      <Image
                        style={styles.closeIcon}
                        source={require("../assets/close.png")}
                      />
                    </Pressable>
                  </View>
                  <Text style={styles.subText}>
                    {modalContent[contentIndex].subText}
                  </Text>
                  <Image
                    style={styles.modalImage}
                    source={modalContent[contentIndex].image}
                  />
                  <Pressable
                    style={styles.buttonContainer}
                    onPress={handleButtonPress}
                  >
                    <Text style={styles.buttonText}>
                      {modalContent[contentIndex].buttonText}
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <View
              style={{
                width: scale(287),
                height: verticalScale(124),
                marginTop: verticalScale(20),
              }}
            >
              <ScrollView horizontal>
                <View style={{ flexDirection: "row" }}>
                  {imageData.map((item, index) => (
                    <ImageWithText
                      key={index}
                      source={item.source}
                      text={item.text}
                      text2={item.text2}
                      text3={item.text3}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <BottomNavigation navigation={navigation} />
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;
