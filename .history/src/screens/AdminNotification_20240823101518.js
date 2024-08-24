import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AdminNotifications = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const sendNotification = async () => {
    if (message.trim()) {
      const storedNotifications = await AsyncStorage.getItem("notifications");
      const notifications = storedNotifications
        ? JSON.parse(storedNotifications)
        : [];
      notifications.push(message);
      await AsyncStorage.setItem(
        "notifications",
        JSON.stringify(notifications)
      );
      setMessage("");
      alert("Notification sent!");
      navigation.navigate("User Notifications"); // Navigate back to user notifications page
    } else {
      alert("Please enter a notification message");
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
