import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Trade = ({ navigation }) => {
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
        <View>
          <View
            style={{ height: 27, width: 100, borderWidth: 1, marginLeft: 34 }}
          ></View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(32),
    backgroundColor: Color.colorWhite,
  },
  scrollViewContainer: {
    // flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
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

  card: {
    marginVertical: verticalScale(20),
    borderRadius: Border.br_6xs,
    height: verticalScale(193),
    width: width * 0.9, // 90% of the screen width
    alignSelf: "center",
    paddingLeft: 20,
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_base,
  },
  textTypo: {
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  omitoyinLayout: {
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  ubaTypo: {
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cvvLayout: {
    height: 29,
    width: 58,
    borderRadius: Border.br_7xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: "#003c68",
    justifyContent: "center",
    alignItems: "center",
    top: verticalScale(73),
    right: verticalScale(10),
  },
  cvvLayout2: {
    height: 29,
    width: 58,
    borderRadius: Border.br_7xs,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: "#4D0060",
    justifyContent: "center",
    alignItems: "center",
    top: verticalScale(73),
    right: verticalScale(10),
  },

  logosmastercardIcon: {
    position: "absolute",
    height: 35,
    width: 45,
    bottom: 10,
    right: 10,
  },
  vuesaxlinearwifiIcon: {
    height: 24,
    width: 24,
  },
});

export default Trade;
