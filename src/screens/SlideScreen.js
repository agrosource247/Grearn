import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../../GlobalStyles";
<<<<<<< HEAD
import { scale } from "react-native-size-matters";
=======
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656

const data = [
  { id: "1", imageSource: require("../assets/frame-39.png") },
  { id: "2", imageSource: require("../assets/frame-40.png") },
  { id: "3", imageSource: require("../assets/frame-41.png") },
  { id: "4", imageSource: require("../assets/frame-39.png") },
  { id: "5", imageSource: require("../assets/frame-40.png") },
  { id: "6", imageSource: require("../assets/frame-41.png") },
];

const SlideScreen = () => {
  return (
    <FlatList
<<<<<<< HEAD
      // style={{ width: "90%" }}
      contentContainerStyle={{ alignItems: "flex-end" }}
=======
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
      horizontal
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Image
          style={[styles.newChildLayout]}
          contentFit="cover"
          source={item.imageSource}
        />
      )}
<<<<<<< HEAD
      showsHorizontalScrollIndicator={false}
=======
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
    />
  );
};

const styles = StyleSheet.create({
  newChildLayout: {
<<<<<<< HEAD
    marginTop: scale(16),
    width: 100, // Set the width of each image as needed
    height: 100, // Set the height of each image as needed
    marginHorizontal: scale(11), // Adjust as needed for spacing between images
=======
    top: 401,
    width: 100, // Set the width of each image as needed
    height: 100, // Set the height of each image as needed
    marginHorizontal: 5, // Adjust as needed for spacing between images
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
    borderRadius: Border.br_8xs,
  },
});

export default SlideScreen;
