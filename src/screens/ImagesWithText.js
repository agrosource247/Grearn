import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { scale } from "react-native-size-matters";
import { Color, FontSize } from "../../GlobalStyles";
import UseAuth from "../services/hooks/UseAuth";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import { AdminInvestmentCall } from "../services/api";

const ImagesWithText = ({ imageSource, text, text2, text3, text4 }) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: imageSource }} />
      <View style={styles.textContainer}>
        <View style={styles.textColumn}>
          <Text style={styles.up}>{text2}</Text>
          <Text style={styles.down}>{text3}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.percentage}>{text4}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemList = () => {
  const screenWidth = Dimensions.get("window").width; // Get screen width
  const [investments, setInvestments] = React.useState([]);
  const [loading, setLoading] = React.useState("true");
  const { auth } = UseAuth();
  const navigation = useNavigation();
  ///*/`
  React.useEffect(() => {
    AdminInvestmentCall(setInvestments, new AbortController(), "get");
  }, [auth.id]);
  //////
  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      setInvestments([]);

      AdminInvestmentCall(setInvestments, new AbortController(), "get");
      console.log(investments[0]);
      setLoading(false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          { width: screenWidth * 0.9 }, // Set width to 90% of screen width
        ]}
      >
        {loading ? (
          <Text>"loading"</Text>
        ) : (
          investments.map((item, index) => (
            <Pressable
              onPress={() =>
                navigation.navigate("SingleInvestment", { investment: item })
              }
            >
              <ImagesWithText
                key={index}
                imageSource={item.image}
                // text={item.text}
                text={item.minimum_invest}
                text2={item.product}
                text3={item.roi}
                text4={item.geo_location}
              />
            </Pressable>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    // padding: 10,
    // backgroundColor: "#f9f9f9",
    borderRadius: 6,
    width: "100%", // Full width of the ScrollView
  },
  image: {
    width: scale(40),
    height: scale(40),
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
    fontSize: FontSize.size_base,
    color: "#000",
    fontWeight: "bold",
  },
  percentage: {
    fontSize: 14,
    color: "#02BA56",
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
});

export default ItemList;
