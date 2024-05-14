import * as React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { FontFamily, Color, Border, FontSize } from "../../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstSignUp = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryNumber, setCountryNumber] = React.useState("");
  const [isFilled, setIsFilled] = React.useState(false);

  React.useEffect(() => {
    setIsFilled(phoneNumber.length === 10 && countryNumber.length === 4);
  }, [phoneNumber, countryNumber]);

  const handleSignIn = async () => {
    if (!isFilled) {
      Alert.alert("Incomplete Information", "Please fill in all fields.");
      return;
    }

    try {
      const userData = await signIn(phoneNumber, countryNumber);
      navigation.navigate("SecondSignUp");
      console.log("User signed up:", userData);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.signUp}>
      {/* Your existing UI components */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="Country Code"
        value={countryNumber}
        onChangeText={(text) => setCountryNumber(text)}
        keyboardType="numeric"
        maxLength={4}
      />
      <Pressable
        style={[
          styles.proceedButton,
          { opacity: isFilled ? 1 : 0.5 }, // Adjust opacity based on isFilled state
        ]}
        onPress={handleSignIn}
        disabled={!isFilled}
      >
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  proceedButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  proceedButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default FirstSignUp;
