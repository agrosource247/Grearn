import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.card}>
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
    alignItems: "center", // Centers text and image horizontally
  },
  card: {
    marginTop: verticalScale(5),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(30),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    // shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    height: 75,
    borderColor: "#f0f0f0",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default FrameComponent;
