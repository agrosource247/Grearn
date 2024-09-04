import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import { AdminUsersCall, Notification, User } from "../services/api";
import { Picker } from "@react-native-picker/picker";
import UseAuth from "../services/hooks/UseAuth";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const AdminNotifications = ({ navigation }) => {
  const { auth } = UseAuth();
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [author, setAuthor] = React.useState("Tim - CEO");
  const [receiver, setReceiver] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    AdminUsersCall(setUsers, new AbortController(), "get");
  }, [auth.id]);

  const setForm = async () => {
    const form = {
      id: receiver,
      title: title,
      text: text,
      author: author,
    };
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const controller = new AbortController();
      const form = await setForm();
      const res = await Notification(form, controller, auth, "post");
      if (res?.status === 200) {
        controller.abort();
        alert("Notification has been sent");
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
          <Text style={styles.profileTitle}>Send Notifications</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Text</Text>
            <TextInput
              style={styles.input}
              placeholder="Text"
              value={text}
              onChangeText={setText}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Author</Text>
            <TextInput
              style={styles.input}
              placeholder="Author"
              value={author}
              onChangeText={setAuthor}
            />
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={receiver}
              style={styles.picker}
              onValueChange={(itemValue) => setReceiver(itemValue)}
            >
              {users.map((item, index) => (
                <Picker.Item
                  key={index}
                  value={item._id}
                  label={`${item.firstname} ${item.lastname}`}
                >
                  {item.firstname} {item.lastname}
                </Picker.Item>
              ))}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default AdminNotifications;
