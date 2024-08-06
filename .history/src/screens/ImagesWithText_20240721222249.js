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
    marginRight: 10, // Add some space between the image and the text
  },
  text: {
    fontSize: 16, // Set the font size for the text
    color: "#000", // Set the color of the text
  },
});
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageWithText from './ImageWithText';

const imageData = [
  { source: require('../assets/image1.png'), text: 'Text for Image 1' },
  { source: require('../assets/image2.png'), text: 'Text for Image 2' },
  { source: require('../assets/image3.png'), text: 'Text for Image 3' },
  { source: require('../assets/image4.png'), text: 'Text for Image 4' },
  { source: require('../assets/image5.png'), text: 'Text for Image 5' },
];

const ImageList = () => {
  return (
    <View style={styles.listContainer}>
      {imageData.map((item, index) => (
        <ImageWithText key={index} imageSource={item.source} text={item.text} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10, // Add some padding around the list
  },
});

export default ImageList;

export default ImageWithText;
