import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

const Trade = ({ navigation }) => {
  const [selectedRegion, setSelectedRegion] = useState("SOUTHWEST");
  const [selectedPrice, setSelectedPrice] = useState("NGN20000");

  const products = [
    {
      name: "Pepper",
      price: "#250000",
      type: "Vegetables",
      percentage: "20.5%",
    },
    { name: "Melon", price: "#300000", type: "Crops", percentage: "20.5%" },
    {
      name: "Soybeans",
      price: "#150000",
      type: "Legumes",
      percentage: "20.5%",
    },
    {
      name: "Ginger",
      price: "#150000",
      type: "Herbaceous",
      percentage: "20.5%",
    },
    {
      name: "Honey",
      price: "#150000",
      type: "Produce section",
      percentage: "20%",
    },
    { name: "Maize", price: "#100000", type: "Cereals", percentage: "20.5%" },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.TradingContainer}>
          <View style={styles.headerContainer}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                style={styles.vuesaxlineararrowLeftIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.Trading}>Trading</Text>
          </View>
        </View>
        <View style={styles.dropdownContainer}>
          <View style={styles.textContainer}>
            <Picker
              selectedValue={selectedRegion}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedRegion(itemValue)}
            >
              <Picker.Item label="SOUTHWEST" value="SOUTHWEST" />
              <Picker.Item label="SOUTHEAST" value="SOUTHEAST" />
              <Picker.Item label="SOUTHSOUTH" value="SOUTHSOUTH" />
            </Picker>
          </View>
          <View style={styles.textContainer}>
            <Picker
              selectedValue={selectedPrice}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedPrice(itemValue)}
            >
              <Picker.Item label="NGN20000" value="NGN20000" />
              <Picker.Item label="NGN10000" value="NGN10000" />
              <Picker.Item label="NGN30000" value="NGN30000" />
            </Picker>
          </View>
          <View>
            <Image
              source={require("../assets/Tradeside.png")}
              style={{ width: 26, height: 26, borderRadius: 5 }}
            />
          </View>
        </View>
        {products.map((product, index) => (
          <View
            key={index}
            style={{
              borderRadius: 10,
              borderColor: "#6CBC37",
              borderWidth: 1,
              width: "90%",
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 7,
              }}
            >
              <Text
                style={{ color: "#444444", fontSize: 15, fontWeight: "bold" }}
              >
                {product.name}
              </Text>
              <Text
                style={{ color: "#2D2D2D", fontWeight: "bold", fontSize: 13 }}
              >
                {product.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 7,
                paddingRight: 7,
              }}
            >
              <Text
                style={{ color: "#8E8E8E", fontSize: 15, fontWeight: "bold" }}
              >
                {product.type}
              </Text>
              <Text
                style={{ color: "#02BA56", fontWeight: "bold", fontSize: 13 }}
              >
                {product.percentage}
              </Text>
            </View>
            <View
              style={{
                width: 86,
                height: 17,
                marginLeft: 7,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  marginTop: 10,
                  width: 26,
                  height: 15,
                  backgroundColor: "#6CBC37",
                  borderRadius: 4,
                  justifyContent: "center", // Center text vertically
                  alignItems: "center", // Center text horizontally
                }}
              >
                <Image
                  source={require("../assets/minus.png")}
                  style={{
                    textAlign: "center",
                    height: 24,
                    width: 24,
                  }}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  width: 26,
                  height: 15,
                  borderWidth: 1,
                  borderColor: "#C1C1C1",
                  borderRadius: 4,
                  justifyContent: "center", // Center text vertically
                  alignItems: "center", // Center text horizontally
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    paddingTop: 2,
                    color: "#8D8D8D",
                    height: 24,
                    width: 24,
                    fontWeight: "bold",
                  }}
                >
                  8
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  width: 26,
                  height: 15,
                  backgroundColor: "#6CBC37",
                  borderRadius: 4,
                  justifyContent: "center", // Center text vertically
                  alignItems: "center", // Center text horizontally
                }}
              >
                <Image
                  source={require("../assets/add.png")}
                  style={{
                    textAlign: "center",
                    height: 24,
                    width: 24,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 160,
                marginLeft: 7,
                marginTop: 13,
                marginBottom: 11,
              }}
            >
              <Text
                style={{
                  backgroundColor: "#6CBC37",
                  borderRadius: 4,
                  width: 74,
                  height: 22,
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Buy
              </Text>
              <Text
                style={{
                  backgroundColor: "#BC3737",
                  borderRadius: 4,
                  color: "white",
                  width: 74,
                  height: 22,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Sell
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  TradingContainer: {
    alignItems: "center",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    width: "100%",
    marginBottom: 20,
  },
  vuesaxlineararrowLeftIcon: {
    height: 24,
    width: 24,
  },
  Trading: {
    color: "darkslategray",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
  dropdownContainer: {
    flexDirection: "row",
    // flex: 1,
    marginLeft: 20,
    width: "90%",
    // alignSelf: "center",
    // justifyContent: "space-between",
  },
  textContainer: {
    marginRight: 15,
    height: 27,
    width: 135,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#6CBC37",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    flex: 1,
  },
  picker: {
    height: 27,
    flex: 1,
  },
});

export default Trade;
