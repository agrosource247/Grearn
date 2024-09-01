import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AdminNotifications = ({ navigation }) => {
  const { auth } = UseAuth();
  const [title, setTitle] = React.useState("");
  const [text, settext] = React.useState("");
  const [author, setAuthor] = React.useState("");

  const setForm = async () => {
    const form = {
      id: auth.id,
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Notification</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default AdminNotifications;
