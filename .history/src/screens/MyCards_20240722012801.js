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

const MyCards = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View>
          <View style={styles.myCards}>
            <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
              <Image
                style={styles.backIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>

            <Text style={styles.myCard}>My Card</Text>
            <Text style={styles.manageCards}>Manage cards</Text>

            <LinearGradient
              style={[styles.card, styles.groupLayout]}
              locations={[0, 0.49, 1]}
              colors={["#006dbc", "#007ad2", "#0067b2"]}
            >
              <Text style={styles.cardNumber}>{`.... .... .... `}</Text>
              <Text style={[styles.cardNumberEnd, styles.textTypo]}>4561</Text>
              <Text style={[styles.expiryDate, styles.textTypo]}>02/27</Text>
              <Text style={[styles.cardHolderName, styles.cardHolderLayout]}>
                Omitoyin David Ayomide
              </Text>
              <Text style={[styles.bankName, styles.bankTypo]}>Wema Bank</Text>
              <Image
                style={[styles.mastercardLogo, styles.cardsParentLayout]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvWrapper, styles.cvvLayout]}>
                <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
              </View>
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearwifi.png")}
              />
            </LinearGradient>

            <LinearGradient
              style={[styles.card, styles.groupLayout]}
              locations={[0, 0.86, 1]}
              colors={["#8000bc", "#9a05b3", "#8000bc"]}
            >
              <Text style={styles.cardNumber}>{`.... .... .... `}</Text>
              <Text style={[styles.cardNumberEnd, styles.textTypo]}>4561</Text>
              <Text style={[styles.expiryDate, styles.textTypo]}>02/27</Text>
              <Text style={[styles.bankName, styles.bankTypo]}>UBA</Text>
              <Image
                style={[styles.mastercardLogo, styles.cardsParentLayout]}
                contentFit="cover"
                source={require("../assets/logosmastercard.png")}
              />
              <View style={[styles.cvvWrapper, styles.cvvLayout]}>
                <Text style={[styles.cvv, styles.cvvPosition]}>CVV</Text>
              </View>
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearwifi.png")}
              />
              <Text style={[styles.cardHolderName, styles.cardHolderLayout]}>
                Omitoyin David Ayomide
              </Text>
            </LinearGradient>

            <Pressable
              style={styles.depositButtonWrapper}
              onPress={() => {
                navigation.navigate("FlutterwaveDeposit");
              }}
            >
              <Text style={styles.depositButton}>Deposit</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    top: 67,
    left: 27,
    height: 24,
    width: 24,
  },
  myCard: {
    top: 69,
    left: 62,
    color: Color.colorDarkslategray_500,
    width: 79,
    height: 20,
    fontSize: FontSize.size_base,
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
    position: "absolute",
  },
  card: {
    backgroundColor: "transparent",
    height: 193,
    width: 400,
    borderRadius: Border.br_6xs,
    left: 25,
    position: "absolute",
  },
  cardNumber: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGainsboro_200,
    left: 19,
    top: 73,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  cardNumberEnd: {
    top: 77,
    left: 84,
    width: 24,
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  expiryDate: {
    top: 95,
    left: 19,
    width: 31,
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  cardHolderName: {
    top: 166,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    flexDirection: "row",
    position: "absolute",
  },
  bankName: {
    top: 32,
    left: 19,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  mastercardLogo: {
    top: 154,
    left: 300,
    width: 45,
    height: 35,
    position: "absolute",
  },
  cvvWrapper: {
    height: 29,
    width: 58,
    left: 280,
    borderRadius: Border.br_7xs,
    top: 73,
    position: "absolute",
    overflow: "hidden",
  },
  cvv: {
    marginTop: -10,
    marginLeft: -20,
    paddingHorizontal: 5,
    fontSize: FontSize.size_smi,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  wifiIcon: {
    left: 111,
    top: 73,
    height: 24,
    width: 24,
    position: "absolute",
  },
  depositButtonWrapper: {
    top: verticalScale(600),
    backgroundColor: Color.colorYellowgreen_100,
    height: 60,
    borderRadius: Border.br_7xs,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  depositButton: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  myCards: {
    height: 932,
  },
});

export default MyCards;
