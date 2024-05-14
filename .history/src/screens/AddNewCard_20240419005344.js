import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const AddNewCard = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.addNewCard}>
          <StatusBar
            style={[styles.upBars1, styles.upBars1Position]}
            contentFit="cover"
          />
          <Text style={styles.addCard}>Add Card</Text>
          <Text style={styles.pleaseEnterCard}>Please enter card details</Text>
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
          <TextInput style={[styles.cvvWrapper, styles.wrapperLayout]}>
            <Text style={[styles.cvv, styles.enterCardTypo]}>CVV</Text>
          </TextInput>
          <View style={styles.saveWrapper}>
            <Text style={[styles.save, styles.savePosition]}>Save</Text>
          </View>
          <Text style={[styles.byProvidingYour, styles.savePosition]}>
            By providing your card information, you authorize Grearn to bind
            your card in accordance with Grearn terms and conditions
          </Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  upBars1Position: {
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
  homeTypo: {
    height: 12,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 28,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    left: 0,
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
  enterCardLayout: {
    height: 48,
    borderColor: Color.colorSilver_400,
    width: 350,
    borderRadius: Border.br_7xs,
    left: 31,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  enterCardTypo: {
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
    // height: 56,
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
    left: 30,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    width: 79,

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

    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 30,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  enterYourCard: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  enterYourCardNumberWrapper: {
    top: 197,
    padding: 10,
  },
  enterCardPin: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  enterCardPinWrapper: {
    top: 339,
    padding: 10,
  },
  expiryDate: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  expiryDateWrapper: {
    left: 31,
    top: 268,
    padding: 10,
  },
  cvv: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
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
    left: "50%",
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
    overflow: "hidden",
  },
  byProvidingYour: {
    marginTop: -331,
    marginLeft: -175,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    height: 30,
    width: 350,
    left: "50%",
    top: "50%",
    fontSize: FontSize.size_3xs,
  },
  addNewCard: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,

    backgroundColor: Color.colorWhite,
  },
});

export default AddNewCard;
