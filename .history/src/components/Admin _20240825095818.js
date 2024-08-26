import React from "react";
import { Pressable, Text, View } from "react-native";
import UseAuth from "../services/hooks/UseAuth";
import {
  AdminUsersCall,
  AdminTransactionCall,
  AdminInvestmentCall,
} from "../services/api";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 5 }}>
            ADMIN PANEL
          </Text>
          <Pressable
            style={buttonStyle}
            onPress={() => navigation.navigate("AdminUsers", { users })}
          >
            <Text style={buttonTextStyle}>VIEW USERS</Text>
          </Pressable>
          <Pressable
            style={buttonStyle}
            onPress={() =>
              navigation.navigate("AdminInvestments", { investments })
            }
          >
            <Text style={buttonTextStyle}>VIEW INVESTMENTS</Text>
          </Pressable>
          <Pressable
            style={buttonStyle}
            onPress={() =>
              navigation.navigate("AdminTransactions", { transactions })
            }
          >
            <Text style={buttonTextStyle}>VIEW TRANSACTIONS</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const buttonStyle = {
  backgroundColor: "#6CBC37",
  padding: 10,
  borderRadius: 5,
  alignItems: "center",
  marginVertical: 10,
};

const buttonTextStyle = {
  color: "white",
  fontSize: 16,
};

export default Admin;
