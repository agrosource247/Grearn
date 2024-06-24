import React from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
import { Dimensions } from "react-native";

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

  const handleSignUpPress = () => navigation.navigate("SecondSignUp");
  const handleForgotPwdPress = () => navigation.navigate("ForgotPassword");

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.signIn}>
          <StatusBar barStyle="default" translucent={true} contentFit="cover" />
          <Pressable
            style={styles.forgotPwdContainer}
            onPress={handleForgotPwdPress}
          >
            <Text style={styles.forgotPwd}>Forgot Password?</Text>
          </Pressable>
          <Text style={styles.enterYourEmail}>
            Enter your email and password to log in
          </Text>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              value={email}
              style={styles.textInput}
              placeholder="Enter email"
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              value={password}
              style={styles.textInput}
              placeholder="Enter password"
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
          <Pressable style={styles.logInButton} onPress={handleLogin}>
            <Text style={styles.logInButtonText}>
              {loading ? "Loading..." : "Log In"}
            </Text>
          </Pressable>

          <View style={styles.bottomContainer}>
            <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
            <Pressable onPress={handleSignUpPress}>
              <Text style={styles.signUp}> Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    paddingTop: height * 0.05,
  },
  forgotPwdContainer: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 10,
  },
  forgotPwd: {
    fontSize: FontSize.size_smi,
    color: Color.colorYellowgreen_100,
    fontFamily: FontFamily.poppinsMedium,
  },
  enterYourEmail: {
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: height * 0.05,
  },
  inputWrapper: {
    width: "90%",
    marginBottom: height * 0.02,
  },
  inputLabel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    marginBottom: 5,
  },
  textInput: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 10,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorSilver_200,
  },
  logInButton: {
    width: "90%",
    height: 60,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  logInButtonText: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  bottomContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    marginTop: height * 0.02,
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
  },
});

export default SignIn;
