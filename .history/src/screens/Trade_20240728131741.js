import * as React from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";

import { StatusBar } from "expo-status-bar";
import { verticalScale } from "react-native-size-matters";

const Trade = ({ navigation }) => {
  return (
    <View>
      <Text>Trade View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TradeContainer: {
    justifyContent: "center",
  },
});

export default Trade;
