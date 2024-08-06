import * as React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { verticalScale } from "react-native-size-matters";

const MyCards = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <View style={styles.myCards}>
            {/* <StatusBar
						style={[styles.upBars1, styles.iconPosition]}
						contentFit="cover"
						// hidden
					/> */}
            <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
              <Image
                style={styles.vuesaxlineararrowLeftIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>

            <Text style={styles.myCard}>My Card</Text>
            <Text style={styles.manageCards}>Manage cards</Text>
            <LinearGradient
              style={[styles.parent, styles.groupLayout]}
              locations={[0, 0.49, 1]}
              colors={["#006dbc", "#007ad2", "#0067b2"]}
            >
              <Text style={styles.text}>{`.... .... .... `}</Text>
              <Text style={[styles.text1, styles.textTypo]}>4561</Text>
              <Text style={[styles.text2, styles.textTypo]}>02/27</Text>
              <Text
                style={[styles.omitoyinDavidAyomide, styles.omitoyinLayout]}
              >
                Omitoyin David Ayomide
              </Text>
              <Text style={[styles.wemaBank, styles.ubaTypo]}>Wema Bank</Text>
              <Image
                style={[styles.logosmastercardIcon, styles.cardsParentLayout]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvWrapper, styles.cvvLayout]}>
                <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
              </View>
              <Image
                style={styles.vuesaxlinearwifiIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearwifi.png")}
              />
            </LinearGradient>
            <LinearGradient
              style={[styles.group, styles.groupLayout]}
              locations={[0, 0.86, 1]}
              colors={["#8000bc", "#9a05b3", "#8000bc"]}
            >
              <Text style={styles.text}>{`.... .... .... `}</Text>
              <Text style={[styles.text1, styles.textTypo]}>4561</Text>
              <Text style={[styles.text2, styles.textTypo]}>02/27</Text>
              <Text style={[styles.uba, styles.ubaTypo]}>UBA</Text>
              <Image
                style={[styles.logosmastercardIcon, styles.cardsParentLayout]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvContainer, styles.cvvLayout]}>
                <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
              </View>
              <Image
                style={styles.vuesaxlinearwifiIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearwifi.png")}
              />
              <Text
                style={[styles.omitoyinDavidAyomide1, styles.omitoyinLayout]}
              >
                Omitoyin David Ayomide
              </Text>
            </LinearGradient>
            <Pressable
              style={styles.addNewCardWrapper}
              onPress={() => {
                navigation.navigate("FlutterwaveDeposit");
              }}
            >
              <Text style={[styles.addNewCard, styles.cvvPosition]}>
                Deposit
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 36,
    top: 5,
  },
  homeTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    left: 0,
  },
  cardsParentLayout: {
    height: 35,
    position: "absolute",
  },
  investmentLayout: {
    // position: "absolute",
  },
  groupLayout: {
    backgroundColor: "transparent",
    height: 193,
    width: 400,
    borderRadius: Border.br_6xs,
  },
  textTypo: {
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  omitoyinLayout: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    left: 19,
    fontSize: FontSize.size_smi,
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    // position: "absolute",
  },
  ubaTypo: {
    top: 32,
    color: Color.colorWhite,

    left: 19,

    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  cvvLayout: {
    height: 29,
    width: 58,
    left: 280,
    borderRadius: Border.br_7xs,
    top: 73,
    position: "absolute",
    overflow: "hidden",
  },
  cvvPosition: {
    left: "50%",
    top: "50%",
    color: Color.colorWhite,
    // textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    overflow: "hidden",
  },
  vuesaxlinearhome2Icon: {
    left: 3,
    height: 24,
    width: 24,
  },
  home: {
    color: Color.colorGray_600,
    top: 24,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
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

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  cardsParent: {
    top: 5,
    left: 130,
  },
  vuesaxlinearrefreshCircle: {
    top: 10,
    left: 198,
    height: 24,
    width: 24,
    position: "absolute",
  },
  profile: {
    width: 36,
    color: Color.colorGray_600,
    top: 24,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  profileParent: {
    left: 400,
    width: 36,
    position: "absolute",
  },
  investment: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    left: 0,
    color: Color.colorGray_600,
    top: 24,
  },
  vuesaxlineardollarSquareIcon: {
    left: 16,
    height: 24,
    width: 24,
  },
  investmentParent: {
    left: 240,
    height: 36,
    top: 5,
  },
  frameParent: {
    top: 876,
    borderBottomRightRadius: Border.br_smi,
    borderBottomLeftRadius: Border.br_smi,
    borderStyle: "solid",
    borderColor: Color.colorSilver_100,
    borderWidth: 1,
    width: 430,
    height: 56,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  vuesaxlineararrowLeftIcon: {
    top: 67,
    left: 27,
    height: 24,
    width: 24,
    // position: "absolute",
  },
  myCard: {
    top: 69,
    left: 62,
    color: Color.colorDarkslategray_500,
    width: 79,
    height: 20,

    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  manageCards: {
    top: 110,
    color: Color.colorDimgray_600,

    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 30,
    fontSize: FontSize.size_smi,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,

    color: Color.colorGainsboro_200,
    left: 19,
    top: 73,

    fontSize: FontSize.size_base,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    top: 77,
    left: 84,
    width: 24,
  },
  text2: {
    top: 95,
    left: 19,

    width: 31,
  },
  omitoyinDavidAyomide: {
    top: 166,
  },
  wemaBank: {
    width: 101,
  },
  logosmastercardIcon: {
    top: 154,
    left: 300,
    width: 45,
    overflow: "hidden",
  },
  cvv: {
    marginTop: -10,
    marginLeft: -20,
    // width: 29,
    paddingHorizontal: 5,
    paddingVertical: -5,
    fontSize: FontSize.size_smi,
    left: "50%",
    top: "50%",

    alignItems: "center",
    display: "flex",
  },
  cvvWrapper: {
    backgroundColor: "#003c68",
  },
  vuesaxlinearwifiIcon: {
    left: 111,
    top: 73,
    height: 24,
    width: 24,
    position: "absolute",
  },
  parent: {
    top: 163,
  },
  uba: {
    width: 36,
  },
  cvvContainer: {
    backgroundColor: "#4d0060",
  },
  omitoyinDavidAyomide1: {
    top: 168,
  },
  group: {
    top: 377,
  },
  addNewCard: {
    fontSize: FontSize.size_xl,
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
  },
  addNewCardWrapper: {
    top: verticalScale(600),
    backgroundColor: Color.colorYellowgreen_100,
    height: 60,
    borderRadius: Border.br_7xs,
    width: "90%",
    alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
  },
  myCards: {
    // borderRadius: Border.br_smi,
    // flex: 1,
    // width: "100%",
    height: 932,
    // backgroundColor: Color.colorWhite,
  },
});

export default MyCards;
