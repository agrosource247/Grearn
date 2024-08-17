import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
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

const ImagesWithText = ({ imageSource, text, text2, text3 }) => {
  return (
    <View style={styles.itemContainer}>
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

const ItemList = () => {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      {imageData.map((item, index) => (
        <ImagesWithText
          key={index}
          imageSource={item.source}
          text={item.text}
          text2={item.text2}
          text3={item.text3}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    width: "90%",
  },
  image: {
    width: scale(100),
    height: scale(100),
    borderRadius: 6,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textColumn: {
    flexDirection: "column",
  },
  priceContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
  percentage: {
    fontSize: 14,
    color: "#000",
  },
  up: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  down: {
    fontSize: 12,
    color: "#666",
  },
  list: {
    padding: 10,
  },
});

export default ItemList;
