import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.proceedButtonText}>Loading...</Text>
      ) : (
        <View style={styles.panelCard}>
          <Text style={styles.enterYourCardNumberWrapper}>ADMIN PANEL</Text>
          <Pressable
            style={styles.proceedButton}
            onPress={() => navigation.navigate("AdminUsers", { users: users })}
          >
            <Text style={styles.proceedButtonText}>VIEW USERS</Text>
          </Pressable>
          <Pressable
            style={styles.proceedButton}
            onPress={() =>
              navigation.navigate("AdminInvestments", {
                investments: investments,
              })
            }
          >
            <Text style={styles.proceedButtonText}>VIEW INVESTMENTS</Text>
          </Pressable>
          <Pressable
            style={styles.proceedButton}
            onPress={() =>
              navigation.navigate("AdminTransactions", {
                transactions: transactions,
              })
            }
          >
            <Text style={styles.proceedButtonText}>VIEW TRANSACTIONS</Text>
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
        <View style={styles.container}>
          <View style={styles.alluserCard}>
            <Text style={styles.enterYourCardNumberWrapper}> ALL USERS</Text>
            <Text style={styles.enterYourCardNumberWrapper}>
              TOTAL USERS: {users.length}
            </Text>
            <View>
              {users.map((user, index) => {
                return (
                  <Text
                    style={styles.adminUserCard}
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
        <View style={styles.container}>
          <View style={styles.adminTransCard}>
            <Text style={styles.enterYourCardNumberWrapper}>
              {" "}
              ALL TRANSACTION
            </Text>
            <Text style={styles.enterYourCardNumberWrapper}>
              {" "}
              TOTAL TRANSACTION: {transactions?.length}
            </Text>
            <View>
              {transactions?.map((transaction, index) => {
                return (
                  <Text
                    style={styles.adminCard}
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
        <View style={styles.container}>
          <View style={styles.addNewCard}>
            <Text style={styles.enterYourCardNumberWrapper}>
              {" "}
              ALL INVESTMENT
            </Text>
            <Text style={styles.enterYourCardNumberWrapper}>
              {" "}
              TOTAL INVESTMENT: {investments?.length}
            </Text>
            <Pressable
              style={styles.proceedButton}
              onPress={() => navigation.navigate("AdminNewInvestment")}
            >
              <Text style={styles.proceedButtonText}>Add New Investment</Text>
            </Pressable>
            <View>
              {investments?.map((investment, index) => {
                return (
                  <Text
                    style={styles.investCard}
                    key={index}
                    onPress={() =>
                      navigation.navigate("AdminInvestmentEdit", {
                        investment: investment,
                      })
                    }
                  >
                    <Text>Product: {investment.product}</Text>
                    <Text>Minimun Invest: {investment.minimum_invest}</Text>
                    <Text>ROI: {investment.roi}</Text>
                    <Text>Geo Location: {investment.geo_location}</Text>
                    <Text>Duration: {investment.duration}</Text>
                    <Text>Info: {investment.info}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  proceedButton: {
    backgroundColor: "#6CBC37",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  proceedButtonText: {
    color: "white",
    fontSize: 16,
  },
  panelCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },
  investCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },
  adminCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },
  adminTransCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },

  adminUserCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },
  alluserCard: {
    marginBottom: 10,
    // padding: 20,
    // borderWidth: 1,
    flex: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: 400,
    marginTop: 30,
    backgroundColor: "#6578",
  },
  addNewCard: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    width: "90%",
  },
  enterYourCardNumberWrapper: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  tableCell: {
    flex: 1,
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: "#ff6347",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Admin;
