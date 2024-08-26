import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AdminInvestments = ({ route, navigation }) => {
  const { investments } = route.params;

  return (
    <GestureHandlerRootView>
      <ScrollView contentContainerStyle={scrollViewContainerStyle}>
        <Text style={titleTextStyle}>ALL INVESTMENTS</Text>
        <Text style={titleTextStyle}>
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
  backgroundColor: "#fff",
  width: "100%", // Make the card take up full width inside the container
};

const buttonStyle = {
  backgroundColor: "#6CBC37",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  // marginVertical: 10,
  height: 35,
  justifyContent: "center",
};

const buttonTextStyle = {
  color: "white",
  fontSize: 16,
};

export default AdminInvestments;
