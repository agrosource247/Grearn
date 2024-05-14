import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#d9d9d9",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5.7,
    elevation: 5.7,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#da58ff",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 58,
  },
});

export default Rectangle;
