import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        //since your busy i created this Function to send notification to backend your can edit it later
        // Try fetching notifications from the backend
        const response = await axios.get(
          "https://your-backend-api.com/notifications"
        );
        const fetchedNotifications = response.data.notifications;

        // Store the fetched notifications in AsyncStorage for offline access
        await AsyncStorage.setItem(
          "notifications",
          JSON.stringify(fetchedNotifications)
        );

        // Set the notifications to state
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);

        // If fetching fails, try loading notifications from AsyncStorage
        const storedNotifications = await AsyncStorage.getItem("notifications");
        if (storedNotifications) {
          setNotifications(JSON.parse(storedNotifications));
        }
      } finally {
        setLoading(false); // Stop loading once the fetch or loading from storage is done
      }
    };

    fetchNotifications();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Notifications</Text>
      {notifications.length === 0 ? (
        <Text>No notifications</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.notification}>{item.message}</Text>
          )}
        />
      )}
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
  notification: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
  },
});

export default UserNotifications;
