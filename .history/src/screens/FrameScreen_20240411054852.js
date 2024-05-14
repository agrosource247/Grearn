import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.cardsfinanceParent}>
      <Text style={styles.cardsfinance}>CARDS/FINANCE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsfinance: {
    position: "absolute",
    marginTop: -60.5,
    marginLeft: -2067.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_109xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDimgray_800,
    textAlign: "left",
    width: 1093,
    height: 120,
  },
  cardsfinanceParent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 427,
    overflow: "hidden",
  },
});

export default FrameScreen;
