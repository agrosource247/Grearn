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
import ImageComponent from "./ImageComponent";
import { launchImageLibraryAsync } from "expo-image-picker";

const { width, height } = Dimensions.get("window");

const imageData = [
  // Your image data array here
];

const NewUserDashboard = ({ navigation }) => {
  // Your state and hooks here

  return (
    <GestureHandlerRootView>
      <ScrollView
        scrollViewContentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        {users.length > 0 ? (
          <View style={styles.newUserDashboard}>
            <StatusBar />
            <View style={{ top: 69, flexDirection: "row", flex: 1 }}>
              {/* Image aligned to the start of the card */}
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

              {/* Card container */}
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* Text content */}
                <View>
                  <Text style={styles.goodMorning}>{time}</Text>
                  <Text style={styles.omitoyinDavid}>
                    {users[0].firstname} {users[0].lastname}
                  </Text>
                </View>

                {/* Notification icon aligned to the right of the card */}
                <Image
                  style={[
                    styles.iconamoonnotification,
                    { alignSelf: "flex-end" },
                  ]}
                  contentFit="cover"
                  source={require("../assets/iconamoonnotification.png")}
                />
              </View>
            </View>

            {/* Investment Package Section */}
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

            {/* Additional UI components */}
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
      <View style={{ flex: 1 }}>
        <BottomNavigation />
      </View>
    </GestureHandlerRootView>
  );
};

export default NewUserDashboard;
