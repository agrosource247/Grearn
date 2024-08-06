import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TradeSelection = ({ onProceed, onCancel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you want to proceed to the dashboard?</Text>
      <Button title="Yes" onPress={onProceed} />
      <Button title="No" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default TradeSelection;
