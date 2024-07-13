import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const SlidingBar = () => {
  const [position, setPosition] = useState("0%");
  const [southwestColor, setSouthwestColor] = useState(Color.colorCloudGray);
  const [northwestColor, setNorthwestColor] = useState(Color.colorCloudGray);
  const [southeastColor, setSoutheastColor] = useState(Color.colorCloudGray);

  const handlePress = (location) => {
    setSouthwestColor(Color.colorCloudGray);
    setNorthwestColor(Color.colorCloudGray);
    setSoutheastColor(Color.colorCloudGray);

    switch (location) {
      case "Southwest":
        setPosition("10%");
        setSouthwestColor(Color.colorMediumGray);
        break;
      case "Northwest":
        setPosition("50%");
        setNorthwestColor(Color.colorMediumGray);
        break;
      case "Southeast":
        setPosition("90%");
        setSoutheastColor(Color.colorMediumGray);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => handlePress("Southwest")}>
          <Text style={{ color: southwestColor }}>Southwest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Northwest")}>
          <Text style={{ color: northwestColor }}>Northwest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Southeast")}>
          <Text style={{ color: southeastColor }}>Southeast</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={[styles.slidingBar, { left: position }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "90%",
    marginTop: scale(16),
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
  },
  lineContainer: {
    width: "100%",
    height: 1,
    backgroundColor: Color.colorPlatinumGray,
    marginTop: scale(13.12),
    position: "relative",
  },
  slidingBar: {
    position: "absolute",
    width: 120,
    height: 2,
    backgroundColor: Color.colorYellowgreen_100,
    transform: [{ translateX: -60 }], // Center the sliding bar
  },
});

export default SlidingBar;
