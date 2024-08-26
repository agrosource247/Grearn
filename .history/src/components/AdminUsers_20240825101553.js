import React from "react";
import { Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AdminUsers = ({ route, navigation }) => {
  const { users } = route.params;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {" "}
      {/* Full height */}
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        <View style={mainContainerStyle}>
          <View style={userCardContainerStyle}>
            <Text style={titleTextStyle}>ALL USERS</Text>
            <Text style={titleTextStyle}>TOTAL USERS: {users.length}</Text>
            <View>
              {users.map((user, index) => (
                <Pressable
                  key={index}
                  style={cardStyle}
                  onPress={() => navigation.navigate("AdminUserEdit", { user })}
                >
                  <Text>Username: {user.username}</Text>
                  <Text>Email: {user.email}</Text>
                  <Text>Walletbalance: {user.Walletbalance}</Text>
                  <Text>Firstname: {user.firstname}</Text>
                  <Text>Lastname: {user.lastname}</Text>
                  <Text>Roles: {user.roles}</Text>
                  <Text>
                    Date Created:{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

// Main container style to center everything horizontally
const scrollViewContainerStyle = {
  justifyContent: "flex-start", // Ensure that content starts from the top
  alignItems: "center", // Center content horizontally
  paddingVertical: 20, // Provide some padding at the top and bottom
};

const mainContainerStyle = {
  width: "100%", // Ensures the container takes up the full width
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content horizontally
};

const userCardContainerStyle = {
  padding: 20,
  width: "90%", // Container width set to 90% of the screen width
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  backgroundColor: "#6578",
  marginTop: 30,
};

const titleTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 5,
};

const cardStyle = {
  marginBottom: 10,
  padding: 20,
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  backgroundColor: "#fff", // Adding a background color to differentiate from the container
};

export default AdminUsers;
