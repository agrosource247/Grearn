import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import { scale, verticalScale } from "react-native-size-matters";

const FrameComponent = ({ navigation }) => {
  return (
    <View style={styles.cardContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center", // Center the card horizontally
    transform: [{ translateY: verticalScale(10) }], // Offset the card slightly downward
  },
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
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(5),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#fff", // Black color for shadow
    shadowOffset: { width: 0, height: 4 }, // Offset the shadow downwards
    shadowOpacity: 0.1, // Subtle shadow
    shadowRadius: 6,
    elevation: 3, // Elevation for Android shadow
    height: 75,
    borderColor: "#f0f0f0", // Light border color
    borderWidth: 0.5,
    width: "90%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    // marginBottom: verticalScale(10),
    alignItems: "center",
    paddingTop: verticalScale(20),
  },
});

export default FrameComponent;
