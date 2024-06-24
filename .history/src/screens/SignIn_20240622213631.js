import React from "react";
import { Pressable, StatusBar, Text, View, TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../../GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native-gesture-handler";
import { apiRequest } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
import { Dimensions } from "react-native";
import styles from "../styles/SignInstyles";

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
          <View style={styles.topContainer}>
            <Text style={styles.cancel} onPress={() => navigation.goBack()}>
              Cancel
            </Text>
            <View style={styles.signUpContainer}>
              <Text style={styles.dontHaveAn}>Don’t have an account?</Text>
              <Pressable onPress={handleSignUpPress}>
                <Text style={styles.signUp}> Sign Up</Text>
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

          {/* <Pressable
            style={styles.forgotPwdContainer}
            onPress={handleForgotPwdPress}
          >
            <Text style={styles.forgotPwd}>Forgot Password?</Text>
          </Pressable> */}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default SignIn;
