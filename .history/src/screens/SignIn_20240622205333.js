import React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

// Using the Dimensions API to get the width and height of the screen
const { width, height } = Dimensions.get("window");

const SignIn = ({ navigation }) => {
  const { setAuth } = UseAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    if (!email || !password)
      return alert("Please enter both email and password.");
    setLoading(true);

    try {
      const res = await apiRequest.post(`/auth/signin`, { email, password });
      if (res.status === 200) {
        const { accessToken, roles, id } = res.data;
        setAuth({ id, roles, accessToken });
        navigation.navigate("NewUserDashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Navigate to the SignUp page
  const handleSignUpPress = () => navigation.navigate("SecondSignUp");
  const handleForgotPwdPress = () => navigation.navigate("ForgotPassword");

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.signIn}>
          <StatusBar barStyle="default" translucent={true} />

          <View style={styles.header}>
            <Text style={styles.cancel}>Cancel</Text>
            <View style={styles.signUpContainer}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Pressable onPress={handleSignUpPress}>
                <Text style={styles.signUp}>Sign Up</Text>
              </Pressable>
            </View>
          </View>

          <Text style={styles.logIn}>Log in</Text>
          <Text style={styles.enterYourEmail}>
            Enter your email and password to log in
          </Text>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              value={email}
              style={styles.input}
              placeholder={email ? email : "grearnapi@gmail.com"}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              value={password}
              style={styles.input}
              placeholder="Enter password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          <Pressable style={styles.logInWrapper} onPress={handleLogin}>
            <Text style={styles.logInButton}>
              {loading ? "Loading..." : "Log In"}
            </Text>
          </Pressable>

          <View style={styles.footer}>
            <Pressable onPress={handleForgotPwdPress}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    flex: 1,
    width: "90%",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: height * 0.02,
    alignItems: "center",
  },
  cancel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dontHaveAn: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
    marginLeft: 5,
  },
  logIn: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    marginTop: height * 0.04,
    textAlign: "center",
  },
  enterYourEmail: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    marginTop: height * 0.02,
    textAlign: "center",
  },
  inputWrapper: {
    width: "100%",
    marginTop: height * 0.02,
  },
  inputLabel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: height * 0.06,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    fontSize: FontSize.size_xs,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
  },
  logInWrapper: {
    width: "100%",
    height: height * 0.06,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.04,
  },
  logInButton: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  footer: {
    marginTop: height * 0.02,
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
});

export default SignIn;
