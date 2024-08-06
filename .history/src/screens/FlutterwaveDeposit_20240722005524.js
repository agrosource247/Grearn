import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
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
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addNewCard: {
    borderRadius: Border.br_smi,
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    backgroundColor: Color.colorWhite,
    width: "90%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  addCard: {
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray_500,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginBottom: 10,
  },
  pleaseEnterCard: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    marginBottom: 10,
  },
  enterYourCardNumberWrapper: {
    padding: 10,
    marginBottom: 20,
  },
  enterCardLayout: {
    height: 48,
    borderColor: Color.colorSilver_400,
    width: 350,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  saveWrapper: {
    backgroundColor: Color.colorYellowgreen_100,
    height: 60,
    paddingHorizontal: 2,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  save: {
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default FlutterwaveDeposit;
