import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
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
import { launchImageLibraryAsync } from "expo-image-picker";

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
    launchImageLibraryAsync({ mediaType: "photo" }, (response) => {
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
    setModalVisible(!isModalVisible); // Function to toggle the modal visibility
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
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            paddingBottom: 100, // Make space for the bottom navigation
          }}
          showsVerticalScrollIndicator={false}
        >
          {users.length > 0 ? (
            <View style={styles.newUserDashboard}>
              <StatusBar />
              <View
                style={{
                  top: 69,
                  flexDirection: "row",
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
                  source={require("../assets/group-33353.png")}
                />
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/group-33351.png")}
                />
              </View>

              <Text style={styles.investmentWallet}>Investment Wallet</Text>
              <FrameComponent
                icon1={require("../assets/vuesaxlinearreceive-square2.png")}
                icon2={require("../assets/vuesaxlinearwallet-money.png")}
                icon3={require("../assets/vuesaxlinearreceipt-edit.png")}
                icon4={require("../assets/vuesaxlinearreceipt-edit1.png")}
              />
              <View style={{ height: 170 }}>
                <SlideScreen
                  itemStyle={{ justifyContent: "center" }}
                  imageData={imageData}
                />
              </View>
              <ImageWithText />
            </View>
          ) : (
            <Text>Loading...</Text>
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
