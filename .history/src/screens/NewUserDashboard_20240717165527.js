import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import FrameComponent from "../components/FrameComponent";
import BottomNavigation from "../components/BottomNavigation";
import SlideScreen from "./SlideScreen";
import SlidingBar from "./SlidingBar";
import UseAuth from "../services/hooks/UseAuth";
import { User } from "../services/api";
import { useFocusEffect } from "@react-navigation/core";
import { Color } from "../../GlobalStyles";
import styles from "../styles/NewUserDashboardStyles";

// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");

const NewUserDashboard = ({ navigation }) => {
  const { auth, setAuth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [time, setTime] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState(null);

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

    User(isMounted, setUsers, controller, auth, "get")
      .then(() => setLoading(false)) // Set loading to false once the data is fetched
      .catch(() => setLoading(false));

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
      User(true, setUsers, new AbortController(), auth, "get")
        .then(() => setLoading(false)) // Set loading to false once the data is fetched
        .catch(() => setLoading(false));
    }, [])
  );

  const renderImages = (region) => {
    switch (region) {
      case "southeast":
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/image1.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image2.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image3.png")}
            />
          </View>
        );
      case "northwest":
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/image4.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image5.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image6.png")}
            />
          </View>
        );
      case "southwest":
        return (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/image7.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image8.png")}
            />
            <Image
              style={styles.image}
              source={require("../assets/image9.png")}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: Color.colorMintcream, // Set the background color to avoid white blank screen
        }}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color={Color.colorYellowgreen_100}
            />
            <Text style={styles.loadingText}>Loading...</Text>
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
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => setSelectedRegion("southeast")}
              >
                <Text style={styles.buttonText}>Southeast</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setSelectedRegion("northwest")}
              >
                <Text style={styles.buttonText}>Northwest</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => setSelectedRegion("southwest")}
              >
                <Text style={styles.buttonText}>Southwest</Text>
              </Pressable>
            </View>
            {renderImages(selectedRegion)}
            <FrameComponent navigation={navigation} />
            <Text style={[styles.liveStocks]}>Live stocks</Text>
            <SlideScreen />
            <SlidingBar />
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorMintcream, // Match your app's theme color
    width: "100%",
    height: "100%",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: Color.colorYellowgreen_100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  // Add your existing styles here
});

export default NewUserDashboard;
