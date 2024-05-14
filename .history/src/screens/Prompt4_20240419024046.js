import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
const Prompt4 = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.prompt}>
          <StatusBar
            style={[styles.upBars1, styles.iconPosition]}
            contentFit="cover"
            // hidden
          />

          <Image
            style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft.png")}
          />
          <Text style={styles.addCard}>Add Card</Text>
          <Text style={[styles.pleaseEnterCard, styles.cardTypo]}>
            Please enter card details
          </Text>
          <TextInput
            style={[styles.enterYourCardNumberWrapper, styles.enterCardLayout]}
          >
            <Text style={[styles.enterYourCard, styles.enterCardTypo]}>
              Enter your card number
            </Text>
          </TextInput>
          <TextInput
            style={[styles.enterCardPinWrapper, styles.enterCardLayout]}
          >
            <Text style={[styles.enterCardPin, styles.enterCardTypo]}>
              Enter card pin
            </Text>
          </TextInput>
          <TextInput style={[styles.expiryDateWrapper, styles.wrapperLayout]}>
            <Text style={[styles.expiryDate, styles.enterCardTypo]}>
              Expiry date
            </Text>
          </TextInput>
          <Text style={[styles.cvvWrapper, styles.wrapperLayout]}>
            <Text style={[styles.cvv, styles.enterCardTypo]}>CVV</Text>
          </Text>
          <Pressable style={styles.saveWrapper}>
            <Text style={[styles.save, styles.savePosition]}>Save</Text>
          </Pressable>
          <Text style={[styles.incorrectCardPin, styles.savePosition]}>
            Incorrect card pin
          </Text>
          <Text style={[styles.byProvidingYour, styles.savePosition]}>
            By providing your card information, you authorize Grearn to bind
            your card in accordance with Grearn terms and conditions
          </Text>
          <Image
            style={[styles.icoutlineInfoIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/icoutlineinfo.png")}
          />
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    height: 36,
    top: 11,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },

  cardsLayout: {
    width: 31,
    position: "absolute",
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  investmentLayout: {
    width: 59,
    position: "absolute",
  },
  cardTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  enterCardLayout: {
    height: 48,
    width: 350,
    borderRadius: Border.br_7xs,
    left: 31,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  enterCardTypo: {
    height: 15,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
    left: "50%",
    top: "50%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    width: 151,
    top: 268,
    height: 48,
    borderColor: Color.colorSilver_400,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  savePosition: {
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
  },
  vuesaxlinearhome2Icon: {
    left: 3,
    top: 0,
  },
  home: {
    color: Color.colorGray_600,
    top: 24,
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 28,
    width: 35,
    position: "absolute",
  },
  vuesaxlinearhome2Parent: {
    left: 12,
    width: 35,
    position: "absolute",
  },
  cards: {
    top: 23,
    color: Color.colorYellowgreen_100,
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 28,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 0,
    width: 31,
  },
  cardsParent: {
    top: 12,
    left: 139,
    height: 35,
  },
  vuesaxlinearrefreshCircle: {
    top: 10,
    left: 198,
  },
  profile: {
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 28,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 0,
    color: Color.colorGray_600,
    top: 24,
  },
  profileCircleIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "0%",
    right: "22.22%",
    bottom: "33.33%",
    left: "11.11%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  profileParent: {
    left: 387,
    height: 36,
    top: 11,
  },
  investment: {
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 28,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 0,
    color: Color.colorGray_600,
    top: 24,
  },
  vuesaxlineardollarSquareIcon: {
    left: 16,
    top: 0,
  },
  investmentParent: {
    left: 250,
    height: 36,
    top: 11,
  },
  frameParent: {
    top: 876,
    borderBottomRightRadius: Border.br_smi,
    borderBottomLeftRadius: Border.br_smi,
    borderColor: Color.colorSilver_100,
    width: 430,
    height: 56,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  vuesaxlineararrowLeftIcon: {
    top: 67,
    left: 27,
  },
  addCard: {
    top: 69,
    left: 62,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  pleaseEnterCard: {
    top: 110,
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_600,
    left: 30,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  enterYourCard: {
    width: 147,
    marginLeft: -175,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
  },
  enterYourCardNumberWrapper: {
    top: 197,
    borderColor: Color.colorSilver_400,

    padding: 10,
  },
  enterCardPin: {
    width: 90,
    marginLeft: -175,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
  },
  enterCardPinWrapper: {
    top: 339,
    borderColor: "#ff2c2c",
    padding: 10,
  },
  expiryDate: {
    marginLeft: -65.5,
    width: 69,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
  },
  expiryDateWrapper: {
    left: 30,
    padding: 10,
  },
  cvv: {
    marginLeft: -63.5,

    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
  },
  cvvWrapper: {
    left: 230,
    padding: 10,
  },
  save: {
    marginTop: -12,
    marginLeft: -27,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    width: 53,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: "50%",
    height: 24,
  },
  saveWrapper: {
    top: 527,
    backgroundColor: Color.colorYellowgreen_100,
    height: 60,
    width: 350,
    borderRadius: Border.br_7xs,
    left: 30,
    position: "absolute",
  },
  incorrectCardPin: {
    marginTop: -74,
    marginLeft: -160,
    fontSize: FontSize.size_5xs,
    color: Color.colorCrimson,
    width: 73,
    height: 11,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  byProvidingYour: {
    marginTop: -330,
    marginLeft: -175,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    height: 30,
    width: 370,
    fontSize: FontSize.size_3xs,
    top: "50%",
  },
  icoutlineInfoIcon: {
    top: 391,
    width: 14,
    height: 14,
    left: 31,
  },
  prompt: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Prompt4;
