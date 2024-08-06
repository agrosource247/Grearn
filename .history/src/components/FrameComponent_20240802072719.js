import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const FrameComponent = () => {
  const navigation = useNavigation();

  const historyPress = () => {
    // navigation.navigate("FlutterwaveDeposit");
  };

  const addMoneyPress = () => {
    navigation.navigate("FlutterwaveDeposit");
  };

  const withdrawPress = () => {
    navigation.navigate("Withdrawal");
  };

  return (
    <View style={styles.frameParent}>
      <View style={styles.buttonContainer}>
        <Pressable onPress={historyPress} style={styles.button}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require("../assets/frame-52.png")}
          />
          <Text style={styles.text}>History</Text>
        </Pressable>

        <Pressable onPress={addMoneyPress} style={styles.button}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require("../assets/frame-53.png")}
          />
          <Text style={styles.text}>Add money</Text>
        </Pressable>

        <Pressable onPress={withdrawPress} style={styles.button}>
          <Image
            style={styles.image}
            contentFit="cover"
            source={require("../assets/frame-54.png")}
          />
          <Text style={styles.text}>Withdraw</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    marginTop: scale(5),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#6CBC37",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 90,
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 33,
    width: 25,
    borderRadius: Border.br_7xs,
  },
  text: {
    color: Color.colorDarkslategray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    marginTop: 5,
  },
});

export default FrameComponent;
