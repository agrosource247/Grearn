import * as React from "react";
<<<<<<< HEAD
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
    paddingTop: scale(10),
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "#6CBC37",
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 75,
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
=======
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../../GlobalStyles";
// import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

const FrameComponent = ({ navigation }) => {
	return (
		<View style={styles.frameParent}>
			<Image style={[styles.frameChild, styles.frameLayout]} contentFit="cover" source={require("../assets/frame-52.png")} />
			<Text style={[styles.history, styles.historyTypo]}>History</Text>
			<Image style={[styles.frameItem, styles.frameLayout]} contentFit="cover" source={require("../assets/frame-53.png")} />
			<Text style={[styles.addMoney, styles.historyTypo]}>Add money</Text>

			<Image style={[styles.frameInner, styles.frameLayout]} contentFit="cover" source={require("../assets/frame-54.png")} />

			<Text style={[styles.withdraw, styles.historyTypo]}>Withdraw</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	frameLayout: {
		height: 33,
		width: 25,
		borderRadius: Border.br_7xs,
		top: "50%",
		marginTop: -25,
		overflow: "hidden",
		position: "absolute",
	},
	historyTypo: {
		alignItems: "center",
		display: "flex",
		color: Color.colorDarkslategray_300,
		fontFamily: FontFamily.poppinsMedium,
		fontWeight: "500",
		lineHeight: 20,
		fontSize: FontSize.size_xs,
		top: 51,
		position: "absolute",
	},
	frameChild: {
		left: 30,
	},
	frameItem: {
		left: 177,
	},
	frameInner: {
		left: 324,
	},
	history: {
		left: 27,
		width: 43,
	},
	addMoney: {
		left: 159,
	},
	withdraw: {
		left: 300,
		width: 61,
	},
	frameParent: {
		top: 286,
		left: 20,
		borderRadius: Border.br_8xs,
		backgroundColor: Color.colorWhite,
		shadowColor: "#f6f6f6",
		shadowRadius: 4,
		elevation: 4,
		shadowOpacity: 1,
		width: 400,
		height: 75,
		overflow: "hidden",
		position: "absolute",
	},
>>>>>>> c3a8227f23b23566431422a4dcee67502b4ec656
});

export default FrameComponent;
