import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { User, Withdraw } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

const Withdrawal = ({ navigation }) => {
  const { auth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [account_number, setAccount_number] = React.useState("");
  const [account_bank, setAccount_bank] = React.useState("");
  const [display_bank, setDisplay_bank] = React.useState("");
  const [account_name, setAccount_name] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [data, setData] = React.useState({});
  const [banks, setBanks] = React.useState([]);

  // To make a get request to the users API with jsonwebtokens
  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    User(isMounted, setUsers, controller, auth, "get");
    setBank();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  const setBank = async () => {
    try {
      const bank = await Withdraw("", new AbortController(), "get");
      setBanks(bank.data);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    if (users.length > 0) {
      setAccount();
    }
  }, [users]);

  const setForm = async () => {
    const charges = 0.05 * parseInt(amount);
    const newAmount = parseInt(charges) + parseInt(amount);

    const form = {
      id: auth.id,
      product: "Flutterwave",
      transactionType: "Withdrawal",
      completed: true,
      refund: false,
      amount: newAmount.toString(),
      account_bank: account_bank,
      account_number: account_number,
      account_name: account_name,
    };
    return form;
  };

  const setAccount = async () => {
    setAccount_number(users[0]?.accountnumber);
    setAccount_name(users[0]?.accountname);
    setAccount_bank(users[0]?.bankname);
  };

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (users[0]?.walletbalance < 0)
      return alert("Your wallet balance is low, please fund your wallet");
    if (!amount) return alert("Amount field is required");
    if (amount < 999) return alert("Minimum withdrawal is #1000");
    if (amount > users[0]?.walletbalance) return alert("Insufficient funds");
    setLoading(true);

    if (!account_bank && !account_name && !account_number) {
      alert("Account Details field are required");
      navigation.navigate("BankDetails");
    } else {
      const form = await setForm();
      setData(form);
      const matchingBank = banks.find(
        (bank) => bank.code === form.account_bank
      );
      setDisplay_bank(matchingBank.name);
      setConfirm(true);
      setLoading(false);
    }
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      const controller = new AbortController();
      const form = await setForm();

      const res = await Withdraw(form, controller, "post");
      if (res?.status === 200) {
        alert(
          "Transaction Successfully Processed, You'll receive your funds shortly"
        );
        controller.abort();
      } else alert("Transaction Failed, please try again");
      navigation.navigate("NewUserDashboard");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {confirm ? (
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Confirm transaction details</Text>
            <Text style={styles.info}>Bank name: {display_bank}</Text>
            <Text style={styles.info}>
              Account number: {data?.account_number}
            </Text>
            <Text style={styles.info}>Account name: {data?.account_name}</Text>
            <Text style={styles.info}>Amount: {data?.amount}</Text>

            <Pressable style={styles.button} onPress={handleConfirm}>
              <Text style={styles.buttonText}>
                {loading ? "Loading" : "Proceed"}
              </Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.cardContainer}>
            <Text style={styles.title}>Withdraw funds</Text>
            <Text style={styles.info}>
              5% will be deducted to cover transaction cost
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount"
              onChangeText={setAmount}
              value={amount}
            />

            <Pressable style={styles.button} onPress={handleDeposit}>
              <Text style={styles.buttonText}>
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
  root: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 48,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Withdrawal;
