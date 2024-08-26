import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons"; // Import the icon library

const AdminUsers = ({ route, navigation }) => {
  const { users } = route.params;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        <View style={mainContainerStyle}>
          <View style={userCardContainerStyle}>
            {/* Header with Back Arrow and "ALL USERS" Text */}
            <View style={headerStyle}>
              <Pressable onPress={() => navigation.goBack()}>
                <Text>
                  <Icon name="arrow-back" size={24} color="#000" />
                  {/* Back Arrow Icon */}
                </Text>
              </Pressable>
              <Text style={titleTextStyle}>ALL USERS</Text>
            </View>

            {/* Total Users Text */}
            <Text style={totalUsersTextStyle}>TOTAL USERS: {users.length}</Text>

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
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1, // Ensures the scroll view takes the full height
};

const mainContainerStyle = {
  width: "100%", // Makes sure the container takes up the full width
  justifyContent: "center", // Center content horizontally
  alignItems: "center", // Center content horizontally
};

const userCardContainerStyle = {
  padding: 20,
  width: "90%", // Container width set to 90% of the screen width
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  backgroundColor: "#6CBC37",
  marginTop: 30,
};

const headerStyle = {
  flexDirection: "row", // Arrange items in a row
  alignItems: "center", // Vertically center the items
  marginBottom: 10, // Add some spacing below the header
};

const titleTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginLeft: 10, // Add spacing between the icon and the text
};

const totalUsersTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
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
