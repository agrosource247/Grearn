import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageWithText = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} contentFit="cover" source={imageSource} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Align children vertically in the center
    marginBottom: 10, // Add space between rows
  },
  image: {
    width: 100, // Set a width for the image
    height: 100, // Set a height for the image
    // marginRight: 10, // Add some space between the image and the text
  },
  text: {
    fontSize: 16, // Set the font size for the text
    color: "#000", // Set the color of the text
  },
});

export default ImageWithText;
