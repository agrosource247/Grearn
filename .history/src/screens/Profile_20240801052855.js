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
        <Image
          style={styles.profileChild}
          contentFit="cover"
          source={{ uri: users[0]?.avatar }}
        />
        <View style={styles.formContainer}>
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
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 20,
  },
  profileChild: {
    width: "100%",
    height: 84,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
    width: "100%",
  },
  passwordWrapperLayout: {
    height: 48,
    width: "90%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    marginBottom: 10,
  },
  passwordPosition1: {
    color: Color.colorSilver_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    padding: 10,
  },
  proceedWrapper: {
    marginTop: 20,
    width: "90%",
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
});

export default Profile;
