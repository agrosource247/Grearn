import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons"; // Import the icon library

const AdminTransactions = ({ route, navigation }) => {
  const { transactions } = route.params;

  return (
    <GestureHandlerRootView style={containerStyle}>
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        {/* Centered Header Row with Back Arrow and "ALL TRANSACTIONS" text */}
        <View style={headerContainerStyle}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>
              <Icon name="arrow-back" size={24} color="#000" />{" "}
              {/* Back Arrow */}
            </Text>
          </Pressable>
          <Text style={titleTextStyle}>ALL TRANSACTIONS</Text>
        </View>

        {/* Total Transactions Text */}
        <Text style={totalTransactionsTextStyle}>
          TOTAL TRANSACTION: {transactions?.length}
        </Text>

        {/* Transaction Cards */}
        <View>
          {transactions?.map((transaction, index) => (
            <Pressable
              key={index}
              style={cardStyle} // Using the same cardStyle as in AdminInvestments
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
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

// Styles for centering content horizontally with 90% width
const containerStyle = {
  flex: 1,
  // backgroundColor: "#fff", // Set the overall background color to white
};

const scrollViewContainerStyle = {
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
};

const headerContainerStyle = {
  flexDirection: "row", // Arrange items in a row
  alignItems: "center", // Vertically align items
  justifyContent: "center", // Horizontally center the content
  width: "100%", // Ensure the header takes the full width
  marginBottom: 10, // Add spacing below the header
  marginTop: 50, // Add some spacing from the top of the screen
};

const titleTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginLeft: 10, // Add spacing between the icon and the text
};

const totalTransactionsTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center", // Center text horizontally
};

const cardStyle = {
  marginBottom: 10,
  padding: 20,
  borderWidth: 1,
  borderColor: "lightgray",
  borderRadius: 20,
  backgroundColor: "#fff",
  width: "90%", // Make the card take up 90% width inside the container
  alignSelf: "center", // Center the card horizontally
};

export default AdminTransactions;
