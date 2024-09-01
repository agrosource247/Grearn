import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import { ImageUpload, Investment, Transaction, User } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";

export const AdminUserEdit = ({ route, navigation }) => {
  const { user } = route.params;
  const { auth } = UseAuth();
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [roles, setRoles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const setForm = async () => {
    const form = {
      id: user._id,
      firstname: firstname,
      lastname: lastname,
      username: username,
      phone: phone,
      email: email,
      password: password,
      country: country,
      dob: dob,
    };
    return form;
  };

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
        navigation.navigate("Admin");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profile}>
          <StatusBar style="auto" />
          <Text style={styles.profileTitle}>
            Profile: {user && user.username}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Firstname</Text>
            <TextInput
              style={styles.input}
              placeholder="Firstname"
              onChangeText={setFirstname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Lastname</Text>
            <TextInput
              style={styles.input}
              placeholder="Lastname"
              onChangeText={setLastname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Country Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Country"
              onChangeText={setCountry}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone number</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={setPhone}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="****"
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Date of birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Date of birth"
              onChangeText={setDob}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={roles}
              style={styles.picker}
              onValueChange={(itemValue) => setRoles(itemValue)}
            >
              <Picker.Item label="User" value="User" />
              <Picker.Item label="Admin" value="Admin" />
            </Picker>
          </View>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Loading" : "Proceed"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export const AdminNewInvestment = ({ navigation }) => {
  const { auth } = UseAuth();
  const [product, setProduct] = React.useState("");
  const [roi, setRoi] = React.useState("");
  const [minimum_invest, setMinimum_invest] = React.useState("");
  const [info, setInfo] = React.useState("");
  const [geo_location, setGeo_location] = React.useState("");
  const [gain, setGain] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState("");

  const setForm = async () => {
    const form = {
      id: auth.id,
      product: product,
      roi: roi,
      minimum_invest: minimum_invest,
      info: info,
      geo_location: geo_location,
      gain: gain,
      duration: duration,
      image: image,
      completed: true,
    };
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const controller = new AbortController();
      const form = await setForm();
      const res = await Investment(form, controller, "post");
      if (res?.status === 200) {
        controller.abort();
        alert("Update Successful");
        navigation.navigate("Admin");
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const formData = new FormData();
      formData.append("my_file", {
        name: `${new Date().getTime()}_investment.jpg`,
        uri: image,
        type: "image/jpg",
      });

      try {
        const controller = new AbortController();
        const res = await ImageUpload(formData, controller);

        if (res.success) {
          setImage(res.data.secure_url);
          controller.abort();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleImagePress = () => {
    Alert.alert(
      "Change Investment Picture",
      "Choose an option",
      [
        { text: "Select Image", onPress: handleSelectImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profile}>
          <StatusBar style="auto" />
          <Text style={styles.profileTitle}>Add New Investment</Text>

          <View style={styles.inputContainer}>
            {image ? (
              <Pressable onPress={handleImagePress} style={{ flex: 1 }}>
                <Image
                  key={image}
                  style={styles.input}
                  source={{ uri: image }}
                />
              </Pressable>
            ) : (
              <Pressable style={styles.button} onPress={handleImagePress}>
                <Text style={styles.buttonText}>Add Image</Text>
              </Pressable>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Product</Text>
            <TextInput
              style={styles.input}
              placeholder="Product"
              value={product}
              onChangeText={setProduct}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Minimum Invest</Text>
            <TextInput
              style={styles.input}
              placeholder="25000"
              value={minimum_invest}
              onChangeText={setMinimum_invest}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ROI</Text>
            <TextInput
              style={styles.input}
              placeholder="5"
              value={roi}
              onChangeText={setRoi}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Duration in days</Text>
            <TextInput
              style={styles.input}
              placeholder="60"
              value={duration}
              onChangeText={setDuration}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gain</Text>
            <TextInput
              style={styles.input}
              placeholder="54"
              value={gain}
              onChangeText={setGain}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Geo Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Geo_location"
              value={geo_location}
              onChangeText={setGeo_location}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Info</Text>
            <TextInput
              style={styles.input}
              placeholder="Info"
              value={info}
              onChangeText={setInfo}
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Loading" : "Proceed"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export const AdminInvestmentEdit = ({ route, navigation }) => {
  const { investment } = route.params;
  const [image, setImage] = React.useState("");

  const [product, setProduct] = React.useState(
    investment ? investment.product : ""
  );
  const [roi, setRoi] = React.useState(investment ? investment.roi : "");
  const [minimum_invest, setMinimum_invest] = React.useState(
    investment ? investment.minimum_invest : ""
  );
  const [info, setInfo] = React.useState(investment ? investment.info : "");
  const [geo_location, setGeo_location] = React.useState(
    investment ? investment.geo_location : ""
  );
  const [gain, setGain] = React.useState(investment ? investment.gain : "");
  const [duration, setDuration] = React.useState(
    investment ? investment.duration : ""
  );
  const [loading, setLoading] = React.useState(false);
  const [delLoading, setdelLoading] = React.useState(false);

  const setForm = async () => {
    const form = {
      OrderID: investment._id,
      product: product,
      roi: roi,
      minimum_invest: minimum_invest,
      info: info,
      geo_location: geo_location,
      gain: gain,
      duration: duration,
      image: image,
      completed: true,
    };
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const controller = new AbortController();
      const form = await setForm();
      const res = await Investment(form, controller, "patch");
      if (res?.status === 200) {
        controller.abort();
        alert("Update Successful");
        navigation.navigate("Admin");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // console.log(investment);

  const handleDelete = async () => {
    setdelLoading(true);
    try {
      const controller = new AbortController();
      const form = await setForm();
      const res = await Investment(form, controller, "delete");
      console.log(res);
      if (res?.status === 200) {
        controller.abort();
        alert("Investment Successfully Deleted");
        navigation.navigate("Admin");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setdelLoading(false);
    }
  };

  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      const formData = new FormData();
      formData.append("my_file", {
        name: `${new Date().getTime()}_investment.jpg`,
        uri: image,
        type: "image/jpg",
      });

      try {
        const controller = new AbortController();
        const res = await ImageUpload(formData, controller);

        if (res.success) {
          setImage(res.data.secure_url);
          controller.abort();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleImagePress = () => {
    Alert.alert(
      "Change Investment Picture",
      "Choose an option",
      [
        { text: "Select Image", onPress: handleSelectImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profile}>
          <StatusBar style="auto" />
          <Text style={styles.profileTitle}>
            Profile: {investment && investment.product}
          </Text>
          <Pressable style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>
              {delLoading ? "Loading..." : "Delete"}
            </Text>
          </Pressable>

          <View style={styles.inputContainer}>
            {image ? (
              <Pressable
                onPress={handleImagePress}
                style={{ flex: 1, marginTop: "12px" }}
              >
                <Image
                  key={image}
                  style={styles.input}
                  source={{ uri: image }}
                />
              </Pressable>
            ) : (
              <Pressable style={styles.button} onPress={handleImagePress}>
                <Text style={styles.buttonText}>Add Image</Text>
              </Pressable>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Product</Text>
            <TextInput
              style={styles.input}
              placeholder="Product"
              value={product}
              onChangeText={setProduct}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Minimum Invest</Text>
            <TextInput
              style={styles.input}
              placeholder="Minimum_invest"
              value={minimum_invest.toString()}
              onChangeText={setMinimum_invest}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>ROI</Text>
            <TextInput
              style={styles.input}
              placeholder="Roi"
              value={roi.toString()}
              onChangeText={setRoi}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Duration in days</Text>
            <TextInput
              style={styles.input}
              placeholder="Duration"
              value={duration.toString()}
              onChangeText={setDuration}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Gain</Text>
            <TextInput
              style={styles.input}
              placeholder="Gain"
              value={gain.toString()}
              onChangeText={setGain}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Geo Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Geo_location"
              value={geo_location}
              onChangeText={setGeo_location}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Info</Text>
            <TextInput
              style={styles.input}
              placeholder="Info"
              value={info}
              onChangeText={setInfo}
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Loading" : "Proceed"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export const AdminTransactionEdit = ({ route, navigation }) => {
  const { transaction } = route.params;
  const { auth } = UseAuth();
  const [completed, setCompleted] = React.useState(transaction?.completed);
  const [loading, setLoading] = React.useState(false);

  const setForm = async () => {
    const form = {
      OrderID: transaction._id,
      refund: true,
      completed: completed,
    };
    return form;
  };

  console.log(transaction);
  const handleRefund = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let isMounted = true;
      const controller = new AbortController();
      const form = await setForm();
      const res = await Transaction(isMounted, form, controller, auth, "patch");
      if (res?.status === 200) {
        isMounted = false;
        controller.abort();
        alert("Update Successful");
        navigation.navigate("Admin");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profile}>
          <StatusBar style="auto" />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username: {transaction?.username}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Product: {transaction?.product}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Transaction type: {transaction?.transactionType}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Amount: {transaction?.amount}</Text>
          </View>
          {transaction.transactionType === "Investment" && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Days Left: {transaction?.duration}
              </Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Status: {transaction?.completed ? "Success" : "Failed"}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Date Created:{" "}
              {new Date(transaction.createdAt).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Time Created:{" "}
              {new Date(transaction.createdAt).toLocaleTimeString()}
            </Text>
          </View>
          {!transaction?.completed && (
            <Pressable style={styles.button} onPress={handleRefund}>
              <Text style={styles.buttonText}>Refund</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  profile: {
    padding: 20,
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default AdminUserEdit;
