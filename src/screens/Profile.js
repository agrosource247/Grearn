import React from "react";
import { Image } from "expo-image";
import { Pressable, Alert, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../../GlobalStyles";
import { StatusBar } from "expo-status-bar";
import UseAuth from "../services/hooks/UseAuth";
import { ImageUpload, User } from "../services/api";
import {
  GestureHandlerRootView,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

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
  const [loading, setLoading] = React.useState(null);
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

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) setAvatar(result.assets[0].uri);
  };

  const handleImagePress = () => {
    Alert.alert(
      "Change Profile Picture",
      "Choose an option",
      [
        { text: "Select Image", onPress: handleSelectImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  const uploadProfileImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("my_file", {
      name: `${new Date().getTime()}_my_file.jpg`,
      uri: avatar,
      type: "image/jpg",
    });

    try {
      const controller = new AbortController();
      const res = await ImageUpload(formData, controller);
      controller.abort();

      if (res.success) {
        try {
          setAvatar(res.data.secure_url);
          let isMounted = true;
          const controller = new AbortController();
          const form = await setForm();

          const response = await User(
            isMounted,
            form,
            controller,
            auth,
            "patch"
          );
          if (response?.status === 200) {
            isMounted = false;
            controller.abort();
            alert("Profile picture update Successful");
          } else alert(response?.data.message);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <GestureHandlerRootView>
      <ScrollView>
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

          <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
            <Image
              key={avatar} // Use key to force re-render when avatar changes
              style={styles.profileChild}
              // contentFit="cover"
              source={avatar ? { uri: avatar } : { uri: users[0]?.avatar }}
            />
          </Pressable>
          {avatar ? (
            <Text
              onPress={uploadProfileImage}
              style={[
                styles.skip,
                { backgroundColor: "green", color: "white", borderRadius: 8 },
              ]}
            >
              {loading ? "Loading..." : "Upload"}
            </Text>
          ) : null}
        </View>

        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text>Firstname</Text>
            <TextInput
              style={styles.input}
              placeholder={users ? users[0]?.firstname : "Firstname"}
              color="black"
              onChangeText={setFirstname}
              value={firstname}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Lastname</Text>
            <TextInput
              style={styles.input}
              placeholder={users ? users[0]?.lastname : "Lastname"}
              color="black"
              onChangeText={setLastname}
              value={lastname}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Username</Text>
            <TextInput
              style={styles.input}
              placeholder={users ? users[0]?.username : "Username"}
              color="black"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Country Code</Text>
            <TextInput
              style={styles.input}
              maxLength={4}
              placeholder={users ? users[0]?.country.toString() : "Country"}
              color="black"
              onChangeText={setCountry}
              value={country}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder={users ? users[0]?.phone.toString() : "Phone"}
              color="black"
              onChangeText={setPhone}
              value={phone}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder={users ? users[0]?.email : "Email"}
              color="black"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Password address</Text>
            <TextInput
              style={styles.input}
              placeholder="****"
              color="black"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Date of birth</Text>
            <TextInput
              style={styles.input}
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
  uploadBtnContainer: {
    height: 125,
    width: 125,
    borderRadius: 125 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    overflow: "hidden",
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    paddingTop: 180,
  },
  inputGroup: {
    width: "90%",
    marginBottom: 15,
  },
  input: {
    height: 48,
    width: "100%",
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    borderRadius: Border.br_7xs,
    padding: 10,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorSilver_200,
  },
  proceedWrapper: {
    marginTop: 20,
    width: "90%",
    height: 60,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorYellowgreen_100,
    alignItems: "center",
    justifyContent: "center",
  },
  proceed: {
    fontSize: FontSize.size_xl,
    color: Color.colorGainsboro_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  profileChild: {
    width: 84, // Set the width of the image
    height: 84, // Set the height of the image to be the same as the width
    borderRadius: 42, // Half of the width/height to make it circular
    alignSelf: "center",
    marginTop: 100,
  },
  editIconParent: {
    // borderRadius: Border.br_9xs,
    backgroundColor: Color.colorYellowgreen_100,
    height: 167,
    position: "absolute",
    width: "100%",
  },
  vuesaxlineararrowLeftIcon: {
    top: 50,
    left: 28,
  },
  iconLayout: {
    height: 24,
    width: 24,
    position: "absolute",
  },
  profile2: {
    top: 52,
    left: 63,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    width: 53,
    height: 20,

    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
});

export default Profile;
