import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import { scale } from "react-native-size-matters";

// Static data
const imageData = [
  {
    source: require("../assets/frame-25.png"),
    text: "NGN3,200",
    text2: "Maize",
    text3: "Grains",
  },
  {
    source: require("../assets/frame-37.png"),
    text: "NGN6,405",
    text2: "Melon",
    text3: "Cucurbits",
  },
  {
    source: require("../assets/frame-36.png"),
    text: "NGN8,600",
    text2: "Honey",
    text3: "Produce section",
  },
  {
    source: require("../assets/frame-33.png"),
    text: "NGN3,200",
    text2: "Ginger",
    text3: "Herbaceous",
  },
  {
    source: require("../assets/frame-35.png"),
    text: "NGN3,200",
    text2: "Pepper",
    text3: "Vegetables",
  },
  {
    source: require("../assets/frame-34.png"),
    text: "NGN3,200",
    text2: "Soya beans",
    text3: "Legumes",
  },
];

const ImagesWithText = ({ imageData }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.textContainer}>
        <View style={styles.textColumn}>
          <Text style={styles.up}>{text2}</Text>
          <Text style={styles.down}>{text3}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.percentage}>20.5%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  down: {
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDown,
  },
  up: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorUp,
  },
  container: {
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Align children vertically in the center
    marginBottom: 10, // Add space between rows
  },
  image: {
    width: scale(100), // Use scale for responsive sizing
    height: scale(100),
    borderRadius: 6,
  },
  textContainer: {
    flex: 1, // Allow container to take remaining space
    flexDirection: "row",
    justifyContent: "space-between", // Distribute space between elements
    alignItems: "center",
    paddingLeft: scale(10), // Add spacing to the left of the text
  },
  textColumn: {
    flexDirection: "column",
  },
  priceContainer: {
    flexDirection: "column",
    alignItems: "flex-end", // Align text to the right
  },
  text: {
    fontSize: FontSize.size_lg,
    color: "#000",
  },
  percentage: {
    fontSize: FontSize.size_sm,
    color: "#000",
  },
});

export default ImagesWithText;
