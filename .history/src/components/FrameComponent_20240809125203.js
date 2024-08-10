import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
// import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.frameParent}>
      <View onPress={() => navigation.navigate("Transactions")}>
        <Image
          style={[styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-52.png")}
        />
        <Text style={[styles.historyTypo]}>History</Text>
      </View>
      <View onPress={() => navigation.navigate("FlutterwaveDeposit")}>
        <Image
          style={[styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-53.png")}
        />
        <Text style={[styles.historyTypo]}>Add money</Text>
      </View>

      <View onPress={() => navigation.navigate("Withdrawal")}>
        <Image
          style={[styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/frame-54.png")}
        />

        <Text style={[styles.historyTypo]}>Withdraw</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
  },
  historyTypo: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
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
    // width: "90%",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FrameComponent;
