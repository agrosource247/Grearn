import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons"; // Import the icon library

const AdminInvestments = ({ route, navigation }) => {
  const { investments } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        <View style={mainContainerStyle}>
          {/* Header with Back Arrow and "ALL INVESTMENTS" Text */}
          <View style={headerStyle}>
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#000" />{" "}
              {/* Back Arrow Icon */}
            </Pressable>
            <Text style={titleTextStyle}>ALL INVESTMENTS</Text>
          </View>

          {/* Total Investment Text */}
          <Text style={totalInvestmentsTextStyle}>
            TOTAL INVESTMENT: {investments?.length}
          </Text>

          <Pressable
            style={buttonStyle}
            onPress={() => navigation.navigate("AdminNewInvestment")}
          >
            <Text style={buttonTextStyle}>Add New Investment</Text>
          </Pressable>

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

const mainContainerStyle = {
  width: "100%", // Ensures the main container takes up the full width of the screen
  justifyContent: "center", // Center horizontally
  alignItems: "center", // Center horizontally
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

const totalInvestmentsTextStyle = {
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
  backgroundColor: "#fff",
  width: "90%", // Ensure card takes 90% width inside the container
};

const buttonStyle = {
  backgroundColor: "#6CBC37",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  marginVertical: 10,
  width: "45%", // Set button width to 45%
};

const buttonTextStyle = {
  color: "white",
  fontSize: 16,
};

export default AdminInvestments;
