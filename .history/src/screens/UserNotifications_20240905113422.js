import React, { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the icon library for the backarrow am using
import { Notification } from "../services/api";
import UseAuth from "../services/hooks/UseAuth";

const UserNotifications = () => {
  const { auth } = UseAuth();
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    Notification(setNotifications, new AbortController(), auth, "get");

    setLoading(false);
  }, [auth.id]);
  // console.log(notifications);

  useFocusEffect(
    React.useCallback(() => {
      setNotifications([]);
      Notification(setNotifications, new AbortController(), auth, "get");
    }, [])
  );

  const setForm = async (id) => {
    const form = {
      id: auth.id,
    };
    return form;
  };

  const handleDelete = async (id) => {
    setLoading(true);
    const form = await setForm(id);
    try {
      const controller = new AbortController();
      const res = Notification(form, new AbortController(), auth, "delete");
      console.log(res);
      if (res?.status === 200) {
        controller.abort();
        alert("Investment Successfully Deleted");
        navigation.navigate("Admin");
      } else alert(res?.data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

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
        {notifications.length < 0 ? (
          <Text style={styles.noNotifications}>No notifications</Text>
        ) : (
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.notification}>Title: {item.title}</Text>
                <Text style={styles.notification}>Text: {item.text}</Text>
                <Text style={styles.notification}>Author: {item.author}</Text>
                <Text>
                  Date Created: {new Date(item.createdAt).toLocaleDateString()}
                </Text>
                <Pressable
                  style={styles.button}
                  onPress={() => handleDelete(item._id)}
                >
                  <Text style={styles.buttonText}>
                    {loading ? "Loading..." : "Delete"}
                  </Text>
                </Pressable>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6CBC37",
    height: 80,
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
    marginTop: 10,
    fontSize: 16,
    color: "#888",
  },
  notification: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
  },
});

export default UserNotifications;
