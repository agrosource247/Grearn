import React from "react";
import { Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AdminUsers = ({ route, navigation }) => {
  const { users } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={userCardStyle}>
            <Text style={titleTextStyle}>ALL USERS</Text>
            <Text style={titleTextStyle}>TOTAL USERS: {users.length}</Text>
            <View>
              {users.map((user, index) => (
                <Text
                  key={index}
                  style={cardStyle}
                  onPress={() => navigation.navigate("AdminUserEdit", { user })}
                >
                  <Text>Username: {user.username}</Text>
                  <Text>Email: {user.email}</Text>
                  <Text>Walletbalance: {user.Walletbalance}</Text>
                  <Text>firstname: {user.firstname}</Text>
                  <Text>lastname: {user.lastname}</Text>
                  <Text>roles: {user.roles}</Text>
                  <Text>
                    Date Created:{" "}
                    {new Date(user.createdAt).toLocaleDateString()}
                  </Text>
                </Text>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const userCardStyle = {
  marginBottom: 10,
  padding: 20,
  flex: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  width: 400,
  height: 40,
  marginTop: 30,
  backgroundColor: "#6578",
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
  width: "90%",
};

export default AdminUsers;
