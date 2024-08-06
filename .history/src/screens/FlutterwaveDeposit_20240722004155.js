import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { PayWithFlutterwave } from "flutterwave-react-native";
import { Flutterwave, User, generateRandomCode } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

const FlutterwaveDeposit = () => {
  const { auth } = UseAuth();
  const [tx_ref, setTx_ref] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  // To make a get request to the users API with jsonwebtokens
  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    User(isMounted, setUsers, controller, auth, "get");

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  const setForm = async () => {
    const form = {
      id: auth.id,
      product: "Flutterwave",
      transactionType: "Deposit",
      amount: amount,
      tx_ref: tx_ref,
    };
    return form;
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const ref = await generateRandomCode();
    setTx_ref(ref);
    setEmail(users ? users[0]?.email : "");

    try {
      let isMounted = true;
      const controller = new AbortController();
      const form = await setForm();

      const res = await Flutterwave(isMounted, form, controller, auth, "post");
      if (res?.status === 200) {
        isMounted = false;
        controller.abort();
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnRedirect = (data) => {
    console.log(data);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <View style={styles.addNewCard}>
            <PayWithFlutterwave
              onRedirect={handleOnRedirect}
              style={styles.saveWrapper}
              options={{
                tx_ref: tx_ref,
                authorization:
                  "FLWPUBK_TEST-aa7f62a0780603788a1184d0bd6ddfb6-X",
                customer: {
                  email: email,
                },
                amount: amount,
                currency: "NGN",
                payment_options: "banktransfer",
              }}
            />
          </View>
        ) : (
          <View style={styles.addNewCard}>
            {/* <StatusBar
              style={[styles.upBars1, styles.upBars1Position]}
              contentFit="cover"
            /> */}
            <Text style={styles.addCard}>Deposit</Text>
            <Text style={styles.pleaseEnterCard}>
              Please enter amount to fund
            </Text>
            <TextInput
              style={[
                styles.enterYourCardNumberWrapper,
                styles.enterCardLayout,
              ]}
              placeholder="Enter amount"
              onChangeText={setAmount}
              value={amount}
            ></TextInput>

            <Pressable style={styles.saveWrapper} onPress={handleDeposit}>
              <Text style={[styles.save, styles.savePosition]}>
                {loading ? "Loading" : "Proceed"}
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  icoutlineInfoIcon: {
    top: 247,
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  pleaseEnterCardPosition: {
    left: 30,
    position: "absolute",
  },
  incorrectCardNumber: {
    marginTop: -218,
    marginLeft: -170,
    fontSize: FontSize.size_5xs,
    color: Color.colorCrimson,
    width: 95,
    height: 11,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  savePosition: {
    left: "50%",
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
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
    // width: 350,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
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
    // flexGrow: 1,
    width: "100%",
    height: 932,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
});

export default FlutterwaveDeposit;
