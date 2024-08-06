import * as React from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";

import { StatusBar } from "expo-status-bar";
import { verticalScale } from "react-native-size-matters";

const Trade = ({ navigation }) => {
  return (
    <View style={styles.TradeContainer}>
      <Text>Trade View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TradeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Trade;
