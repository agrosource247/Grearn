import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import UseAuth from "../services/hooks/UseAuth";
import { User, apiRequest } from "../services/api";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  const [users, setUsers] = React.useState([]);
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [avatar, setAvatar] = React.useState("");
  const { auth } = UseAuth();
  // const navigation = useNavigation();

  const setForm = async () => {
    const form = {
      id: auth.id,
      firstname: firstname,
      lastname: lastname,
      username: username,
      phone: phone,
      email: email,
      password: password,
      country: country,
      dob: dob,
      avatar: avatar,
    };
    return form;
  };

  React.useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    User(isMounted, setUsers, controller, auth, "get");

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let isMounted = true;
      const controller = new AbortController();
      const form = await setForm();

      const res = await User(isMounted, form, controller, auth, "patch");
      if (res?.status === 200) {
        isMounted = false;
        controller.abort();
        alert("Update Successful");
        // navigation.navigate("NewUserDashboard");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("my_file", file);
      const res = await apiRequest.post("/upload", data);
      setAvatar(res.data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.editIconParent}>
          <StatusBar style={styles.editIcon} />
          <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
            <Image
              style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vuesaxlineararrowleft1.png")}
            />
          </Pressable>

          <Text style={styles.profile2}>Profile</Text>
        </View>
        <View
          style={{
            // alignItems: "center",
            marginTop: 180,
            alignItems: "center",
            // marginTop: 20,
            width: "100%",
            // paddingHorizontal: 20,
          }}
        >
          <View>
            <Text>Firstname</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.firstname : "Firstname"}
              color="black"
              onChangeText={setFirstname}
              value={firstname}
            />
          </View>
          <View>
            <Text>Lastname</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.lastname : "Lastname"}
              color="black"
              onChangeText={setLastname}
              value={lastname}
            />
          </View>
          <View>
            <Text>Username</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.username : "Username"}
              color="black"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View>
            <Text>Country Code</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              maxLength={4}
              placeholder={users ? users[0]?.country.toString() : "Country"}
              color="black"
              onChangeText={setCountry}
              value={country}
            />
          </View>
          <View>
            <Text>Phone number</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.phone.toString() : "Phone"}
              color="black"
              onChangeText={setPhone}
              value={phone}
            />
          </View>
          <View>
            <Text>Email address</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.email : "Email"}
              color="black"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View>
            <Text>Password address</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder="****"
              color="black"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <Text>Date of birth</Text>
            <TextInput
              style={[styles.passwordWrapperLayout, styles.passwordPosition1]}
              placeholder={users ? users[0]?.dob : "Date of birth"}
              color="black"
              onChangeText={setDob}
              value={dob}
            />
          </View>

          <Pressable style={styles.proceedWrapper} onPress={handleSubmit}>
            <Text style={styles.proceed}>
              {loading ? "Loading" : "Proceed"}
            </Text>
          </Pressable>
        </View>

        <Image
          style={[styles.profileChild, styles.upBars1Position]}
          contentFit="cover"
          source={{ uri: users[0]?.avatar }}
        />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  frameConfirm: {
    top: 130,
    left: 5,
  },

  groupLayout: {
    backgroundColor: Color.colorYellowgreen_400,
    borderRadius: Border.br_2xs,
  },
  welcomePosition: {
    textAlign: "left",
    left: "50%",
  },
  cancelPosition: {
    fontSize: FontSize.size_smi,
    top: 30,
    left: "50%",
  },
  logInTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  letsGetYouTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -195,
    textAlign: "left",
    left: "50%",
  },
  letsGetTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    marginLeft: -170,
    textAlign: "left",
    left: "50%",
  },
  passwordWrapperLayout: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  confirmPasswordBorder: {
    // width: "90%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    top: 100,
    // left: 20,
  },
  createWrapperLayout: {
    height: 48,
    // width: "90%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  confirmPosition: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  passwordPosition: {
    color: Color.colorGray_300,
    // top: 100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
  },
  createPosition: {
    // color: Color.colorGray_300,
    // top: 40,
    // fontFamily: FontFamily.poppinsMedium,
    // fontWeight: "500",
    // fontSize: FontSize.size_smi,
  },
  upBars1: {
    left: 47,
    width: 337,
    height: 37,
  },
  groupChild: {
    left: 45,
    width: 26,
    backgroundColor: Color.colorYellowgreen_100,
    borderRadius: Border.br_2xs,
    height: 5,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 19,
  },
  frameView: {
    left: 83,
  },
  frameParent: {
    top: 135,
    left: 290,
    width: 83,
  },
  welcome: {
    marginLeft: -200,
    top: 122,
    fontSize: FontSize.size_3xl,
    width: 110,
    height: 28,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  cancel: {
    marginLeft: -200,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  haveAnAccount1: {
    color: Color.colorDimgray_200,
  },
  text: {
    color: Color.colorGray_700,
  },
  haveAnAccount: {
    fontFamily: FontFamily.poppinsRegular,
  },
  logIn: {
    color: Color.colorYellowgreen_100,
  },
  haveAnAccountContainer: {
    marginLeft: 45,
  },
  letsGetYou: {
    top: 164,
    color: Color.colorDimgray_200,
  },
  yourPasswordMust: {
    top: 220,
    fontSize: FontSize.size_xs,
    color: Color.colorGray_500,
    width: 332,
    marginLeft: -179,
    left: 215,
  },
  termsAndConditions: {
    color: Color.colorYellowgreen_100,
  },
  bySigningUpyouContainer: {
    top: 330,
    width: 349,
  },

  enterPasswordWrapper: {
    top: 268,
  },

  createPassword: {
    marginTop: 150,
    width: 119,
  },

  proceed: {
    marginTop: -15,
    marginLeft: -44,
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    width: 89,
    height: 30,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
  },
  proceedWrapper: {
    marginTop: 50,
    // width: "90%",
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    textAlign: "center",
  },
  parentLayout: {
    height: 36,
    top: 11,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  homeTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",

    fontSize: FontSize.size_3xs,
    left: 0,
  },
  cardsLayout: {
    width: 31,
    position: "absolute",
  },
  profileLayout: {
    width: 36,
    position: "absolute",
  },
  investmentLayout: {
    width: 59,
    position: "absolute",
  },
  upBars1Position: {
    left: "50%",
    position: "absolute",
  },
  parentShadowBox: {
    height: 57,
    width: 370,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "#ececec",
    borderRadius: Border.br_7xs,
    left: 30,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  englishTypo: {
    fontSize: FontSize.size_2xs,
    top: "50%",

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  editIcon: {
    // top: 128,
    // left: 337,
    // height: 80,
    // width: 24,
    // position: "absolute",
    backgroundColor: "white",
  },
  upBars1: {
    marginLeft: -169,
    top: -7,
    width: 337,
    height: 37,
    overflow: "hidden",
  },
  vuesaxlineararrowLeftIcon: {
    top: 50,
    left: 28,
  },
  profile2: {
    top: 52,
    left: 63,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  editIconParent: {
    // borderRadius: Border.br_9xs,
    backgroundColor: Color.colorYellowgreen_100,
    height: 167,
    position: "absolute",
    width: "100%",
  },
  vuesaxlineararrowRightIcon: {
    marginTop: -11.5,
    left: 338,
    top: "50%",
    height: 24,
    width: 24,
    position: "absolute",
  },
  managePassword: {
    width: 105,
    color: Color.colorDimgray_700,
    left: 8,
    marginTop: -4.5,

    fontSize: FontSize.size_2xs,
  },
  vuesaxlineararrowRightParent: {
    top: 293,
    borderColor: Color.colorYellowgreen_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 370,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowColor: "#ececec",
    borderRadius: Border.br_7xs,
  },
  language: {
    width: 57,
    color: Color.colorDimgray_700,
    left: 8,
    marginTop: -4.5,

    fontSize: FontSize.size_2xs,
  },
  english: {
    marginTop: -5.5,
    left: 316,
    color: "#57dc00",
    width: 40,

    fontSize: FontSize.size_2xs,
  },
  languageParent: {
    top: 358,
  },
  general: {
    top: 262,
    fontSize: FontSize.size_sm,
    color: "#3f3f3f",
    left: 30,
    height: 20,

    width: 59,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  omitoyinDavidAyomide: {
    marginLeft: -96,
    top: 200,
    fontSize: 15,
    color: "#585858",
    width: 191,
    height: 16,

    left: "50%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  profileChild: {
    marginLeft: -43,
    top: 115,
    width: 84,
    height: 84,
  },
});

export default Profile;
