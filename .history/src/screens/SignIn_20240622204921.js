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
      const res = await apiRequest.post(`/auth/signin`, {
        email,
        password,
      });
      if (res.status === 200) {
        const accessToken = res?.data?.accessToken;
        const roles = res?.data?.roles;
        const id = res?.data?.id;
        setAuth({ id, roles, accessToken });
        navigation.navigate("NewUserDashboard");
      } else alert(res.data.message);
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
      <ScrollView>
        <View style={styles.signIn}>
          <StatusBar
            barStyle="default"
            translucent={true}
            contentFit="cover"
            // hidden
          />
          <View style={styles.header}>
            <Text style={[styles.cancel, styles.cancelTypo]}>Cancel</Text>
            <View style={styles.signUpContainer}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Pressable onPress={handleSignUpPress}>
                <Text style={[styles.signUp, styles.dontHaveContainer]}>
                  Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.logIn}>Log in</Text>
          <Text style={[styles.enterYourEmail, styles.signUpTypo]}>
            Enter your email and password to log in
          </Text>

          <View style={styles.emailWrapper}>
            <Text style={[styles.emailAddress, styles.passwordTypo]}>
              Email Address
            </Text>
            <TextInput
              value={email}
              style={styles.input}
              placeholder={email ? email : "grearnapi@gmail.com"}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.passwordWrapper}>
            <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
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
              <Text style={[styles.forgotPassword, styles.signUp]}>
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  cancelTypo: {
    fontSize: FontSize.size_smi,
  },
  header: {
    marginTop: height * 0.02, // 2% of the screen height
    alignItems: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.02, // 2% of the screen height
  },
  dontHaveAn: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
  },
  signUp: {
    color: Color.colorYellowgreen_100,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    marginLeft: width * 0.02, // 2% of the screen width
  },
  logIn: {
    marginTop: height * 0.04, // 4% of the screen height
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
  },
  enterYourEmail: {
    marginTop: height * 0.02, // 2% of the screen height
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_smi,
    textAlign: "center",
  },
  emailWrapper: {
    marginTop: height * 0.02, // 2% of the screen height
    alignItems: "center",
  },
  emailAddress: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
  },
  input: {
    marginTop: height * 0.01, // 1% of the screen height
    height: height * 0.06, // 6% of the screen height
    width: width * 0.8, // 80% of the screen width
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: Border.br_7xs,
    paddingHorizontal: width * 0.02, // 2% of the screen width
    fontSize: FontSize.size_xs,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
  },
  passwordWrapper: {
    marginTop: height * 0.02, // 2% of the screen height
    alignItems: "center",
  },
  password: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
  },
  logInWrapper: {
    marginTop: height * 0.04, // 4% of the screen height
    backgroundColor: Color.colorYellowgreen_100,
    height: height * 0.06, // 6% of the screen height
    width: width * 0.8, // 80% of the screen width
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  logInButton: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  footer: {
    marginTop: height * 0.02, // 2% of the screen height
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
  signIn: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    minHeight: height, // 100% of the screen height
    paddingHorizontal: width * 0.1, // 10% of the screen width
    alignItems: "center",
  },
});

export default SignIn;
