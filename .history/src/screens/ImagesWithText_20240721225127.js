import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontSize } from "../../GlobalStyles";

const ImageWithText = ({ imageSource, text, text2 }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} contentFit="cover" source={imageSource} />
      <Text style={styles.up}>{text2}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  up: {
    // fontSize: FontSize.size_xs,
  },
  container: {
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Align children vertically in the center
    marginBottom: 10, // Add space between rows
    justifyContent: "space-between",
  },
  image: {
    width: 100, // Set a width for the image
    height: 100, // Set a height for the image
    // marginRight: 10, // Add some space between the image and the text
    borderRadius: 6,
  },
  text: {
    fontSize: 16, // Set the font size for the text
    color: "#000", // Set the color of the text
  },
});

export default ImageWithText;
