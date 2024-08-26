import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons"; // Import the icon library

const AdminInvestments = ({ route, navigation }) => {
  const { investments } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        {/* Header Row with Back Arrow and "ALL INVESTMENTS" text */}
        <View style={headerContainerStyle}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>
              <Icon name="arrow-back" size={24} color="#000" />{" "}
              {/* Back Arrow */}
            </Text>
          </Pressable>
          <Text style={titleTextStyle}>ALL INVESTMENTS</Text>
        </View>

        {/* Total Investment Text */}
        <Text style={totalInvestmentsTextStyle}>
          TOTAL INVESTMENT: {investments?.length}
        </Text>

        {/* Add New Investment Button */}
        <Pressable
          style={buttonStyle}
          onPress={() => navigation.navigate("AdminNewInvestment")}
        >
          <Text style={buttonTextStyle}>Add New Investment</Text>
        </Pressable>

        {/* Investment Cards */}
        <View>
          {investments?.map((investment, index) => (
            <Pressable
              key={index}
              style={cardStyle}
              onPress={() =>
                navigation.navigate("AdminInvestmentEdit", {
                  investment,
                })
              }
            >
              <Text>Product: {investment.product}</Text>
              <Text>Minimum Invest: {investment.minimum_invest}</Text>
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
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

// Styles for centering content horizontally with 90% width
const scrollViewContainerStyle = {
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
};

const headerContainerStyle = {
  flexDirection: "row", // Arrange items in a row
  alignItems: "center", // Vertically align items
  width: "100%", // Ensure the header takes the full width
  paddingHorizontal: 20, // Add padding to align with card start
  marginBottom: 10, // Add spacing below the header
  marginTop: 50,
};

const titleTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  marginLeft: 10, // Add spacing between the icon and the text
};

const totalInvestmentsTextStyle = {
  fontSize: 16,
  fontWeight: "bold",
  // marginBottom: 10,
  // paddingHorizontal: 20, // Align with the cards
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

const buttonStyle = {
  backgroundColor: "#6CBC37",
  paddingHorizontal: 10, // Add horizontal padding
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center", // Center content vertically
  marginVertical: 10,
  height: 35, // Set height
  width: "45%", // Set button width to 45%
  alignSelf: "center", // Center the button horizontally
};

const buttonTextStyle = {
  color: "white",
  fontSize: 16,
};

export default AdminInvestments;
