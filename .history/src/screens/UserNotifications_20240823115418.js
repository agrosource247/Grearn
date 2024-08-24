import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library

const UserNotifications = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
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
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>User Notifications</Text>
      </View>
      <View style={styles.content}>
        {notifications.length === 0 ? (
          <Text style={styles.noNotifications}>No notifications</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6CBC37",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    flex: 1, // Ensures title takes up available space
  },
  content: {
    flex: 1,
    backgroundColor: "#fff", // Background color for FlatList and content area
    paddingHorizontal: 20, // Match header padding
  },
  noNotifications: {
    fontSize: 16,
    color: "#888",
  },
  notification: {
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
});

export default UserNotifications;
