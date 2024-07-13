import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
// import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
// Get the dimensions of the screen
const { width, height } = Dimensions.get("window");
const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.frameParent}>
      <Image
        style={[styles.historyFrameLayout]}
        contentFit="cover"
        source={require("../assets/frame-52.png")}
      />
      <Text style={[styles.history]}>History</Text>
      <Image
        style={[styles.addMoneyFrameLayout]}
        contentFit="cover"
        source={require("../assets/frame-53.png")}
      />
      <Text style={[styles.addMoney]}>Add money</Text>

      <Image
        style={[styles.withdrawFrameLayout]}
        contentFit="cover"
        source={require("../assets/frame-54.png")}
      />

      <Text style={[styles.withdraw]}>Withdraw</Text>
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
    marginTop: -25,
    // overflow: "hidden",
    position: "absolute",
  },
  addMoneyFrameLayout: {
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
    marginTop: -25,
    alignItems: "center",
  },
  withdrawFrameLayout: {
    right: scale(32),
    alignItems: "center",
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
    marginTop: -25,
    // overflow: "hidden",
    position: "absolute",
  },

  history: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: 51,
    position: "absolute",

    left: 27,
    width: 43,
  },
  addMoney: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: scale(51),
    position: "absolute",
    alignItems: "center",
  },
  withdraw: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: 51,
    position: "absolute",

    left: 300,
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
    alignItems: "center",
  },
});

export default FrameComponent;
