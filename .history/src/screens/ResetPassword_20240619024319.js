import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UseAuth from "../services/hooks/UseAuth";
import { apiRequest } from "../services/api";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ResetPassword = ({ navigation }) => {
  const [code, setCode] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const { auth } = UseAuth();

  const handleResetPwd = async () => {
    if (!code) return alert("Verification code field is required!.");
    if (!password) return alert("Password field is required!.");

    try {
      const res = await apiRequest.post(
        `/pwd/reset-password/${auth.id}/${auth.token}`,
        { code, password, cpassword }
      );
      if (res.status === 200) navigation.navigate("SignIn");
      else alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GestureHandlerRootView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.frameCreate}>
          <Text style={styles.createPosition}>Verification code</Text>
          <TextInput
            style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
            placeholder="Verification code"
            color="black"
            onChangeText={setCode}
            value={code}
          />
        </View>
        <View style={styles.frameCreate}>
          <Text style={styles.createPosition}>Create password</Text>
          <TextInput
            style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
            placeholder="Enter password"
            color="black"
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Text style={[styles.yourPasswordMust, styles.logInTypo]}>
          Your password must have a minimum of 8 characters, which should
          include an uppercase, lowercase, a number, and a special character
        </Text>
        <View style={styles.frameConfirm}>
          <Text style={styles.passwordPosition}>Confirm password</Text>
          <TextInput
            style={[styles.confirmPasswordBorder, styles.confirmPosition]}
            placeholder="Confirm password"
            color="black"
            onChangeText={setCPassword}
            value={cpassword}
          />
        </View>
        <Pressable style={styles.proceedWrapper} onPress={handleResetPwd}>
          <Text style={styles.proceed}>Proceed</Text>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Color.colorWhite,
    width: screenWidth,
    height: screenHeight,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  frameConfirm: {
    marginTop: 30,
    width: "100%",
  },
  frameCreate: {
    marginTop: 20,
    width: "100%",
  },
  passwordWrapperLayout: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  confirmPasswordBorder: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginBottom: 10,
  },
  createPosition: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginBottom: 10,
  },
  yourPasswordMust: {
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  proceedWrapper: {
    marginTop: 30,
    width: "100%",
    height: 48,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    justifyContent: "center",
    alignItems: "center",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default ResetPassword;
