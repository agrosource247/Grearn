import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";
import { FontFamily, Color, Border, FontSize, Input } from "../../GlobalStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const FirstSignUp = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [countryNumber, setCountryNumber] = React.useState("");
  const [isFilled, setIsFilled] = React.useState(false);

  // Function to check if both input fields are filled

  const checkFields = () => {
    setIsFilled(
      phoneNumber.length === Input.phone &&
        countryNumber.length === Input.country
    );
  };
  const handleSignIn = async () => {
    // Check if phoneNumber has exactly phone digits
    if (phoneNumber.length !== Input.phone) {
      Alert.alert("Invalid Phone Number", "Phone number must be phone digits.");
      return; // Prevent proceeding to the next page
    }

    // Check if countryNumber has exactly country digits
    if (countryNumber.length !== Input.country) {
      Alert.alert(
        "Invalid Country Code",
        "Country code must be country digits."
      );
      return; // Prevent proceeding to the next page
    }

    try {
      const userData = await signIn(phoneNumber, countryNumber);
      // Handle successful sign-in (e.g., navigate to another screen)
      navigation.navigate("SecondSignUp");
      console.log("User signed up:", userData);
    } catch (error) {
      // Handle sign-in error
      Alert.alert("Error", error.message);
    }
  };
  // Update the isFilled state whenever input fields change
  React.useEffect(() => {
    checkFields();
  }, [phoneNumber, countryNumber]);
  return (
    <SafeAreaView style={styles.signUp}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Country</Text>
          <Text style={styles.label}>Phone Number</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputText}
              placeholder="9049733613"
              value={phoneNumber}
              maxLength={Input.phone}
              type="phoneNumber"
              keyboardType="numeric"
              onChangeText={setPhoneNumber}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputText}
              placeholder="+234"
              value={countryNumber}
              maxLength={Input.country}
              onChangeText={(text) => {
                if (text.startsWith("+")) {
                  setCountryNumber(text);
                } else {
                  setCountryNumber("+" + text);
                }
              }}
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.proceedButton,
              !isFilled && { opacity: 0.5 }, // Disable button if not all fields are filled
            ]}
            onPress={handleSignIn}
            disabled={!isFilled} // Disable button if not all fields are filled
          >
            <Text style={styles.proceedButtonText}>Proceed</Text>
          </Pressable>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing Up, you agree to our
            </Text>
            <Text style={styles.termsLink}>Terms and Conditions</Text>
            <Text style={styles.termsText}>and</Text>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputText: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
  },
  label: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
  },
  proceedButton: {
    backgroundColor: Color.colorYellowgreen_100,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  proceedButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  termsText: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
  },
  termsLink: {
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

export default FirstSignUp;
