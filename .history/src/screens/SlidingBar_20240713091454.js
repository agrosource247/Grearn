import * as React from "react";
import { View, Text, Animated, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useEffect, useRef } from "react";

const SlidingBar = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [southwestColor, setSouthwestColor] = React.useState(
    Color.colorCloudGray
  );
  const [northwestColor, setNorthwestColor] = React.useState(
    Color.colorCloudGray
  );
  const [southeastColor, setSoutheastColor] = React.useState(
    Color.colorCloudGray
  );

  useEffect(() => {
    const startAnimation = () => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start(() => {
        animation.setValue(0);
        startAnimation();
      });
    };

    startAnimation();
  }, [animation]);

  const barPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  animation.addListener(({ value }) => {
    if (value > 0.45 && value < 0.55) {
      setNorthwestColor("red");
    } else {
      setNorthwestColor(Color.colorCloudGray);
    }

    if (value >= 1) {
      setSoutheastColor("red");
    } else {
      setSoutheastColor(Color.colorCloudGray);
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={{ color: southwestColor }}>Southwest</Text>
        <Text style={{ color: northwestColor }}>Northwest</Text>
        <Text style={{ color: southeastColor }}>Southeast</Text>
      </View>
      <View style={styles.lineContainer}>
        <Animated.View style={[styles.animatedBar, { left: barPosition }]} />
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
  animatedBar: {
    position: "absolute",
    width: 120,
    height: 2,
    backgroundColor: Color.colorYellowgreen_100,
  },
});

export default SlidingBar;
