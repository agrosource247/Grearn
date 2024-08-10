import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import { scale, verticalScale } from "react-native-size-matters";

const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.frameParent}>
      {/* History */}
      <Pressable onPress={() => navigation.navigate("Transactions")}>
        <View style={styles.iconWithLabel}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.labelText}>History</Text>
        </View>
      </Pressable>

      {/* Add Money */}
      <Pressable onPress={() => navigation.navigate("FlutterwaveDeposit")}>
        <View style={styles.iconWithLabel}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-53.png")}
          />
          <Text style={styles.labelText}>Add money</Text>
        </View>
      </Pressable>

      {/* Withdraw */}
      <Pressable onPress={() => navigation.navigate("Withdrawal")}>
        <View style={styles.iconWithLabel}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/frame-54.png")}
          />
          <Text style={styles.labelText}>Withdraw</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 33,
    width: 33,
    borderRadius: Border.br_7xs,
  },
  labelText: {
    marginTop: verticalScale(5), // Space between image and text
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  iconWithLabel: {
    // alignItems: "center", // Centers text and image horizontally
  },
  frameParent: {
    marginTop: 30,
    paddingTop: verticalScale(15),
    paddingLeft: scale(30),
    paddingRight: scale(30),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#f6f6f6",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderWidth: 0.5,
    width: "90%",
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FrameComponent;
