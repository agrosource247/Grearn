import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

const AdminNotifications = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to network status updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);

      // Sync notifications when back online
      if (state.isConnected) {
        syncNotifications();
      }
    });

    return () => unsubscribe();
  }, []);

  // Function to send a notification
  const sendNotification = async () => {
    if (message.trim()) {
      if (isConnected) {
        // If online, send to backend
        await sendToBackend(message);
      } else {
        // If offline, store locally
        await storeLocally(message);
        Alert.alert(
          "Notification saved locally",
          "It will be sent when you're back online."
        );
      }
      setMessage("");
      navigation.navigate("User Notifications");
    } else {
      Alert.alert("Error", "Please enter a notification message");
    }
  };

  // Store notification locally
  const storeLocally = async (message) => {
    try {
      const storedNotifications = await AsyncStorage.getItem(
        "pendingNotifications"
      );
      const pendingNotifications = storedNotifications
        ? JSON.parse(storedNotifications)
        : [];
      pendingNotifications.push({ message });
      await AsyncStorage.setItem(
        "pendingNotifications",
        JSON.stringify(pendingNotifications)
      );
    } catch (error) {
      console.error("Error storing notification locally:", error);
    }
  };

  // Sync locally stored notifications with the backend
  const syncNotifications = async () => {
    try {
      const storedNotifications = await AsyncStorage.getItem(
        "pendingNotifications"
      );
      const pendingNotifications = storedNotifications
        ? JSON.parse(storedNotifications)
        : [];

      for (const notification of pendingNotifications) {
        await sendToBackend(notification.message);
      }

      // Clear locally stored notifications once synced
      await AsyncStorage.removeItem("pendingNotifications");
    } catch (error) {
      console.error("Error syncing notifications:", error);
    }
  };

  // Function to send notification to backend
  const sendToBackend = async (message) => {
    try {
      await axios.post("https://your-backend-api.com/notifications", {
        message,
      });
      Alert.alert(
        "Notification sent!",
        "The notification has been sent to users."
      );
    } catch (error) {
      console.error("Error sending notification:", error);
      Alert.alert("Error", "Failed to send notification. Please try again.");
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
