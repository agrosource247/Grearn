import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
// import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.frameParent}>
      <Image
        style={[styles.frameChild, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-52.png")}
      />
      <Text
        style={[styles.history, styles.historyTypo]}
        onPress={() => navigation.navigate("Transactions")}
      >
        History
      </Text>
      <Image
        style={[styles.frameItem, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-53.png")}
      />
      <Text
        style={[styles.addMoney, styles.historyTypo]}
        onPress={() => navigation.navigate("FlutterwaveDeposit")}
      >
        Add money
      </Text>

      <Image
        style={[styles.frameInner, styles.frameLayout]}
        contentFit="cover"
        source={require("../assets/frame-54.png")}
      />

      <Text
        style={[styles.withdraw, styles.historyTypo]}
        onPress={() => navigation.navigate("Withdrawal")}
      >
        Withdraw
      </Text>
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
    overflow: "hidden",
    position: "absolute",
  },
  historyTypo: {
    alignItems: "center",
    display: "flex",
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    top: 51,
    position: "absolute",
  },
  frameChild: {
    left: 30,
  },
  frameItem: {
    left: 177,
  },
  frameInner: {
    left: 324,
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
    marginTop: 30,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#f6f6f6",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: "red",
    width: "100%",
    height: 75,
  },
});

export default FrameComponent;
