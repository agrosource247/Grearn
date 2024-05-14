import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import FirstSignUp from "./FirstSignUp";
import { useNavigation } from "@react-navigation/core";

const SecondSignUp = ({ navigation }) => {
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View style={styles.signUp}>
          <StatusBar style={styles.upBars1} />

          <MyCancel2 />

          <LoadingBar2 />

          <Text style={styles.welcome}>Welcome</Text>

          <Text style={styles.letsGetYou}>
            Lets get you started with your free account
          </Text>

          <Text style={[styles.yourFullNameas, styles.yourPosition]}>
            Your full name(as shown on your ID)
          </Text>

          <View style={styles.firstNameWrapper}>
            <TextInput style={[styles.firstName, styles.nameTypo]}>
              First name
            </TextInput>
            <View style={styles.lastNameWrapper}>
              <TextInput style={[styles.lastName, styles.nameTypo]}>
                Last name
              </TextInput>
            </View>
          </View>

          <View style={styles.omitoyinayomide20gmailcomWrapper}>
            <Text style={styles.emailAddress}>Email Address</Text>
            <TextInput style={styles.text1}>
              Omitoyinayomide20@gmail.com
            </TextInput>
          </View>

          <View style={styles.dee002Wrapper}>
            <Text style={styles.username}>Username</Text>
            <FirstSignUp />
            <TextInput style={styles.dee002}>Dee002</TextInput>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.dateOfBirth}>Date of Birth</Text>
            <TextInput style={styles.TextInput16}>16/09/1995</TextInput>
          </View>

          <Pressable
            style={styles.proceedWrapper}
            onPress={() => navigation.navigate("SignUp1")}
          >
            <Text style={styles.proceed}>Proceed</Text>
          </Pressable>

          <Text style={styles.bySigningUpyouContainer}>
            <Text style={styles.haveAnAccount1}>
              By signing Up,you agree to our{" "}
            </Text>
            <Text style={styles.termsAndConditions}>Terms and Conditions</Text>
            <Text style={styles.haveAnAccount1}> and </Text>
            <Text style={styles.termsAndConditions}>Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  signUp: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorWhite,
    width: "100%",
    height: 932,
    alignItems: "center",
  },
  upBars1: {
    width: 337,
    height: 37,
    overflow: "hidden",
  },
  cancel: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  welcome: {
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    top: 122,
    left: 47,
  },
  letsGetYou: {
    width: 275,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: 110,
    left: 27,
  },
  yourPosition: {
    width: 245,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: 170,
    left: 30,
  },
  nameTypo: {
    height: 15,
    width: 66,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    marginLeft: "50%",
    marginTop: -8,
  },
  text1: {
    width: 200,
    padding: 10,
    marginLeft: 25,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    top: "50%",
    marginTop: -8,
    left: "50%",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -15,
  },
  proceedWrapper: {
    width: 400,
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    position: "absolute",
    top: 530,
    left: 25,
    overflow: "hidden",
  },
  bySigningUpyouContainer: {
    width: 349,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: 600,
    left: 27,
  },
  firstNameWrapper: {
    width: 155,
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
    top: 200,
    left: 20,
    overflow: "hidden",
  },
  lastNameWrapper: {
    width: 100,
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
    top: 200,
    left: 220,
    overflow: "hidden",
  },
  firstName: {
    height: 15,
    width: 66,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    marginLeft: "50%",
    marginTop: -8,
  },
  lastName: {
    height: 15,
    width: 66,
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    marginLeft: "50%",
    marginTop: -8,
  },
  omitoyinayomide20gmailcomWrapper: {
    position: "absolute",
    top: 470,
    left: 165,
  },
  emailAddress: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: -45,
    left: 25,
  },
  username: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: -20,
    left: 30,
  },
  dee002Wrapper: {
    position: "absolute",
    top: 380,
  },
  dee002: {
    width: 50,
    padding: 10,
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  wrapper: {
    position: "absolute",
    top: 550,
  },
  dateOfBirth: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    position: "absolute",
    top: "50%",
    left: 25,
  },
  text1Position: {
    color: Color.colorSilver_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: "50%",
    marginTop: -8,
    left: "50%",
  },
});

const LoadingBar2 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.groupChild} />
      <View style={styles.groupItem} />
      <View style={[styles.groupInner, styles.frameViewLayout]} />
      <View style={[styles.frameView, styles.frameViewLayout]} />
    </View>
  );
};

const MyCancel2 = () => {
  return (
    <View>
      <Text style={[styles.cancel, styles.cancelPosition]}>Cancel</Text>
      <Text style={[styles.cancelPosition, styles.haveAnAccountContainer]}>
        <Text style={styles.haveAnAccount1}>Have an account?</Text>
        <Text style={styles.logIn}>Log in</Text>
      </Text>
    </View>
  );
};

export default SecondSignUp;
