import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const MyCards = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.myCardsContainer}>
          <View style={styles.headerContainer}>
            <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
              <Image
                style={styles.vuesaxlineararrowLeftIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={styles.myCard}>My Card</Text>
          </View>
          <Text style={styles.manageCards}>Manage cards</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <LinearGradient
              style={[styles.card]}
              locations={[0, 0.49, 1]}
              colors={["#006dbc", "#007ad2", "#0067b2"]}
            >
              <Text style={[styles.wemaBank, styles.ubaTypo]}>Wema Bank</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: verticalScale(26),
                  color: Color.colorWhite,
                }}
              >
                <Text style={styles.text}>{`.... .... .... `}</Text>
                <Text style={[styles.textTypo]}>4561</Text>
                <Image
                  style={styles.vuesaxlinearwifiIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlinearwifi.png")}
                />
              </View>

              <Text style={[styles.textTypo]}>02/27</Text>
              <Text
                style={[styles.omitoyinDavidAyomide, styles.omitoyinLayout]}
              >
                Omitoyin David Ayomide
              </Text>

              <Image
                style={[styles.logosmastercardIcon, styles.cardsParentLayout]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvWrapper, styles.cvvLayout]}>
                <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
              </View>
            </LinearGradient>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <LinearGradient
              style={[styles.card]}
              locations={[0, 0.86, 1]}
              colors={["#8000bc", "#9a05b3", "#8000bc"]}
            >
              <Text style={[styles.wemaBank, styles.ubaTypo]}>UBA</Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: verticalScale(26),
                }}
              >
                <Text style={styles.text}>{`.... .... .... `}</Text>
                <Text style={[styles.text1, styles.textTypo]}>4561</Text>
                <Image
                  style={styles.vuesaxlinearwifiIcon}
                  contentFit="cover"
                  source={require("../assets/vuesaxlinearwifi.png")}
                />
              </View>

              <Text style={[styles.text2, styles.textTypo]}>02/27</Text>
              <Text
                style={[styles.omitoyinDavidAyomide, styles.omitoyinLayout]}
              >
                Omitoyin David Ayomide
              </Text>

              <Image
                style={[styles.logosmastercardIcon]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvLayout]}>
                <Text style={[styles.cvvPosition]}>CVV</Text>
              </View>
            </LinearGradient>
          </View>
          <Pressable
            style={styles.addNewCardWrapper}
            onPress={() => {
              navigation.navigate("FlutterwaveDeposit");
            }}
          >
            <Text style={[styles.addNewCard, styles.cvvPosition]}>Deposit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  omitoyinDavidAyomide: {
    position: "absolute",
    bottom: verticalScale(13), // Adjust this value as needed
    left: 20, // Align with the left padding of the card
  },
  wemaBank: {
    marginTop: verticalScale(32),
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  myCardsContainer: {
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
  myCard: {
    color: Color.colorDarkslategray_500,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginLeft: 10,
  },
  manageCards: {
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    paddingLeft: 20,
    alignSelf: "flex-start",
    marginBottom: verticalScale(10),
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
    color: Color.colorWhite,
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
  cvvPosition: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  addNewCardWrapper: {
    marginTop: verticalScale(20),
    backgroundColor: Color.colorYellowgreen_100,
    height: 60,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  addNewCard: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
});

export default MyCards;
