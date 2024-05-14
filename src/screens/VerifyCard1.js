import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const VerifyCard1 = () => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.verifyCard}>
          <StatusBar style={[styles.upBars1]} contentFit="cover" />

          <Image
            style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft.png")}
          />
          <Text style={styles.addCard}>Add Card</Text>
          <Text style={[styles.verifyYourCard, styles.enterThe6Typo]}>
            Verify your card
          </Text>
          <View style={styles.saveWrapper}>
            <Text style={[styles.save, styles.savePosition]}>Save</Text>
          </View>
          <Text
            style={[styles.pleaseEnterThe, styles.resendCodeTypo]}
          >{`Please enter the 6 digit code sent to 
+2349049733613`}</Text>
          <Text style={[styles.clickResendIf, styles.savePosition]}>
            Click resend if you don't get a code in 30secs
          </Text>
          <TextInput
            style={[styles.verifyCardChild, styles.verifyCardLayout]}
            placeholder="X"
          />
          <TextInput
            style={[styles.verifyCardItem, styles.verifyCardLayout]}
            placeholder="X"
          />
          <TextInput
            style={[styles.verifyCardInner, styles.verifyCardLayout]}
            placeholder="X"
          />
          <TextInput
            style={[styles.frameTextInput, styles.verifyCardLayout]}
            placeholder="X"
          />
          <TextInput
            style={[styles.verifyCardChild1, styles.verifyCardLayout]}
            placeholder="X"
          />
          <TextInput
            style={[styles.verifyCardChild2, styles.verifyCardLayout]}
            placeholder="X"
          />
          <Text style={[styles.enterThe6, styles.textPosition]}>
            Enter the 6 digit code
          </Text>
          <Text style={[styles.resendCode, styles.textPosition]}>
            Resend code
          </Text>
          <Text style={[styles.text, styles.textPosition]}>0:17</Text>
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 28,
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
  enterThe6Typo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  savePosition: {
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  resendCodeTypo: {
    marginLeft: -185,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  verifyCardLayout: {
    height: 48,
    width: 50,
    borderColor: Color.colorYellowgreen_100,
    top: 235,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textPosition: {
    height: 16,
    left: "50%",
    top: "50%",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
    top: 0,
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
  verifyYourCard: {
    top: 110,
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_smi,
    left: 30,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  save: {
    marginTop: -12,
    marginLeft: -27,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    width: 53,
    top: "50%",
    left: "50%",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    height: 24,
  },
  saveWrapper: {
    top: 527,
    backgroundColor: Color.colorYellowgreen_100,
    width: 350,
    height: 60,
    borderRadius: Border.br_7xs,
    left: 30,
    position: "absolute",
    overflow: "hidden",
  },
  pleaseEnterThe: {
    top: 133,
    color: Color.colorDimgray_200,

    left: 215,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_smi,
  },
  clickResendIf: {
    top: 311,
    fontSize: FontSize.size_5xs,
    color: Color.colorGray_500,
    marginLeft: -175,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  verifyCardChild: {
    left: 30,
  },
  verifyCardItem: {
    left: 90,
  },
  verifyCardInner: {
    left: 150,
  },
  frameView: {
    left: 215,
  },
  verifyCardChild1: {
    left: 210,
  },
  frameTextInput: {
    left: 270,
  },
  verifyCardChild2: {
    left: 330,
  },
  enterThe6: {
    marginTop: -256,
    marginLeft: -175,
    color: Color.colorGray_300,
    width: 143,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  resendCode: {
    marginTop: -100,
    color: Color.colorYellowgreen_300,
    width: 92,
    marginLeft: -175,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  text: {
    marginTop: -70,
    fontFamily: FontFamily.poppinsRegular,
    width: 29,
    marginLeft: -175,
    color: Color.colorYellowgreen_100,
  },
  verifyCard: {
    borderRadius: Border.br_smi,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default VerifyCard1;
