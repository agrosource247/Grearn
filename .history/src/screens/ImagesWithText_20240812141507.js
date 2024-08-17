import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
// import ImageWithText from "./ImageWithText"; // Adjust the import path as needed

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

const ImageListView = () => {
  return (
    <FlatList
      data={imageData}
      renderItem={({ item }) => (
        <ImageWithText
          imageSource={item.source}
          text={item.text}
          text2={item.text2}
          text3={item.text3}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default ImageListView;
