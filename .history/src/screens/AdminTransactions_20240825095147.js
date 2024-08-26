import React from "react";
import { Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AdminTransactions = ({ route, navigation }) => {
  const { transactions } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={transactionCardStyle}>
            <Text style={titleTextStyle}>ALL TRANSACTIONS</Text>
            <Text style={titleTextStyle}>
              TOTAL TRANSACTION: {transactions?.length}
            </Text>
            <View>
              {transactions?.map((transaction, index) => (
                <Text
                  key={index}
                  style={cardStyle}
                  onPress={() =>
                    navigation.navigate("AdminTransactionEdit", { transaction })
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
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const transactionCardStyle = {
  marginBottom: 10,
  padding: 20,
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  width: "90%",
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

export default AdminTransactions;
