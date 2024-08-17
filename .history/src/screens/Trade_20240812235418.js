import React, { useState } from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

const Trade = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("SOUTHWEST");

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
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
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="SOUTHWEST" value="SOUTHWEST" />
              <Picker.Item label="Option 2" value="option2" />
              <Picker.Item label="Option 3" value="option3" />
            </Picker>
          </View>
          <View style={styles.textContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="NGN20000" value="NGN20000" />
              <Picker.Item label="NGN10000" value="NGN10000" />
              <Picker.Item label="NGN30000" value="NGN30000" />
            </Picker>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            borderColor: "#6CBC37",
            borderWidth: 1,
            width: "90%",
            height: 107,
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
            <Text style={{ color: "#444444", fontSize: 15 }}>Pepper</Text>
            <Text>#250000</Text>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(32),
    backgroundColor: Color.colorWhite,
    flex: 1,
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
  },
  vuesaxlineararrowLeftIcon: {
    height: 24,
    width: 24,
  },
  Trading: {
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginLeft: 10,
  },
  dropdownContainer: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 20,
    // justifyContent: "center",
  },
  textContainer: {
    marginRight: 15,
    height: 27,
    width: 150,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#6CBC37",
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 10,
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
