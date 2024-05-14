import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const Prompt3 = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.prompt}>
          <Image
            style={[styles.upBars1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/up-bars-1.png")}
          />
          <View style={styles.frameParent}>
            <View style={[styles.vuesaxlinearhome2Parent, styles.parentLayout]}>
              <Image
                style={[styles.vuesaxlinearhome2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlinearhome22.png")}
              />
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
            <View style={[styles.cardsParent, styles.cardsLayout]}>
              <Text style={[styles.cards, styles.cardsLayout]}>Cards</Text>
              <Image
                style={[styles.vuesaxlinearhome2Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlinearcard1.png")}
              />
            </View>
            <View
              style={[styles.vuesaxlinearrefreshCircle, styles.iconLayout]}
            />
            <View style={[styles.profileParent, styles.profileLayout]}>
              <Text style={[styles.profile, styles.profileLayout]}>
                Profile
              </Text>
              <Image
                style={[styles.profileCircleIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/profilecircle.png")}
              />
            </View>
            <View style={[styles.investmentParent, styles.investmentLayout]}>
              <Text style={[styles.investment, styles.investmentLayout]}>
                investment
              </Text>
              <Image
                style={[styles.vuesaxlineardollarSquareIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineardollarsquare.png")}
              />
            </View>
          </View>
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
          <TextInput style={[styles.cvvWrapper, styles.wrapperLayout]}>
            <Text style={[styles.cvv, styles.enterCardTypo]}>CVV</Text>
          </TextInput>
          <View style={styles.saveWrapper}>
            <Text style={[styles.save, styles.savePosition]}>Save</Text>
          </View>
          <Text style={[styles.incorrectCardNumber, styles.savePosition]}>
            Incorrect card number
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
  cardTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  enterCardLayout: {
    height: 48,
    width: 350,
    borderColor: Color.colorSilver_400,
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
    width: 130,
    top: 268,
    height: 48,
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
  },
  pleaseEnterCard: {
    top: 110,
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_600,

    left: 35,
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
    borderColor: Color.colorSilver_400,
    left: 31,
    top: 268,
    padding: 10,
  },
  cvv: {
    marginLeft: -63.5,
    width: 28,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    marginTop: -8,
  },
  cvvWrapper: {
    borderColor: "#ff3434",
    left: 250,
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
    overflow: "hidden",
  },
  incorrectCardNumber: {
    marginTop: -147,
    marginLeft: 60,
    fontSize: FontSize.size_5xs,
    color: Color.colorCrimson,
    width: 95,
    height: 11,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  byProvidingYour: {
    marginTop: -330,
    marginLeft: -170,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_200,
    height: 30,
    width: 350,
    fontSize: FontSize.size_3xs,
    top: "50%",
  },
  icoutlineInfoIcon: {
    top: 318,
    left: 249,
    width: 14,
    height: 14,
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

export default Prompt3;
