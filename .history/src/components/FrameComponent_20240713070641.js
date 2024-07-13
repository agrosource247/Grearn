import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import FlutterwaveDeposit from "../screens/FlutterwaveDeposit";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");

const FrameComponent = ({ navigation }) => {
  const historyPress = () => {
    // Navigate to the Home screen
    // navigation.navigate("Home");
  };

  const addMoneyPress = () => {
    // Navigate to the Home screen
    navigation.navigate("FlutterwaveDeposit");
  };
  const withdrawPress = () => {
    // Navigate to the Home screen
    // navigation.navigate("Home");
  };
  return (
    <View style={styles.frameParent}>
      <Pressable onPress={historyPress}>
        <Image
          style={[styles.historyFrameLayout]}
          contentFit="cover"
          source={require("../assets/frame-52.png")}
        />
        <Text style={[styles.history]}>History</Text>
      </Pressable>

      <Pressable onPress={addMoneyPress}>
        <Image
          style={[styles.addMoneyFrameLayout]}
          contentFit="cover"
          source={require("../assets/frame-53.png")}
        />
        <Text style={[styles.addMoney]}>Add money</Text>
      </Pressable>

      <Pressable onPress={withdrawPress}>
        <Image
          style={[styles.withdrawFrameLayout]}
          contentFit="cover"
          source={require("../assets/frame-54.png")}
        />
        <Text style={[styles.withdraw]}>Withdraw</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  historyFrameLayout: {
    left: 30,
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
  },
  addMoneyFrameLayout: {
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
    // marginTop: -25,
    position: "absolute",
    alignSelf: "center",
  },
  withdrawFrameLayout: {
    right: scale(32),
    alignItems: "center",
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
    marginTop: -25,
    position: "absolute",
  },
  history: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    // top: 51,
    top: "50%",
    // position: "absolute",
    left: 27,
  },
  addMoney: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    // top: scale(51),
    // position: "absolute",
    alignSelf: "center",
  },
  withdraw: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    // lineHeight: 20,
    fontSize: FontSize.size_xs,
    // top: 51,
    // position: "absolute",
    right: scale(17),
    width: 61,
  },
  frameParent: {
    marginTop: scale(5),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#6CBC37",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 75,
    width: "90%",
    // alignItems: "center",
  },
});

export default FrameComponent;
