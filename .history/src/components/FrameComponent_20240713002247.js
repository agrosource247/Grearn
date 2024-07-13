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
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-52.png")}
      />
      <Text style={[styles.history, styles.historyTypo]}>History</Text>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-53.png")}
      />
      <Text style={[styles.addMoney, styles.historyTypo]}>Add money</Text>

      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-54.png")}
      />

      <Text style={[styles.withdraw, styles.historyTypo]}>Withdraw</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
    top: "50%",
    marginTop: -25,
    // overflow: "hidden",
    position: "absolute",
  },

  frameChild: {
    left: 30,
  },
  frameItem: {
    left: 177,
  },
  frameInner: {
    right: scale(32),
    alignItems: "center",
  },
  history: {
    left: 27,
    width: 43,
  },
  addMoney: {
    left: 159,
  },
  withdraw: {
    left: 300,
    width: 61,
  },
  frameParent: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: 51,
    position: "absolute",
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
