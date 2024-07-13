import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const { setAuth } = UseAuth();

  const handleForgotPwd = async () => {
    if (!email) return alert("Email field is required!.");
    try {
      const res = await apiRequest.post("/pwd/forgot-password", { email });
      await setAuth({ id: res.data.id, token: res.data.token });
      if (res.status === 200) navigation.navigate("ResetPassword");
      else alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.frameCreate}>
          <Text style={styles.createPosition}>
            Enter your Email address to reset password
          </Text>
        </View>
        <View style={styles.omitoyinayomide20gmailcomWrapper}>
          <Text style={styles.emailLabel}>Email Address</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Omitoyinayomide20@gmail.com"
            color="black"
          />
        </View>
        <Pressable style={styles.proceedWrapper} onPress={handleForgotPwd}>
          <Text style={styles.proceed}>Proceed</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: screenWidth * 0.05,
  },
  frameCreate: {
    // marginBottom: screenHeight * 0.05,
    marginLeft: screenWidth * -0.25, // Adjusted for responsive design
  },
  createPosition: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
  },
  omitoyinayomide20gmailcomWrapper: {
    width: "100%",
    marginBottom: screenHeight * 0.05,
  },
  emailLabel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: 10,
  },
  textInput: {
    width: "100%",
    height: screenHeight * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsMedium,
  },
  proceedWrapper: {
    width: "100%",
    height: screenHeight * 0.08,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    alignItems: "center",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
});

export default ForgotPassword;
