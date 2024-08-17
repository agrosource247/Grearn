import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import { scale } from "react-native-size-matters";
// Static data
const data = [
  {
    id: 1,
    image_url: "https://example.com/image1.jpg",
    text_content: "Text for item 1",
    number_value: 100,
  },
  {
    id: 2,
    image_url: "https://example.com/image2.jpg",
    text_content: "Text for item 2",
    number_value: 200,
  },
  // Add more items as needed
];

const ImageWithText = ({ imageSource, text, text2, text3 }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} contentFit="cover" source={imageSource} />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", paddingHorizontal: scale(10) }}>
          <Text style={styles.up}>{text2}</Text>
          <Text style={styles.down}>{text3}</Text>
        </View>
        <View
          style={{
            position: "absolute",
            paddingHorizontal: 230,
            // justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>{text}</Text>
          <Text
            style={{
              alignSelf: "center",
            }}
          >
            20.5%
          </Text>
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
