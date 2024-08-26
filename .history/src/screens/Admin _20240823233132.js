import React from "react";
import { Pressable, Text, View } from "react-native";
import UseAuth from "../services/hooks/UseAuth";
import {
  AdminInvestmentCall,
  AdminTransactionCall,
  AdminUsersCall,
  User,
} from "../services/api";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/core";

const Admin = ({ navigation }) => {
  const { auth } = UseAuth();
  const [users, setUsers] = React.useState([]);
  const [transactions, setTransactions] = React.useState([]);
  const [investments, setInvestments] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    AdminUsersCall(setUsers, new AbortController(), "get");
    AdminTransactionCall(setTransactions, new AbortController(), "get");
    AdminInvestmentCall(setInvestments, new AbortController(), "get");
  }, [auth.id]);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      // Clear previous data
      setUsers([]);
      setInvestments([]);
      setTransactions([]);
      AdminUsersCall(setUsers, new AbortController(), "get");
      AdminTransactionCall(setTransactions, new AbortController(), "get");
      AdminInvestmentCall(setInvestments, new AbortController(), "get");
      setLoading(false);
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <Text style={{ color: "white", fontSize: 16 }}>Loading...</Text>
      ) : (
        <View
          style={{
            marginBottom: 10,
            padding: 20,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 20,
            width: "90%",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            ADMIN PANEL
          </Text>
          <Pressable
            style={{
              backgroundColor: "#6CBC37",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate("AdminUsers", { users: users })}
          >
            <Text style={{ color: "white", fontSize: 16 }}>VIEW USERS</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#6CBC37",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={() =>
              navigation.navigate("AdminInvestments", {
                investments: investments,
              })
            }
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              VIEW INVESTMENTS
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#6CBC37",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={() =>
              navigation.navigate("AdminTransactions", {
                transactions: transactions,
              })
            }
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              VIEW TRANSACTIONS
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export const AdminUsers = ({ route, navigation }) => {
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
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginBottom: 10,
              padding: 20,
              flex: 1,
              borderColor: "lightgray",
              borderRadius: 20,
              width: 400,
              height: 40,
              marginTop: 30,
              backgroundColor: "#6578",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              ALL USERS
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              TOTAL USERS: {users.length}
            </Text>
            <View>
              {users.map((user, index) => {
                return (
                  <Text
                    style={{
                      marginBottom: 10,
                      padding: 20,
                      borderWidth: 1,
                      borderColor: "lightgray",
                      borderRadius: 20,
                      width: "90%",
                    }}
                    key={index}
                    onPress={() =>
                      navigation.navigate("AdminUserEdit", { user: user })
                    }
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
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export const AdminTransactions = ({ route, navigation }) => {
  const { transactions } = route.params;
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginBottom: 10,
              padding: 20,
              borderWidth: 1,
              borderColor: "lightgray",
              borderRadius: 20,
              width: "90%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              ALL TRANSACTION
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              TOTAL TRANSACTION: {transactions?.length}
            </Text>
            <View>
              {transactions?.map((transaction, index) => {
                return (
                  <Text
                    style={{
                      marginBottom: 10,
                      padding: 20,
                      borderWidth: 1,
                      borderColor: "lightgray",
                      borderRadius: 20,
                      width: "90%",
                    }}
                    key={index}
                    onPress={() =>
                      navigation.navigate("AdminTransactionEdit", {
                        transaction: transaction,
                      })
                    }
                  >
                    <Text>Product: {transaction.product}</Text>
                    <Text>Transaction type: {transaction.transactionType}</Text>
                    <Text>Amount: {transaction.amount}</Text>
                    {transaction.transactionType === "Investment" && (
                      <Text>Duration: {transaction.duration}</Text>
                    )}
                    <Text>
                      Completed: {transaction.completed ? "Success" : "Failed"}
                    </Text>
                    <Text>
                      Date Created:{" "}
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </Text>
                    <Text>
                      Time Created:{" "}
                      {new Date(transaction.createdAt).toLocaleTimeString()}
                    </Text>
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export const AdminInvestments = ({ route, navigation }) => {
  const { investments } = route.params;
  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginBottom: 10,
              padding: 20,
              borderWidth: 1,
              borderColor: "lightgray",
              borderRadius: 20,
              width: "90%",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              ALL INVESTMENT
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
              TOTAL INVESTMENT: {investments?.length}
            </Text>
            <Pressable
              style={{
                backgroundColor: "#6CBC37",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate("AdminNewInvestment")}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Add New Investment
              </Text>
            </Pressable>
            <View>
              {investments?.map((investment, index) => {
                return (
                  <Text
                    style={{
                      marginBottom: 10,
                      padding: 20,
                      borderWidth: 1,
                      borderColor: "lightgray",
                      borderRadius: 20,
                      width: "90%",
                    }}
                    key={index}
                    onPress={() =>
                      navigation.navigate("AdminInvestmentEdit", {
                        investment: investment,
                      })
                    }
                  >
                    <Text>Product: {investment.product}</Text>
                    <Text>Amount: {investment.amount}</Text>
                    <Text>Duration: {investment.duration}</Text>
                    <Text>
                      Completed: {investment.completed ? "Success" : "Failed"}
                    </Text>
                    <Text>
                      Date Created:{" "}
                      {new Date(investment.createdAt).toLocaleDateString()}
                    </Text>
                    <Text>
                      Time Created:{" "}
                      {new Date(investment.createdAt).toLocaleTimeString()}
                    </Text>
                  </Text>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default Admin;
