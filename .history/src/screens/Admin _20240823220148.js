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
        <View style={styles.addNewCard}>
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
    <GestureHandlerRootView style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.enterYourCardNumberWrapper}>ALL USERS</Text>
          <Text style={styles.enterYourCardNumberWrapper}>
            TOTAL USERS: {users.length}
          </Text>
          <View>
            {users.map((user, index) => {
              return (
                <Text
                  style={styles.userCard}
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
          <View style={styles.addNewCard}>
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
                    style={styles.addNewCard}
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
                    style={styles.addNewCard}
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
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  userCard: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    width: "100%", // Ensures the user cards take up the full width of the parent container
  },
  enterYourCardNumberWrapper: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
