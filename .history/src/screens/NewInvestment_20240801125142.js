import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { Pressable } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

const NewInvestment = () => {
  const navigation = useNavigation();
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: Color.colorWhite }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <StatusBar style={styles.statusBar} contentFit="cover" />
          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate("Investment")}>
              <Image
                style={styles.arrowIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.investmentsText}>Investments</Text>
          </View>
          <View style={styles.centeredView}>
            {/* Add any other components you want to center here */}
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: 37,
    position: "absolute",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 67,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  investmentsText: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exampleText: {
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslategray_500,
  },
});

export default NewInvestment;
