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
      <ScrollView>
        <View style={styles.profile}>
          {/* <View style={styles.editIconParent}>
            <StatusBar style={styles.editIcon} />
            <Pressable onPress={() => navigation.navigate("NewUserDashboard")}>
              <Image
                style={[styles.vuesaxlineararrowLeftIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft1.png")}
              />
            </Pressable>

            <Text style={styles.profile2}>Profile</Text>
          </View> */}
          
